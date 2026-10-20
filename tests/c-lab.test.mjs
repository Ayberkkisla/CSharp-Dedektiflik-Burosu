import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

const context = vm.createContext({});
context.window = context;
for (const file of [
  "c-writing-data",
  "c-writing",
  "c-doubly",
  "c-case-data",
  "c-lab-engine",
  "c-lab-complete",
])
  vm.runInContext(
    fs.readFileSync(
      new URL("../assets/" + file + ".js", import.meta.url),
      "utf8",
    ),
    context,
    { filename: file },
  );
const tasks = context.CWritingTasks,
  engine = context.CLabEngine;
const task = (id) => tasks.find((t) => t.id === id);
const check = (id, source) => engine.check(task(id), source);
const plain = (x) => JSON.parse(JSON.stringify(x));

for (const t of tasks)
  test(t.id + ": örnek ve farklı isimli çözüm bütün testlerde çalışır", () => {
    const original = engine.check(t, t.code);
    assert.equal(original.ok, true, original.message);
    assert.ok(original.rows.length >= 8);
    const renamed = t.code.replace(
      /\b(head1|head2|head|temp|yeni|silinecek|eski|onceki|simdiki|son|deger|hedef|data)\b/g,
      (name, group, offset, source) =>
        source.slice(Math.max(0, offset - 2), offset) === "->"
          ? name
          : "degisken_" + name,
    );
    // data is also a parameter in the instructor's doubly-linked insertion exercise.
    const alternate = engine.check(t, renamed);
    assert.equal(alternate.ok, true, alternate.message);
    assert.ok(original.rows.every((r) => r.trace.length > 0));
  });

test("C fonksiyonunu çalıştırır; doğru kodun metin olarak yorumda bulunması yetmez", () => {
  const t = task("basa");
  const result = check(
    "basa",
    "/* " + t.code + " */\n" + t.signature + " { return head; }",
  );
  assert.equal(result.ok, false);
  assert.ok(result.rows.some((r) => r.actual.length !== r.expected.length));
});
test("NULL, free sonrası erişim ve çift free anlaşılır hatalar verir", () => {
  assert.match(
    check(
      "ilk-sil",
      task("ilk-sil").signature + " { head = head->next; return head; }",
    ).message,
    /NULL/,
  );
  assert.match(
    check(
      "ilk-sil",
      task("ilk-sil").signature +
        " { if(head == NULL) return NULL; free(head); return head->next; }",
    ).message,
    /free/,
  );
  assert.match(
    check(
      "ilk-sil",
      task("ilk-sil").code.replace("free(temp);", "free(temp); free(temp);"),
    ).message,
    /free/,
  );
});
test("serbest bırakılmayan kopuk düğüm bellek sızıntısıdır", () => {
  assert.match(
    check("ilk-sil", task("ilk-sil").code.replace("free(temp);", "")).message,
    /sızıntısı/,
  );
});
test("prev unutulursa ileri yönde doğru sonuç yeterli değildir", () => {
  const source = task("cift-altinci-sil").code.replace(
    "temp->next->prev = temp->prev;",
    "",
  );
  assert.match(check("cift-altinci-sil", source).message, /prev/);
});
test("malloc başarısızlığında NULL alanına erişim yakalanır", () => {
  const source = task("basa").code.replace(
    "if (yeni == NULL) return head;",
    "",
  );
  const result = check("basa", source);
  assert.equal(result.ok, false);
  assert.ok(
    result.rows.some(
      (r) => r.input.mallocFail && !r.ok && /NULL/.test(r.message),
    ),
  );
});
test("sonsuz döngü ve aşırı iç içe ifade sınırlanır", () => {
  const start = performance.now();
  const r = check("yazdir", "void yazdir(struct node *head) { while(1) {} }");
  assert.match(r.message, /sınırı/);
  assert.ok(performance.now() - start < 3000);
  assert.match(
    check(
      "ilk-sil",
      task("ilk-sil").signature +
        " { return " +
        "(".repeat(200) +
        "head" +
        ")".repeat(200) +
        "; }",
    ).message,
    /iç içe/,
  );
});
test("printf çıktısı ve listenin değişmezliği kontrol edilir", () => {
  const wrong = task("yazdir").code.replace("temp->data", "9");
  assert.equal(check("yazdir", wrong).ok, false);
  const mutation = task("yazdir").code.replace(
    "printf(",
    "temp->data = 1; printf(",
  );
  assert.match(check("yazdir", mutation).message, /değiştirmemeli/);
});
test("beklenmeyen doğrusal döngü ve açık kalan daire yakalanır", () => {
  const linear = task("basa").code.replace(
    "yeni->next = head;",
    "yeni->next = yeni;",
  );
  assert.match(check("basa", linear).message, /döngü/);
  const circular = task("daire-sona").code.replace(
    "yeni->next = yeni;",
    "yeni->next = NULL;",
  );
  assert.match(check("daire-sona", circular).message, /Dairesel/);
});
test("C sizeof işaretçi boyutu ile düğüm boyutunu ayırır", () => {
  assert.equal(
    check(
      "basa",
      task("basa").code.replace("sizeof *yeni", "sizeof(struct node)"),
    ).ok,
    true,
  );
  assert.match(
    check("basa", task("basa").code.replace("sizeof *yeni", "sizeof yeni"))
      .message,
    /malloc/,
  );
});
test("farklı algoritma, else, break, continue, cast ve aritmetik desteklenir", () => {
  const source = `struct node *sonaEkle(struct node *bas, int sayi) {
 struct node *ek = (struct node *)malloc(sizeof(struct node));
 if (!ek) return bas;
 ek->data = sayi; ek->next = NULL;
 if (!bas) { return ek; } else {
  struct node *gez = bas;
  for (;;) { if (gez->next == NULL) break; gez = gez->next; continue; }
  gez->next = ek;
 }
 return bas;
}`;
  assert.equal(check("sona", source).ok, true);
});
test("satır numarası, fonksiyon başlığı ve destek dışı komutlar açıklanır", () => {
  assert.equal(
    check("basa", task("basa").code.replace("return yeni;", "return yeni")).ok,
    false,
  );
  assert.match(
    check("basa", task("basa").code.replace("basaEkle", "baska")).message,
    /Fonksiyon adı/,
  );
  assert.match(
    check("basa", task("basa").signature + ' { system("x"); return head; }')
      .message,
    /desteklenmiyor/,
  );
  assert.ok(
    check("basa", task("basa").signature + " {\n return eksik;\n}").line === 2,
  );
});
test("öneriler C alanlarını ve yerel değişkenleri sunar; yorumda açılmaz", () => {
  const s = context.CLabComplete.suggest;
  assert.deepEqual(plain(s("head->", 6, task("basa")).items.map((i) => i[0])), [
    "data",
    "next",
  ]);
  assert.deepEqual(
    plain(s("head->", 6, task("cift-deger-sil")).items.map((i) => i[0])),
    ["data", "next", "prev"],
  );
  assert.equal(s("// mal", 6, task("basa")), null);
  assert.equal(s('printf("mal', 11, task("basa")), null);
  assert.equal(s("mal", 3, task("basa")).items[0][0], "malloc");
  assert.ok(
    s("struct node *gezici = NULL; gez", 30, task("basa"))?.items.some(
      (i) => i[0] === "gezici",
    ),
  );
});
test("bütün soruların animasyon dizileri ve test girdileri ayrıdır", () => {
  const signatures = new Set(
    context.CCaseLessons.map((c) => c.task.id + JSON.stringify(c.variant)),
  );
  assert.equal(signatures.size, 20);
  const html = fs.readFileSync(
    new URL("../c-kod-atolyesi.html", import.meta.url),
    "utf8",
  );
  for (const f of [
    "c-lab-engine.js",
    "c-lab-complete.js",
    "c-lab.js",
    "c-lab.css",
  ])
    assert.ok(html.includes("assets/" + f));
  assert.ok(
    !fs
      .readFileSync(new URL("../assets/c-cases.js", import.meta.url), "utf8")
      .includes("Bu alan otomatik puanlanmaz"),
  );
});
test("boş liste hatası öğrencinin gerçek işaretçi adını ve test koşulunu açıklar", () => {
  const r = check(
    "ilk-sil",
    "struct node *ilkSil(struct node *bas) {\n    return bas->next;\n}",
  );
  assert.equal(r.ok, false);
  assert.equal(r.diagnostic.expression, "bas");
  assert.match(r.diagnostic.scenario, /Boş liste/);
  assert.match(r.diagnostic.problem, /bas->next/);
  assert.match(r.diagnostic.suggestion, /boş liste/);
  assert.equal(r.diagnostic.line, 2);
});
test("tek düğümde olmayan komşuya erişim açıkça belirtilir", () => {
  const r = check(
    "son-sil",
    "struct node *sonSil(struct node *head) { if (head == NULL) return NULL; struct node *p = head; while (p->next->next != NULL) p = p->next; return head; }",
  );
  assert.match(r.diagnostic.scenario, /Tek düğümlü/);
  assert.equal(r.diagnostic.expression, "p->next");
  assert.match(r.diagnostic.suggestion, /p->next/);
});
test("malloc başarısızlığı ile boş liste birbirinden ayrılır", () => {
  const r = check(
    "basa",
    task("basa").code.replace("if (yeni == NULL) return head;", ""),
  );
  assert.match(r.diagnostic.scenario, /malloc başarısızlığı/);
  assert.match(r.diagnostic.suggestion, /malloc sonucunu/);
  assert.equal(r.diagnostic.expression, "yeni");
});
test("free sonrası erişimde bağlantıyı önce saklama önerilir", () => {
  const r = check(
    "ilk-sil",
    task("ilk-sil").code.replace(
      "free(temp);",
      "free(temp); head = temp->next;",
    ),
  );
  assert.match(r.diagnostic.problem, /temp/);
  assert.match(r.diagnostic.suggestion, /free çağrısından önce/);
  assert.ok(r.rows.some((row) => row.stopped));
});
test("yanlış çıktıda ilk farklı kaydın yeri açıklanır", () => {
  const r = check("yazdir", task("yazdir").code.replace("temp->data", "9"));
  assert.match(r.diagnostic.problem, /İlk fark 1\. kayıtta/);
  assert.match(r.diagnostic.problem, /beklenen 12, gelen 9/);
});
test("C yazım hatasında hiçbir test çalıştırılmış gibi gösterilmez", () => {
  const r = check(
    "ilk-sil",
    task("ilk-sil").code.replace("return head;", "return head"),
  );
  assert.equal(r.rows.length, 0);
  assert.match(r.diagnostic.scenario, /çalıştırılmadı/);
  assert.ok(r.diagnostic.codeLine);
});
