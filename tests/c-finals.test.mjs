import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";
const c = vm.createContext({});
c.window = c;
for (const f of [
  "c-writing-data",
  "c-writing",
  "c-doubly",
  "c-case-data",
  "c-lab-engine",
  "c-final-data",
])
  vm.runInContext(
    fs.readFileSync(new URL("../assets/" + f + ".js", import.meta.url), "utf8"),
    c,
    { filename: f },
  );
const finals = c.CFinalLessons;
test("10 tek yönlü + 5 çift yönlü final; mevcut 20 vaka değişmez", () => {
  assert.equal(finals.length, 15);
  assert.equal(finals.filter((l) => !l.task.doubly).length, 10);
  assert.equal(finals.filter((l) => l.task.doubly).length, 5);
  assert.equal(c.CCaseLessons.length, 20);
  for (const field of ["id", "title", "theme", "code"])
    assert.equal(new Set(finals.map((l) => l.task[field])).size, 15, field);
});
for (const l of finals)
  test(l.task.title + ": çözüm, sınırlar ve farklı sayılarda doğrulama", () => {
    const t = l.task,
      r = c.CLabEngine.check(t, t.code);
    assert.equal(r.ok, true, r.message);
    assert.ok(r.rows.length >= 9);
    assert.ok(r.rows.every((row) => row.trace.length > 1));
    assert.equal(l.annotation.length, t.code.split("\n").length);
    assert.equal(t.hints.length, 3);
    assert.ok(t.prompt.length > 100);
    const n = t.code.replace(
      /\b(head|head1|head2|yeni|p|son|eski|sil|ilk)\b/g,
      "adres_$1",
    );
    assert.equal(c.CLabEngine.check(t, n).ok, true);
    const noop =
      t.signature +
      " { return " +
      (t.signature.includes("head1") ? "head1" : "head") +
      "; }";
    assert.equal(
      c.CLabEngine.check(t, noop).ok,
      false,
      "İşlem yapmadan dönmek kabul edilmez",
    );
  });
test("çift bağlı finalde eksik geri bağlantı yakalanır", () => {
  const l = finals.find((l) => l.task.id === "final-tiyatro-koltuk"),
    r = c.CLabEngine.check(
      l.task,
      l.task.code.replace(
        "if (head->next != NULL) head->next->prev = yeni;",
        "",
      ),
    );
  assert.equal(r.ok, false);
  assert.match(r.message, /prev/);
});
test("son düğümde veri değiştirmek bağlantı işlemi yerine geçmez", () => {
  const l = finals.find((l) => l.task.id === "final-fener-devri");
  const code = l.task.code.replace(
    "son->next = ilk;",
    "son->data = ilk->data; son->next = ilk;",
  );
  assert.match(c.CLabEngine.check(l.task, code).message, /data/);
});
test("15 örnek animasyon farklı bağlantı/bellek değişimleri üretir", () => {
  const signatures = finals.map((l) => {
    const row = c.CLabEngine.check(l.task, l.task.code).rows.find(
      (r) => JSON.stringify(r.input) === JSON.stringify(l.variant),
    );
    assert.ok(row);
    assert.ok(row.trace.some((f) => f.code.includes("->")));
    return JSON.stringify(
      row.trace.map((f) => ({
        nodes: f.nodes,
        edges: f.edges,
        prev: f.prev,
        head: f.head,
      })),
    );
  });
  assert.equal(new Set(signatures).size, 15);
});
test("ikinci malloc başarısız olursa ilk ayrılan düğüm de bırakılmalı", () => {
  const l = finals[0],
    good = c.CLabEngine.check(l.task, l.task.code);
  assert.ok(good.rows.some((r) => r.input.mallocFailAt === 2 && r.ok));
  const bad = c.CLabEngine.check(l.task, l.task.code.replace("free(a);", ""));
  assert.equal(bad.ok, false);
  assert.ok(
    bad.rows.some(
      (r) => r.input.mallocFailAt === 2 && !r.ok && /sızıntısı/.test(r.message),
    ),
  );
});
test("müzayededeki sekiz QR kaydının yalnızca altıncısı silinir", () => {
  const l = finals.find((l) => l.task.id === "final-muzayede-qr");
  assert.ok(l);
  assert.match(l.task.prompt, /8 eserin/);
  assert.match(l.task.prompt, /6\. QR/);
  assert.equal(l.variant.a.length, 8);
  assert.equal(l.variant.out.length, 7);
  const result = c.CLabEngine.check(l.task, l.task.code);
  assert.equal(result.ok, true);
  assert.deepEqual(
    Array.from(result.rows[0].actual),
    [101, 104, 108, 112, 115, 123, 128],
  );
  assert.equal(result.rows[0].actual.includes(119), false);
});
test("final hikâyeleri emoji yerine somut kayıt durumları anlatır", () => {
  const s = fs.readFileSync(
    new URL("../assets/c-final-data.js", import.meta.url),
    "utf8",
  );
  assert.ok(!/[🚂🔦🏛📻🚢📚🌿🚀🔑🥖🚇🕰🎭🏔🗃]/u.test(s));
  assert.match(finals[1].task.prompt, /Bankanın/);
  assert.match(finals[2].task.prompt, /Kargo/);
  assert.ok(finals.every((l) => l.task.context.length > 30));
});
test("15 sorunun her birinde ayrı bir tam sayfa renk paleti bulunur", () => {
  assert.equal(new Set(finals.map((l) => l.task.palette.id)).size, 15);
  assert.equal(new Set(finals.map((l) => l.task.palette.hue)).size, 15);
  assert.ok(finals.every((l) => l.task.palette.name.length > 2));
});
