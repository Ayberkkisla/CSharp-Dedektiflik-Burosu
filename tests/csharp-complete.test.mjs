import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

// Exercise the real shared editor events and replacement ranges without a browser.
class Element {
  constructor() {
    this.children = [];
    this.listeners = {};
    this.attrs = {};
    this.value = "";
    this.selectionStart = this.selectionEnd = 0;
  }
  append(...nodes) {
    for (const node of nodes) {
      node.parent = this;
      this.children.push(node);
    }
  }
  before(node) {
    this.parent?.append(node);
  }
  after(node) {
    this.parent?.append(node);
  }
  replaceChildren() {
    this.children = [];
  }
  setAttribute(k, v) {
    this.attrs[k] = v;
  }
  removeAttribute(k) {
    delete this.attrs[k];
  }
  addEventListener(k, fn) {
    (this.listeners[k] ??= []).push(fn);
  }
  dispatchEvent(event) {
    for (const fn of this.listeners[event.type] || []) fn(event);
  }
  setRangeText(text, start, end) {
    this.value = this.value.slice(0, start) + text + this.value.slice(end);
    this.selectionStart = this.selectionEnd = start + text.length;
  }
  setSelectionRange(start, end) {
    this.selectionStart = start;
    this.selectionEnd = end;
  }
  scrollIntoView() {}
  focus() {}
}
function setup() {
  const c = vm.createContext({
    document: { createElement: () => new Element(), body: { textContent: "" } },
    Event: class {
      constructor(type) {
        this.type = type;
      }
    },
  });
  c.window = c;
  for (const name of ["unit1-box-instructions", "unit1-code-complete"])
    vm.runInContext(
      fs.readFileSync(
        new URL("../assets/" + name + ".js", import.meta.url),
        "utf8",
      ),
      c,
    );
  let current = 0;
  const editor = new Element();
  editor.id = "b7-editor";
  const parent = new Element();
  parent.append(editor);
  const complete = c.Unit1CodeComplete.mount(
    editor,
    () => c.Unit1BoxInstructions[current].inputs,
  );
  const type = (code, caret = code.length) => {
    editor.value = code;
    editor.setSelectionRange(caret, caret);
    editor.dispatchEvent({ type: "input" });
  };
  const menu = () =>
    editor.parent.children.find((e) => e.attrs.role === "listbox");
  const names = () =>
    menu().hidden ? [] : menu().children.map((e) => e.children[0].textContent);
  const key = (k) =>
    complete.handleKeydown({
      key: k,
      preventDefault() {},
      stopPropagation() {},
    });
  return {
    c,
    editor,
    type,
    names,
    key,
    complete,
    setCurrent: (i) => {
      current = i;
      complete.hide();
    },
  };
}
test("int yazınca ilkRaf / ikinciRaf önerilir; Enter geçerli bildirimi ekler", () => {
  const s = setup();
  s.type("int");
  assert.deepEqual(s.names(), ["int ilkRaf", "int ikinciRaf"]);
  s.key("Enter");
  assert.equal(s.editor.value, "int ilkRaf;");
  s.type("int ");
  assert.deepEqual(s.names(), ["ilkRaf", "ikinciRaf"]);
  s.key("ArrowDown");
  s.key("Tab");
  assert.equal(s.editor.value, "int ikinciRaf;");
});
test("soru değişince adlar ve türler değişir; önceki sorunun adı sızmaz", () => {
  const s = setup();
  s.type("int");
  s.setCurrent(1);
  s.type("string ");
  assert.deepEqual(s.names(), ["ad", "bolge"]);
  s.key("Enter");
  assert.equal(s.editor.value, "string ad;");
  s.type("int ");
  assert.ok(!s.names().includes("ilkRaf"));
});
test("her sorunun tüm girdi adları kendi türünden sonra önerilir", () => {
  const s = setup();
  s.c.Unit1BoxInstructions.forEach((q, i) => {
    s.setCurrent(i);
    for (const [name, , type] of q.inputs) {
      s.type(type + " ");
      assert.ok(s.names().includes(name), i + ": " + type + " " + name);
      const allowed = new Set(
        q.inputs.filter((v) => v[2] === type).map((v) => v[0]),
      );
      assert.ok(s.names().every((n) => allowed.has(n)));
    }
  });
});
test("ön ek, mevcut noktalı virgül ve imlecin sağındaki metin doğru tamamlanır", () => {
  const s = setup();
  s.type("int il;");
  s.type("int il;", 6);
  assert.deepEqual(s.names(), ["ilkRaf"]);
  s.key("Enter");
  assert.equal(s.editor.value, "int ilkRaf;");
  s.type("int ilkRaf;", 6);
  s.key("Tab");
  assert.equal(s.editor.value, "int ilkRaf;");
  s.type("int il = 0;", 6);
  s.key("Enter");
  assert.equal(s.editor.value, "int ilkRaf = 0;");
});
test("tanımlanmış değişken yeniden tanımlama olarak önerilmez; ifadede kullanılabilir", () => {
  const s = setup();
  s.type("int ilkRaf = 3;\nint ");
  assert.deepEqual(s.names(), ["ikinciRaf"]);
  s.type("int ilkRaf = 3;\nConsole.WriteLine(il");
  assert.ok(s.names().includes("ilkRaf"));
});
test("yorum ve metinde öneri açılmaz; Console ve Convert önerileri çalışır", () => {
  const s = setup();
  for (const code of ["// int ", "/* int ", 'Console.WriteLine("int ']) {
    s.type(code);
    assert.deepEqual(s.names(), []);
  }
  s.type("Console.");
  assert.ok(s.names().includes("WriteLine"));
  s.type("Convert.");
  assert.ok(s.names().includes("ToInt32"));
  s.complete.setEnabled(false);
  s.type("int ");
  assert.deepEqual(s.names(), []);
});
test("final önerileri yalnızca o sorunun kodundaki değişkenlerden türetilir", () => {
  const s = setup(),
    extract = s.c.Unit1CodeComplete.variablesFromCode;
  const vars = extract(
    'int[] raf = new int[3]; int toplam = 0; // int yanlis;\nstring metin = "int sahte;"; int Hesap(int adet) { return adet; }',
  );
  assert.deepEqual(
    Array.from(vars, (v) => [v[0], v[2]]),
    [
      ["raf", "int[]"],
      ["toplam", "int"],
      ["metin", "string"],
      ["adet", "int"],
    ],
  );
  for (const file of [
    "unit1-capstone",
    "unit2-capstone",
    "unit3-array-case",
    "unit3-method-case",
    "unit3-capstone",
  ])
    assert.ok(
      fs
        .readFileSync(
          new URL("../assets/" + file + ".js", import.meta.url),
          "utf8",
        )
        .includes("variablesFromCode(tasks[state.current].reference)"),
    );
});
