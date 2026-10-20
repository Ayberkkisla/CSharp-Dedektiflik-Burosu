import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

const root = new URL("../", import.meta.url);
// Minimal SVG document for checking actual generated node/arrow attributes.
class SvgNode {
  constructor(tag) {
    this.tagName = tag;
    this.children = [];
    this.attrs = {};
    this.style = {};
  }
  append(...nodes) {
    this.children.push(...nodes);
  }
  setAttribute(name, value) {
    this.attrs[name] = String(value);
  }
  getAttribute(name) {
    return this.attrs[name] ?? null;
  }
}
const context = vm.createContext({
  document: { createElementNS: (_, tag) => new SvgNode(tag) },
});
context.window = context;
for (const file of [
  "c-writing-data",
  "c-writing",
  "c-doubly",
  "c-case-data",
  "c-board-notes",
  "c-map-data",
  "c-visual",
  "c-code-puzzle",
  "c-question-video",
]) {
  vm.runInContext(
    fs.readFileSync(new URL(`assets/${file}.js`, root), "utf8"),
    context,
    { filename: file },
  );
}
const lesson = context.CCaseLessons.find((c) => c.task.id === "cift-deger-sil");
const insertion = context.CCaseLessons.find(
  (c) => c.task.id === "cift-basa-ekle",
);
const task = lesson.task;
const plain = (value) => JSON.parse(JSON.stringify(value));

test("yeni vaka haritaya ve dokuz adımlı ders verilerine bağlı", () => {
  assert.equal(context.CCaseLessons.length, 20);
  assert.equal(context.CCaseMap.length, 22);
  assert.equal(task.id, "cift-deger-sil");
  assert.equal(lesson.n, 17);
  assert.match(task.structure, /\*prev/);
  assert.equal(lesson.annotation.length, task.code.split("\n").length);
  assert.ok(lesson.annotation.every((row) => row.why.length > 10));
  assert.equal(lesson.wanted.length, 3);
  for (const line of lesson.wanted) assert.ok(task.code.includes(line));
  for (const question of [lesson.trace, lesson.edgeQuestion]) {
    assert.ok(question.options.includes(question.answer));
    assert.equal(new Set(question.options).size, 4);
    assert.match(question.prompt, /⇄/);
  }
});

function inspect(input, currentTask = task) {
  const frames = context.CVisual.frames(currentTask, input),
    last = frames.at(-1);
  const seen = new Set(),
    values = [];
  let p = last.head,
    previous = null;
  while (p !== null) {
    assert.ok(!seen.has(p), "doğrusal listede döngü olmamalı");
    seen.add(p);
    const node = last.nodes.find((n) => n.id === p);
    assert.ok(node?.alive, "serbest bırakılmış düğüme gidilmemeli");
    assert.equal(last.prev[p], previous, "prev komşuya dönmeli");
    values.push(node.value);
    previous = p;
    p = last.edges[p];
  }
  assert.deepEqual(values, plain(input.out));
  const backward = [];
  p = previous;
  while (p !== null) {
    backward.push(last.nodes.find((n) => n.id === p).value);
    p = last.prev[p];
  }
  assert.deepEqual(backward, [...plain(input.out)].reverse());
  assert.equal(last.nodes.filter((n) => n.alive).length, input.out.length);
  assert.deepEqual(
    plain(context.CCodePuzzle.result(currentTask, input)),
    plain(input.out),
  );
  for (const frame of frames) {
    const svg = context.CVisual.svg(frame, 900);
    assert.ok(
      svg.children.some((n) => n.attrs["data-edge"]?.startsWith("prev:")) ||
        frame.nodes.every((n) => !n.alive || frame.prev[n.id] === "unset"),
    );
  }
}
test("sekiz sınır girdisinde ileri/geri bağlantılar, silinen bellek ve SVG tutarlı", () => {
  task.tests.forEach((input) => inspect(input));
  inspect(lesson.worked);
  inspect(lesson.variant);
  inspect(lesson.edge);
});
test("küçük listelerin tüm silme konumlarında bağlantılar korunuyor", () => {
  for (let n = 0; n <= 7; n++)
    for (let value = -1; value <= n; value++) {
      const a = Array.from({ length: n }, (_, i) => i),
        out = a.filter((x) => x !== value);
      inspect({ a, value, out });
    }
});
test("yapboz geri bağlantısı eksik veya sırası yanlış kodu kabul etmiyor", () => {
  const lines = task.code.split("\n");
  assert.equal(context.CCodePuzzle.valid(task, lines), true);
  assert.equal(
    context.CCodePuzzle.valid(
      task,
      lines.filter((line) => !line.includes("next->prev =")),
    ),
    false,
  );
  const changed = [...lines];
  const free = changed.indexOf("    free(temp);");
  [changed[1], changed[free]] = [changed[free], changed[1]];
  assert.equal(context.CCodePuzzle.valid(task, changed), false);
});
test("indirilen C programı çift bağlı yapı kurar ve prev tutarlılığını denetler", () => {
  const program = context.CWriting.makeProgram(task, task.code);
  assert.match(program, /yeni->prev = son;/);
  assert.match(program, /if \(p->prev != onceki\) return 0;/);
  assert.equal(
    (program.match(/assert\(ayni/g) || []).length,
    task.tests.length,
  );
});
test("önceki 16 vakanın tüm bağlantı modelleri beklenen sonuçlarını koruyor", () => {
  for (const item of context.CCaseLessons.slice(0, 16))
    for (const input of item.task.tests) {
      assert.deepEqual(
        plain(context.CCodePuzzle.result(item.task, input)),
        plain(input.out),
        item.task.id,
      );
    }
});

test("18. vaka: açıklamalar, üç kod boşluğu ve soru seçenekleri hazır", () => {
  assert.equal(insertion.n, 18);
  assert.equal(insertion.task.id, "cift-basa-ekle");
  assert.equal(
    insertion.annotation.length,
    insertion.task.code.split("\n").length,
  );
  assert.ok(insertion.annotation.every((row) => row.why.length > 10));
  assert.equal(insertion.wanted.length, 3);
  for (const line of insertion.wanted)
    assert.ok(insertion.task.code.includes(line));
  for (const question of [insertion.trace, insertion.edgeQuestion]) {
    assert.equal(new Set(question.options).size, 4);
    assert.ok(question.options.includes(question.answer));
  }
  assert.match(insertion.edgeQuestion.answer, /NULL ← 7 → NULL/);
});
test("başa ekleme: boş, tek, çok, tekrar ve negatif girdilerde iki yön tutarlı", () => {
  const t = insertion.task;
  for (const input of [
    ...t.tests,
    insertion.worked,
    insertion.variant,
    insertion.edge,
  ])
    inspect(input, t);
  for (let n = 0; n <= 7; n++)
    for (const value of [-8, 0, 7]) {
      const a = Array.from({ length: n }, (_, i) => i);
      inspect({ a, value, out: [value, ...a] }, t);
    }
});
test("başa ekleme animasyonu önce alanları kurar, sonra eski başın geri okunu değiştirir", () => {
  const t = insertion.task,
    input = t.tests[1],
    frames = context.CVisual.frames(t, input);
  const allocate = frames.findIndex((f) =>
    f.code.startsWith("struct node *yeni = malloc"),
  );
  const prev = frames.findIndex((f) => f.code === "yeni->prev = NULL;");
  const next = frames.findIndex((f) => f.code === "yeni->next = head;");
  const backlink = frames.findIndex((f) => f.code === "head->prev = yeni;");
  assert.ok(allocate < prev && prev < next && next < backlink);
  assert.equal(frames[allocate].prev.new, "unset");
  assert.equal(frames[allocate].edges.new, "unset");
  assert.equal(frames[next].head, "a0");
  assert.equal(frames[next].prev.a0, null);
  assert.equal(frames[backlink].prev.a0, "new");
  assert.equal(frames.at(-1).head, "new");
  assert.ok(
    !context.CVisual.frames(t, t.tests[0]).some(
      (f) => f.code === "head->prev = yeni;",
    ),
  );
});
test("malloc başarısızlığında yeni düğüm oluşmaz ve eski liste korunur", () => {
  for (const a of [[], [7], [10, 20, 30]]) {
    const input = { a, value: 5, out: a, mallocFail: true };
    inspect(input, insertion.task);
    assert.ok(
      !context.CVisual.frames(insertion.task, input).some((f) =>
        f.nodes.some((n) => n.id === "new"),
      ),
    );
  }
});
test("ekleme yapbozu eski başın prev atamasını zorunlu tutar ve C dosyası doğru yapıyı kullanır", () => {
  const t = insertion.task,
    lines = t.code.split("\n");
  assert.equal(context.CCodePuzzle.valid(t, lines), true);
  assert.equal(
    context.CCodePuzzle.valid(
      t,
      lines.filter((line) => !line.includes("head->prev = yeni;")),
    ),
    false,
  );
  const program = context.CWriting.makeProgram(t, t.code);
  assert.match(program, /struct node \*prev;/);
  assert.match(program, /head = basaEkle\(head, deger\);/);
  assert.match(program, /if \(p->prev != onceki\) return 0;/);
});

test("18. vaka hocanın data parametresini ve açık head atamasını animasyonla eşler", () => {
  const t = insertion.task,
    frames = context.CVisual.frames(t, t.tests[1]);
  assert.match(t.signature, /basaEkle\(struct node \*head, int data\)/);
  assert.ok(t.code.includes("yeni->data = data;"));
  assert.ok(t.code.includes("head = yeni;\n    return head;"));
  const move = frames.findIndex((f) => f.code === "head = yeni;");
  assert.ok(move > frames.findIndex((f) => f.code === "head->prev = yeni;"));
  assert.equal(frames[move - 1].head, "a0");
  assert.equal(frames[move].head, "new");
  assert.equal(frames.at(-1).code, "return head;");
  assert.ok(
    insertion.boardNotes.some((note) =>
      note.rows.some(([line]) => line === "return head;"),
    ),
  );
  for (const frame of frames)
    if (frame.code) assert.ok(t.code.includes(frame.code));
});

const lastDeletion = context.CCaseLessons.find(
  (c) => c.task.id === "cift-son-sil",
);

const sixthDeletion = context.CCaseLessons.find(
  (c) => c.task.id === "cift-altinci-sil",
);
test("20. vaka ön koşulu, konum sorusu ve üç kod boşluğuyla hazır", () => {
  const c = sixthDeletion,
    t = c.task;
  assert.equal(c.n, 20);
  assert.equal(c.annotation.length, t.code.split("\n").length);
  assert.ok(c.annotation.every((a) => a.why.length > 10));
  assert.ok(t.tests.every((input) => input.a.length > 8));
  assert.match(c.trace.prompt, /eleman sayısı > 8/);
  assert.match(c.edgeQuestion.prompt, /6\. düğümü/);
  for (const q of [c.trace, c.edgeQuestion]) {
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.answer));
  }
  for (const line of c.wanted) assert.ok(t.code.includes(line));
});
test("6. düğüm verisinden bağımsız silinir; beş hareket ve iki bağlantı free öncesinde tamamlanır", () => {
  const c = sixthDeletion,
    t = c.task;
  for (const input of [...t.tests, c.worked, c.variant, c.edge])
    inspect(input, t);
  for (let n = 9; n <= 15; n++) {
    const a = Array.from({ length: n }, (_, i) => (i % 4 === 0 ? 6 : i * 3));
    inspect({ a, out: [...a.slice(0, 5), ...a.slice(6)] }, t);
  }
  const frames = context.CVisual.frames(t, t.tests[0]);
  assert.equal(frames.filter((f) => f.code === "temp = temp->next;").length, 5);
  const forward = frames.findIndex(
    (f) => f.code === "temp->prev->next = temp->next;",
  );
  const backward = frames.findIndex(
    (f) => f.code === "temp->next->prev = temp->prev;",
  );
  const release = frames.findIndex((f) => f.code === "free(temp);");
  assert.ok(forward > 0 && backward > forward && release > backward);
  assert.equal(frames[forward].pointers.temp, "a5");
  assert.equal(frames[forward].edges.a4, "a6");
  assert.equal(frames[backward].prev.a6, "a4");
  assert.equal(frames[release].nodes.find((n) => n.id === "a5").alive, false);
  assert.equal(frames.at(-1).head, "a0");
  for (const frame of frames)
    if (frame.code) assert.ok(t.code.includes(frame.code));
});
test("6. düğüm modeli kısa girdiyi reddeder; yapboz ve C indirme fonksiyonu tutarlı", () => {
  const t = sixthDeletion.task;
  assert.throws(
    () => context.CVisual.frames(t, { a: [1, 2, 3, 4, 5, 6, 7, 8] }),
    /eleman sayısı > 8/,
  );
  const lines = t.code.split("\n");
  assert.equal(context.CCodePuzzle.valid(t, lines), true);
  assert.equal(
    context.CCodePuzzle.valid(
      t,
      lines.filter((line) => !line.includes("temp->next->prev =")),
    ),
    false,
  );
  assert.match(
    context.CWriting.makeProgram(t, t.code),
    /head = altinciSil\(head\);/,
  );
});
test("19. vaka: ders, sonuç/özel durum sorusu ve kod boşlukları bağlı", () => {
  const c = lastDeletion,
    t = c.task;
  assert.equal(c.n, 19);
  assert.equal(c.annotation.length, t.code.split("\n").length);
  assert.ok(c.annotation.every((row) => row.why.length > 10));
  assert.equal(c.wanted.length, 3);
  for (const line of c.wanted)
    assert.equal(
      t.code.split("\n").filter((row) => row.trim() === line).length,
      1,
    );
  for (const q of [c.trace, c.edgeQuestion]) {
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.options.includes(q.answer));
  }
  assert.equal(c.edgeQuestion.answer, "Boş liste");
});
test("sondan silme: tüm girdilerde ve 0–8 düğümde ileri/geri zincir korunuyor", () => {
  const c = lastDeletion,
    t = c.task;
  for (const input of [...t.tests, c.worked, c.variant, c.edge])
    inspect(input, t);
  for (let n = 0; n <= 8; n++) {
    const a = Array.from({ length: n }, (_, i) => (i % 3) - 1);
    inspect({ a, out: a.slice(0, -1) }, t);
  }
});
test("sondan silme filmi bağlantıyı free öncesinde keser; kod yapbozu bunu zorunlu tutar", () => {
  const t = lastDeletion.task,
    frames = context.CVisual.frames(t, t.tests[0]);
  const detach = frames.findIndex((f) => f.code === "temp->prev->next = NULL;");
  const release = frames.findIndex((f) => f.code === "free(temp);");
  assert.ok(detach >= 0 && release > detach);
  assert.ok(frames[detach].nodes.at(-1).alive);
  assert.equal(frames[release].nodes.at(-1).alive, false);
  for (const input of t.tests)
    for (const frame of context.CVisual.frames(t, input))
      if (frame.code) assert.ok(t.code.includes(frame.code));
  const lines = t.code.split("\n");
  assert.equal(context.CCodePuzzle.valid(t, lines), true);
  assert.equal(
    context.CCodePuzzle.valid(
      t,
      lines.filter((line) => !line.includes("temp->prev->next = NULL;")),
    ),
    false,
  );
  const program = context.CWriting.makeProgram(t, t.code);
  assert.match(program, /head = sonSil\(head\);/);
  assert.match(program, /if \(p->prev != onceki\) return 0;/);
});
