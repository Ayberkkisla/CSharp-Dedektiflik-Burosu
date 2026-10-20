// DOM contract tests; these do not claim browser layout/screenshot verification.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

class Element {
  constructor(tag, doc) {
    this.tagName = tag;
    this.ownerDocument = doc;
    this.children = [];
    this.parentNode = null;
    this.attrs = {};
    this.listeners = {};
    this.style = {
      setProperty(name, value) {
        this[name] = value;
      },
    };
    this.dataset = {};
    this.className = "";
    this._text = "";
    this.value = "";
    this.selectionStart = 0;
    this.selectionEnd = 0;
    this.hidden = false;
    this.classList = {
      add: (name) => {
        if (!this.className.split(" ").includes(name))
          this.className += " " + name;
      },
      remove: (name) => {
        this.className = this.className
          .split(" ")
          .filter((s) => s !== name)
          .join(" ");
      },
      toggle: (name, force) => {
        if (force) this.classList.add(name);
        else this.classList.remove(name);
      },
      contains: (name) => this.className.split(" ").includes(name),
    };
  }
  set textContent(value) {
    this._text = String(value);
    this.children = [];
  }
  get textContent() {
    return this._text + this.children.map((c) => c.textContent).join("");
  }
  get attributes() {
    return Object.entries(this.attrs).map(([name, value]) => ({ name, value }));
  }
  get isConnected() {
    return this === this.ownerDocument.body || !!this.parentNode?.isConnected;
  }
  get firstElementChild() {
    return this.children[0];
  }
  append(...children) {
    for (const child of children) {
      if (typeof child === "string") {
        this._text += child;
        continue;
      }
      child.remove();
      child.parentNode = this;
      this.children.push(child);
    }
  }
  remove() {
    if (this.parentNode) {
      this.parentNode.children = this.parentNode.children.filter(
        (n) => n !== this,
      );
      this.parentNode = null;
    }
  }
  before(node) {
    const p = this.parentNode;
    if (!p) return;
    node.remove();
    const i = p.children.indexOf(this);
    p.children.splice(i, 0, node);
    node.parentNode = p;
  }
  after(node) {
    const p = this.parentNode;
    if (!p) return;
    node.remove();
    const i = p.children.indexOf(this);
    p.children.splice(i + 1, 0, node);
    node.parentNode = p;
  }
  replaceChildren(...children) {
    for (const c of this.children) c.parentNode = null;
    this.children = [];
    this._text = "";
    this.append(...children);
  }
  setAttribute(name, value) {
    this.attrs[name] = String(value);
    if (name === "id") this.id = String(value);
    if (name === "class") this.className = String(value);
  }
  getAttribute(name) {
    return this.attrs[name] ?? null;
  }
  hasAttribute(name) {
    return name in this.attrs;
  }
  removeAttribute(name) {
    delete this.attrs[name];
  }
  addEventListener(name, fn) {
    (this.listeners[name] ??= []).push(fn);
  }
  dispatchEvent(event) {
    for (const fn of this.listeners[event.type] || []) fn(event);
  }
  async fire(type, more = {}) {
    for (const fn of this.listeners[type] || [])
      await fn({
        type,
        preventDefault() {},
        stopImmediatePropagation() {},
        ...more,
      });
  }
  focus() {
    this.ownerDocument.activeElement = this;
  }
  scrollIntoView() {}
  setSelectionRange(a, b) {
    this.selectionStart = a;
    this.selectionEnd = b;
  }
  setRangeText(text, a, b) {
    this.value = this.value.slice(0, a) + text + this.value.slice(b);
    this.selectionStart = this.selectionEnd = a + text.length;
  }
  showModal() {
    this.open = true;
  }
  close() {
    this.open = false;
  }
  matches(selector) {
    if (selector.startsWith("."))
      return this.className.split(" ").includes(selector.slice(1));
    if (selector.startsWith("#")) return this.id === selector.slice(1);
    if (selector === "[data-clab-count]") return "clabCount" in this.dataset;
    return this.tagName === selector;
  }
  querySelectorAll(selector) {
    const all = [];
    for (const child of this.children) {
      if (child.matches(selector)) all.push(child);
      all.push(...child.querySelectorAll(selector));
    }
    return all;
  }
  querySelector(selector) {
    return this.querySelectorAll(selector)[0] || null;
  }
}
function setup(gsap = false) {
  const document = {};
  document.createElement = (tag) => new Element(tag, document);
  document.createElementNS = (_, tag) => document.createElement(tag);
  document.createTextNode = (text) => {
    const n = document.createElement("#text");
    n.textContent = text;
    return n;
  };
  document.body = document.createElement("body");
  document.querySelectorAll = (s) => document.body.querySelectorAll(s);
  document.getElementById = (id) => document.body.querySelector("#" + id);
  document.querySelector = (s) => document.body.querySelector(s);
  const journey = document.createElement("div");
  journey.id = "cw-journey";
  document.body.append(journey);
  const storage = new Map(),
    events = [],
    handlers = {};
  const context = vm.createContext({
    document,
    localStorage: {
      getItem: (k) => storage.get(k),
      setItem: (k, v) => storage.set(k, v),
    },
    location: { hash: "" },
    setTimeout,
    clearTimeout,
    Event: class {
      constructor(type) {
        this.type = type;
      }
    },
    CustomEvent: class {
      constructor(type, options = {}) {
        this.type = type;
        this.detail = options.detail;
      }
    },
    dispatchEvent: (e) => {
      events.push(e);
      for (const handler of handlers[e.type] || []) handler(e);
    },
    matchMedia: () => ({ matches: true }),
    addEventListener(type, fn) {
      (handlers[type] ??= []).push(fn);
    },
    removeEventListener(type, fn) {
      handlers[type] = (handlers[type] || []).filter((h) => h !== fn);
    },
  });
  context.window = context;
  // GSAP mounting at rest requires no timeline; exercises the production control construction.
  if (gsap) context.gsap = {};
  for (const file of [
    "c-writing-data",
    "c-writing",
    "c-doubly",
    "c-case-data",
    "c-final-cases",
    "c-visual",
    "c-code-puzzle",
    "c-lab-engine",
    "c-final-data",
    "c-lab-complete",
    "c-lab",
    "c-finals",
  ])
    vm.runInContext(
      fs.readFileSync(
        new URL("../assets/" + file + ".js", import.meta.url),
        "utf8",
      ),
      context,
      { filename: file },
    );
  return { context, document, storage, events };
}
function button(root, text) {
  const node = root
    .querySelectorAll("button")
    .find((n) => n.textContent === text);
  assert.ok(node, "button: " + text);
  return node;
}

test("20 vaka sonu sorusu doğrudan sayfaya eklenir; her biri ayrı sahne içerir", () => {
  for (const gsap of [false, true]) {
    const { context, document } = setup(gsap);
    const titles = new Set(),
      scenes = new Set();
    for (let i = 0; i < 20; i++) {
      context.CLab.mount(document.body, i);
      const main = document.querySelector(".clab-main");
      titles.add(main.querySelector("h2").textContent);
      scenes.add(main.querySelector(".clab-film").dataset.scene);
      assert.ok(main.querySelector("svg"));
      assert.ok(
        document
          .getElementById("clab-editor")
          .value.includes(context.CWritingTasks[i].signature),
      );
    }
    assert.equal(titles.size, 20);
    assert.equal(scenes.size, 20);
    assert.equal(document.querySelector("dialog"), null);
    assert.equal(document.querySelector(".clab-entry"), null);
    context.CLab.dispose();
    assert.equal(document.querySelector(".clab-inline"), null);
  }
});
test("yaz → kontrol → sonuç → kendi kodunun animasyonu → düzenle akışı", async () => {
  const { context, document, storage, events } = setup();
  context.CLab.mount(document.body, 0);
  const editor = document.getElementById("clab-editor");
  editor.value = context.CWritingTasks[0].code;
  editor.setSelectionRange(editor.value.length, editor.value.length);
  await editor.fire("input");
  await button(document.body, "▶ Kodumu kontrol et").fire("click");
  assert.match(
    document.querySelector(".clab-feedback").textContent,
    /test geçti/,
  );
  assert.equal(document.querySelector(".clab-success").hidden, false);
  assert.ok(document.querySelector(".clab-results").querySelector("table"));
  assert.ok(events.some((e) => e.type === "clab:passed"));
  await button(document.body, "1. testi izle").fire("click");
  assert.ok(document.querySelector(".clab-replay").querySelector("svg"));
  assert.match(storage.get("cnoir-code-lab-v1"), /passed/);
  editor.value = editor.value.replace("return yeni;", "return head;");
  await editor.fire("input");
  assert.equal(document.querySelector(".clab-success").hidden, true);
  assert.equal(document.querySelector(".clab-results").children.length, 0);
  await button(document.body, "▶ Kodumu kontrol et").fire("click");
  assert.match(document.querySelector(".clab-feedback").className, /is-bad/);
});
test("öneri ekleme, ipucu ilerletme ve soru değişiminde taslak koruma", async () => {
  const { context, document } = setup();
  context.CLab.mount(document.body, 0);
  let editor = document.getElementById("clab-editor");
  editor.value = "struct node *gezici;\ngezici->";
  editor.setSelectionRange(editor.value.length, editor.value.length);
  await editor.fire("input");
  const popup = document.querySelector(".clab-suggest");
  assert.equal(popup.hidden, false);
  assert.match(popup.textContent, /next/);
  await popup.children[1].fire("click");
  assert.match(editor.value, /gezici->next$/);
  const hints = button(document.body, "İpucu al");
  await hints.fire("click");
  const first = document.querySelector(".clab-hint").textContent;
  await hints.fire("click");
  assert.notEqual(document.querySelector(".clab-hint").textContent, first);
  context.CLab.mount(document.body, 1);
  context.CLab.mount(document.body, 0);
  editor = document.getElementById("clab-editor");
  assert.match(editor.value, /gezici->next$/);
});
test("kontrol sırasında soru değişirse eski başarı yeni soruya taşınmaz", async () => {
  const { context, document, events } = setup();
  context.CLab.mount(document.body, 0);
  const editor = document.getElementById("clab-editor");
  editor.value = context.CWritingTasks[0].code;
  await editor.fire("input");
  const pending = button(document.body, "▶ Kodumu kontrol et").fire("click");
  context.CLab.mount(document.body, 1);
  await pending;
  assert.equal(document.querySelector(".clab-success").hidden, true);
  assert.ok(!events.some((e) => e.type === "clab:passed"));
});

test("kod sorusu yalnızca vaka sonuna bağlıdır; ayrı giriş ve üst kısayol yoktur", () => {
  const cases = fs.readFileSync(
    new URL("../assets/c-cases.js", import.meta.url),
    "utf8",
  );
  assert.ok(
    cases.indexOf("g.CLab.mount(card,s.current") >
      cases.indexOf("if(s.step===8)"),
  );
  assert.ok(!cases.includes("CLab.open"));
  const lab = fs.readFileSync(
    new URL("../assets/c-lab.js", import.meta.url),
    "utf8",
  );
  assert.ok(!lab.includes("E('dialog'"));
  assert.ok(!lab.includes("cw-journey"));
});
test("doğru çözümden sonra sonraki vaka işlemi çağrılır", async () => {
  const { context, document } = setup();
  let continued = 0;
  context.CLab.mount(document.body, 0, { onComplete: () => continued++ });
  const editor = document.getElementById("clab-editor");
  editor.value = context.CWritingTasks[0].code;
  await editor.fire("input");
  await button(document.body, "▶ Kodumu kontrol et").fire("click");
  await button(document.body, "SONRAKİ VAKA →").fire("click");
  assert.equal(continued, 1);
});

test("yapboz yanlış parçayı anında etiketler; düzeltince hata kalkar", async () => {
  const { context, document } = setup();
  const lesson = context.CCaseLessons[0],
    lines = lesson.task.code.split("\n");
  context.CCodePuzzle.mount(document.body, lesson, () => {});
  await button(document.body, "return yeni;").fire("click");
  await document.querySelectorAll(".cp-slot")[0].fire("click");
  let slot = document.querySelectorAll(".cp-slot")[0];
  assert.equal(slot.getAttribute("aria-invalid"), "true");
  assert.match(slot.textContent, /✗ Yanlış yerde/);
  assert.match(
    document.querySelector(".cp-feedback").textContent,
    /Yanlış.*1\. satıra/,
  );
  await slot.fire("click");
  await document
    .querySelectorAll(".cp-slot")
    [lines.findIndex((line) => line.trim() === "return yeni;")].fire("click");
  slot =
    document.querySelectorAll(".cp-slot")[
      lines.findIndex((line) => line.trim() === "return yeni;")
    ];
  assert.equal(slot.getAttribute("aria-invalid"), "false");
  assert.match(slot.textContent, /✓ Doğru yerde/);
  assert.match(
    document.querySelector(".cp-feedback").textContent,
    /doğru yerde/,
  );
  assert.equal(
    document.querySelectorAll(".cp-slot")[0].getAttribute("aria-invalid"),
    null,
  );
  await button(document.body, "↻ Parçaları yeniden karıştır").fire("click");
  assert.equal(document.querySelector(".cp-feedback").textContent, "");
  assert.ok(
    document
      .querySelectorAll(".cp-slot")
      .every((s) => s.getAttribute("aria-invalid") === null),
  );
});

test("çalıştır yanlış sıradaki satır numaralarını açıkça bildirir", async () => {
  const { context, document, storage } = setup();
  const lesson = context.CCaseLessons[0],
    slots = lesson.task.code.split("\n").map((_, i) => i);
  [slots[0], slots[1]] = [slots[1], slots[0]];
  storage.set("cnoir-puzzle:" + lesson.task.id, JSON.stringify({ slots }));
  context.CCodePuzzle.mount(document.body, lesson, () =>
    assert.fail("Yanlış çözüm kabul edilmemeli"),
  );
  await button(document.body, "▶ ÇALIŞTIR").fire("click");
  assert.match(
    document.querySelector(".cp-feedback").textContent,
    /Yanlış sıradaki satırlar: 1, 2/,
  );
  assert.equal(
    document
      .querySelectorAll(".cp-slot")
      .filter((s) => s.getAttribute("aria-invalid") === "true").length,
    2,
  );
});

test("final grupları 10 + 5 soru ve 15 ayrı temalı animasyon gösterir", async () => {
  const { context, document } = setup();
  const titles = new Set(),
    themes = new Set();
  for (const group of ["single", "double"]) {
    const host = document.createElement("section");
    document.body.append(host);
    context.CFinal.mount(host, group, { onBack() {} });
    const nav = host.querySelector(".cfinal-nav");
    assert.equal(nav.children.length, group === "single" ? 10 : 5);
    for (const btn of nav.children) {
      await btn.fire("click");
      const main = host.querySelector(".clab-main");
      titles.add(main.querySelector("h2").textContent);
      themes.add(main.querySelector(".cfinal-art").dataset.theme);
      assert.ok(main.querySelector(".cv-canvas").querySelector("svg"));
      assert.ok(main.querySelector(".clab-help"));
    }
    context.CLab.dispose();
    host.remove();
  }
  assert.equal(titles.size, 15);
  assert.equal(themes.size, 15);
});
test("final çözümü test edilir; sonraki soruya geçerken taslak korunur", async () => {
  const { context, document } = setup();
  context.CFinal.mount(document.body, "single", { onBack() {} });
  const editor = document.getElementById("clab-editor");
  editor.value = context.CFinalLessons[0].task.code;
  await editor.fire("input");
  await button(document.body, "▶ Kodumu kontrol et").fire("click");
  assert.equal(document.querySelector(".clab-success").hidden, false);
  await button(document.body, "SONRAKİ FİNAL SORUSU →").fire("click");
  assert.match(document.getElementById("clab-editor").value, /sirayiDevret/);
  await document.querySelector(".cfinal-nav").children[0].fire("click");
  assert.equal(document.getElementById("clab-editor").value, editor.value);
  assert.match(document.querySelector(".cfinal-status").textContent, /1 \/ 10/);
});

function mountCaseMap(context, document) {
  document.body.classList.add("lesson-folders");
  const layout = document.createElement("div");
  layout.className = "cw-layout";
  document.body.append(layout);
  for (const id of [
    "cw-stage",
    "cw-tasks",
    "cw-stats",
    "cw-speech",
    "cw-mascot",
  ]) {
    const n = document.createElement(id === "cw-mascot" ? "button" : "section");
    n.id = id;
    (id === "cw-stage" ? layout : document.body).append(n);
  }
  for (const file of ["c-map-data", "c-journey", "c-cases"])
    vm.runInContext(
      fs.readFileSync(
        new URL("../assets/" + file + ".js", import.meta.url),
        "utf8",
      ),
      context,
      { filename: file },
    );
}
test("21 ve 22 haritada gerçek final vakalarıdır; güncellemeler final sınıfını korur", async () => {
  const { context, document } = setup();
  mountCaseMap(context, document);
  let stops = document.querySelectorAll(".cj-stop");
  assert.equal(stops.length, 22);
  assert.equal(stops.filter((n) => n.classList.contains("is-final")).length, 2);
  assert.match(stops[20].textContent, /10 SORU/);
  assert.match(stops[21].textContent, /5 SORU/);
  assert.equal(document.querySelector(".cfinal-hub"), null);
  await stops[20].fire("click");
  assert.match(
    document.getElementById("cw-stage").textContent,
    /Vaka 21 · Tek Yönlü Listeler/,
  );
  assert.equal(document.querySelector(".cfinal-nav").children.length, 10);
  assert.ok(stops[20].classList.contains("is-final"));
  assert.ok(stops[20].classList.contains("is-current"));
  await button(document.body, "← C vakalarına dön").fire("click");
  stops = document.querySelectorAll(".cj-stop");
  await stops[21].fire("click");
  assert.match(
    document.getElementById("cw-stage").textContent,
    /Vaka 22 · Çift Yönlü Listeler/,
  );
  assert.equal(document.querySelector(".cfinal-nav").children.length, 5);
});
test("soru geçişi sayfanın renk paletini değiştirir; çıkışta normal tema geri gelir", async () => {
  const { context, document } = setup();
  mountCaseMap(context, document);
  await document.querySelectorAll(".cj-stop")[20].fire("click");
  assert.ok(document.body.classList.contains("cfinal-themed"));
  const first = document.body.style["--final-h"];
  await document.querySelector(".cfinal-nav").children[1].fire("click");
  assert.notEqual(document.body.style["--final-h"], first);
  assert.equal(
    document.body.dataset.finalTheme,
    context.CFinalLessons[1].task.palette.id,
  );
  assert.equal(
    document.querySelector(".cfinal-section").dataset.palette,
    document.body.dataset.finalTheme,
  );
  await button(document.body, "← C vakalarına dön").fire("click");
  assert.equal(document.body.classList.contains("cfinal-themed"), false);
  assert.equal(document.body.style["--final-h"], "");
  assert.equal(document.body.dataset.finalTheme, undefined);
});
test("bütün final soruları geçince vaka haritasına tamamlandı olarak kaydedilir", async () => {
  const { context, document, storage } = setup();
  mountCaseMap(context, document);
  await document.querySelectorAll(".cj-stop")[21].fire("click");
  for (let n = 0; n < 5; n++) {
    await document.querySelector(".cfinal-nav").children[n].fire("click");
    const editor = document.getElementById("clab-editor");
    editor.value = context.CFinalLessons[10 + n].task.code;
    await editor.fire("input");
    await button(document.body, "▶ Kodumu kontrol et").fire("click");
  }
  const state = JSON.parse(storage.get("cnoir-cases"));
  assert.ok(state.done.includes(21));
  assert.match(document.getElementById("cw-stats").textContent, /1\/22 vaka/);
  assert.ok(
    document.querySelectorAll(".cj-stop")[21].classList.contains("is-done"),
  );
  await button(document.body, "← C vakalarına dön").fire("click");
  await document.querySelectorAll(".cj-stop")[0].fire("click");
  context.dispatchEvent({ type: "clab:passed", detail: { id: "basa" } });
  assert.ok(
    !JSON.parse(storage.get("cnoir-cases")).done.includes(0),
    "Kapanmış final başka vakayı tamamlamamalı",
  );
});
test("final çalışma alanı C# gibi üst çubuk, animasyon/örnek ve görev/editör düzenindedir", async () => {
  const { context, document } = setup();
  mountCaseMap(context, document);
  await document.querySelectorAll(".cj-stop")[20].fire("click");
  const root = document.querySelector(".cfinal-section"),
    main = root.querySelector(".clab-main"),
    teaching = main.querySelector(".cfinal-teaching"),
    columns = main.querySelector(".clab-columns");
  assert.ok(root.querySelector(".cfinal-brand"));
  assert.ok(root.querySelector(".cfinal-shell"));
  assert.equal(teaching.children.length, 2);
  assert.ok(teaching.children[0].classList.contains("clab-film"));
  assert.ok(teaching.children[1].classList.contains("cfinal-output"));
  assert.ok(teaching.children[1].querySelector(".cfinal-sample"));
  assert.ok(teaching.children[1].querySelector(".clab-solution"));
  assert.ok(columns.children[0].classList.contains("clab-brief"));
  assert.ok(columns.children[1].classList.contains("clab-work"));
  assert.ok(main.querySelector(".cfinal-understand"));
  await root.fire("keydown", { key: "Escape" });
  assert.equal(document.body.classList.contains("cfinal-themed"), false);
  assert.equal(document.getElementById("cw-stage").hidden, true);
});
test("hata paneli test koşulunu gösterir ve kod değişince eski açıklama temizlenir", async () => {
  const { context, document } = setup();
  context.CLab.mount(document.body, 0);
  const editor = document.getElementById("clab-editor");
  editor.value =
    "struct node *basaEkle(struct node *head, int deger) {\n return head->next;\n}";
  await editor.fire("input");
  await button(document.body, "▶ Kodumu kontrol et").fire("click");
  const panel = document.querySelector(".clab-diagnostic");
  assert.match(panel.textContent, /Boş liste/);
  assert.match(panel.textContent, /head->next/);
  assert.match(
    document.querySelector(".clab-results").textContent,
    /Çalışma durdu/,
  );
  await button(document.body, "Hatalı satıra git").fire("click");
  assert.ok(editor.selectionStart > 0);
  assert.equal(document.activeElement, editor);
  editor.value = context.CWritingTasks[0].code;
  await editor.fire("input");
  assert.equal(panel.textContent, "");
  await button(document.body, "▶ Kodumu kontrol et").fire("click");
  assert.equal(panel.textContent, "");
  assert.equal(document.querySelector(".clab-success").hidden, false);
});
