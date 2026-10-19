import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

globalThis.window = globalThis;
await import("../assets/unit1-code-complete.js");

const { suggest } = globalThis.Unit1CodeComplete;

/* Yardımcılar: motorun saf çekirdeğini doğrudan çağırır. */
const ask = (context) => suggest({ variables: [], source: "", ...context });
const names = (context) => ask(context).entries.map((entry) => entry.name);
const entryOf = (context, name) =>
  ask(context).entries.find((item) => item.name === name);

test("anahtar kelimeler her editörde önerilir (eski kimlik kapısı kalktı)", () => {
  const editorIds = [
    "b7-editor",
    "b8-editor",
    "u1cap-editor",
    "cap-editor",
    "arrcap-editor",
    "metcap-editor",
    "u3cap-editor",
  ];
  for (const editorId of editorIds) {
    assert.ok(
      names({ before: "f", editorId }).includes("for"),
      editorId + " için for önerilmeli",
    );
    assert.ok(
      names({ before: "wh", editorId }).includes("while"),
      editorId + " için while önerilmeli",
    );
  }
});

test("yaygın önekler doğru öneriyi getirir", () => {
  const cases = {
    f: "for",
    fo: "for",
    fore: "foreach",
    wh: "while",
    d: "do",
    el: "else",
    sw: "switch",
    ca: "case",
    br: "break",
    co: "continue",
    re: "return",
    va: "var",
    in: "int",
    st: "string",
    de: "decimal",
    bo: "bool",
    ch: "char",
    lo: "long",
    vo: "void",
    cl: "class",
    us: "using",
    Con: "Console",
    Conv: "Convert",
    Ma: "Math",
    Ar: "Array",
  };
  for (const [prefix, expected] of Object.entries(cases)) {
    assert.ok(
      names({ before: prefix }).includes(expected),
      prefix + " yazınca " + expected + " önerilmeli",
    );
  }
});

test("dizi değişkeninde Length önerilir (kullanıcı bildirimi)", () => {
  const source = "int[] raf = new int[3];\nraf[0] = 1;\n";
  assert.equal(names({ before: "raf.l", source })[0], "Length");
  assert.ok(names({ before: "raf.", source }).includes("GetLength"));
});

test("var ile tanımlanan dizide de Length önerilir", () => {
  const source = "var raf = new int[3];\n";
  assert.equal(names({ before: "raf.l", source })[0], "Length");
});

test("bildirim yoksa kullanımdan tür çıkarılır (raf[0])", () => {
  const source = "raf[0] = Convert.ToInt32(Console.ReadLine());\n";
  assert.equal(names({ before: "raf.l", source })[0], "Length");
});

test("metin değişkeninde metin üyeleri önerilir", () => {
  const source = "string ad = Console.ReadLine();\n";
  const list = names({ before: "ad.", source });
  for (const member of [
    "Length",
    "Substring",
    "ToUpper",
    "ToLower",
    "Trim",
    "Split",
  ]) {
    assert.ok(list.includes(member), "ad. için " + member + " önerilmeli");
  }
  assert.ok(!list.includes("Add"), "metinde Add önerilmemeli");
});

test("List değişkeninde liste üyeleri önerilir", () => {
  const source = "List<int> liste = new List<int>();\n";
  const list = names({ before: "liste.", source });
  assert.ok(
    list.includes("Add") && list.includes("Count") && list.includes("Remove"),
  );
  assert.ok(!list.includes("Length"), "Listede Length önerilmemeli");
});

test("sayı değişkeninde yalnızca geçerli üyeler önerilir", () => {
  const list = names({ before: "adet.", source: "int adet = 3;\n" });
  assert.ok(list.includes("ToString"));
  assert.ok(!list.includes("Length"), "int değerde Length önerilmemeli");
  assert.ok(!list.includes("Substring"), "int değerde Substring önerilmemeli");
});

test("görev girdilerinin tipi kullanılır", () => {
  const variables = [["butce", "Bütçe nedir?", "decimal"]];
  const list = names({ before: "butce.", variables });
  assert.ok(list.includes("ToString"));
  assert.ok(!list.includes("Length"));
});

test("iki boyutlu dizide de Length önerilir", () => {
  const source = "int[,] m = { {1,2}, {3,4} };\n";
  assert.equal(names({ before: "m.l", source })[0], "Length");
  assert.ok(names({ before: "m.", source }).includes("GetLength"));
  assert.equal(names({ before: "m.", source }).length, 6);
});

test("türü tanınmayan değişkende liste boş kalmaz", () => {
  const list = names({ before: "bilinmeyen.", source: "" });
  assert.equal(list.length, 10);
  assert.equal(list[0], "Length");
  assert.ok(list.includes("Count"));
  assert.ok(names({ before: "bilinmeyen.l" }).includes("Length"));
  assert.ok(
    names({ before: "eskiKod.l", source: "eskiKod = 1;\n" }).includes("Length"),
  );
});

test("türü tanınmayan değişkenin önerileri tahmini olarak işaretlenir", () => {
  const guess = ask({ before: "bilinmeyen." }).entries;
  assert.ok(guess.every((item) => item.description.includes("tahminî")));
  const typed = ask({
    before: "raf.",
    source: "int[] raf = new int[3];\n",
  }).entries;
  assert.ok(typed.every((item) => !item.description.includes("tahminî")));
});

test("hazır satırlar editör dışında olsa da tür bulunur", () => {
  const page = 'int[] rafNo = { 12, 7, 25 };\nstring[] ad = { "ali" };\n';
  assert.equal(names({ before: "rafNo.l", source: page })[0], "Length");
  assert.equal(names({ before: "ad.l", source: page })[0], "Length");
});

test("metot çağrısından sonra dönen tür bilinir", () => {
  assert.ok(names({ before: "Console.ReadLine().T" }).includes("ToString"));
  assert.ok(names({ before: "Console.ReadLine().S" }).includes("Substring"));
  const source = 'string ad = "  x  ";\n';
  assert.ok(names({ before: "ad.Trim().L", source }).includes("Length"));
  assert.ok(names({ before: "ad.Split().L", source }).includes("Length"));
  assert.ok(names({ before: "ad.ToUpper().L", source }).includes("Length"));
});

test("statik sınıf üyeleri listelenir", () => {
  assert.deepEqual(
    ["WriteLine", "ReadLine"].every((name) =>
      names({ before: "Console." + name.slice(0, 1) }).includes(name),
    ),
    true,
  );
  assert.ok(names({ before: "Convert.ToI" }).includes("ToInt32"));
  assert.ok(names({ before: "Math.M" }).includes("Max"));
  assert.ok(names({ before: "Array.S" }).includes("Sort"));
  assert.ok(names({ before: "int.Try" }).includes("TryParse"));
  assert.ok(names({ before: "string.Jo" }).includes("Join"));
});

test("metin ve yorum içinde öneri verilmez", () => {
  assert.deepEqual(names({ before: 'Console.WriteLine("f' }), []);
  assert.deepEqual(names({ before: "// f" }), []);
  assert.deepEqual(names({ before: "/* f" }), []);
  assert.deepEqual(names({ before: 'string s = "raf.' }), []);
});

test("seçim varken çağrı boş döner (imleç konumu yok)", () => {
  const result = suggest({ before: "", source: "", variables: [] });
  assert.deepEqual(result.entries, []);
  assert.equal(result.prefix, "");
});

test("Ctrl + Boşluk ile liste zorla açılır ve sınır aşılmaz", () => {
  const list = names({ before: "", force: true });
  assert.equal(list.length, 10);
  assert.ok(list.includes("for"));
  assert.equal(
    names({ before: "", force: true, limit: 500 }).length > 20,
    true,
  );
});

test("blok seçenekleri birlikte önerilir", () => {
  const list = names({ before: "else" });
  assert.ok(list.includes("else") && list.includes("else if"));
});

test("görev değişkenleri önerilmez, koddan gelenler önerilir", () => {
  const variables = [
    ["adet", "Kaç kez yazılacak?", "int"],
    ["butce", "Bütçe nedir?", "decimal"],
  ];
  assert.ok(!names({ before: "ade", variables }).includes("adet"));
  assert.ok(!names({ before: "but", variables }).includes("butce"));
  const source = "int adet = 3;\n";
  assert.ok(names({ before: "ade", code: source, source }).includes("adet"));
  assert.ok(!names({ before: "adet", code: source, source }).includes("adet"));
});

test("sayfadaki hazır satırlar değişken önermez ama türünü tanıtır", () => {
  const page = "int adet = 3;\n";
  assert.ok(!names({ before: "ade", code: "", source: page }).includes("adet"));
  assert.ok(
    names({ before: "adet.", code: "", source: page }).includes("ToString"),
  );
});

test("hiçbir öneride imleç işareti kalmaz", () => {
  const contexts = [
    { before: "", force: true, limit: 500 },
    { before: "Console.", limit: 500 },
    { before: "Convert.", limit: 500 },
    { before: "Math.", limit: 500 },
    { before: "Array.", limit: 500 },
    { before: "int.", limit: 500 },
    { before: "string.", limit: 500 },
    { before: "raf.", source: "int[] raf = new int[3];", limit: 500 },
    { before: "ad.", source: "string ad = Console.ReadLine();", limit: 500 },
    { before: "adet.", source: "int adet = 3;", limit: 500 },
    { before: "m.", source: "int[,] m = { {1,2}, {3,4} };", limit: 500 },
    { before: "bilinmeyen.", limit: 500 },
    { before: "Console.ReadLine().", limit: 500 },
  ];
  let total = 0;
  for (const context of contexts) {
    const list = ask(context).entries;
    total += list.length;
    for (const item of list) {
      assert.ok(!item.insert.includes("§"), item.name + " içinde işaret kaldı");
      assert.equal(typeof item.back, "number");
      assert.ok(
        item.back >= 0 && item.back <= item.insert.length,
        item.name + " kaydırma değeri hatalı",
      );
      assert.ok(
        item.description && item.description.length > 3,
        item.name + " açıklaması eksik",
      );
    }
  }
  assert.ok(total > 60, "katalog beklenenden küçük: " + total);
});

test("imleç kalıbın içine yerleşir", () => {
  const forLoop = entryOf({ before: "f" }, "for");
  assert.ok(
    forLoop.insert
      .slice(0, forLoop.insert.length - forLoop.back)
      .endsWith("< "),
  );
  const condition = entryOf({ before: "if" }, "if");
  assert.ok(
    condition.insert
      .slice(0, condition.insert.length - condition.back)
      .endsWith("("),
  );
  const call = entryOf({ before: "Convert.ToI" }, "ToInt32");
  assert.ok(call.insert.slice(0, call.insert.length - call.back).endsWith("("));
});

test("dizi ve metin için aynı ada sahip üyeler tek kez önerilir", () => {
  const list = names({
    before: "ad.",
    source: "string ad = Console.ReadLine();",
    limit: 500,
  });
  const lengths = list.filter((name) => name === "Length");
  assert.equal(lengths.length, 1);
});

test("ünite 1 yalnızca temel öğeleri önerir", () => {
  const keywords = names({ before: "", force: true, limit: 500, scope: "u1" });
  for (const name of ["int", "string", "Console", "Convert", "if", "else"]) {
    assert.ok(keywords.includes(name), "ünite 1'de " + name + " önerilmeli");
  }
  const yasak = [
    "for",
    "foreach",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "new",
    "void",
    "static",
    "class",
    "return",
    "Math",
    "Array",
    "List",
  ];
  for (const name of yasak) {
    assert.ok(!keywords.includes(name), "ünite 1'de " + name + " önerilmemeli");
  }
  const members = names({ before: "bilinmeyen.", limit: 500, scope: "u1" });
  assert.ok(members.includes("Length"));
  assert.ok(!members.includes("Count") && !members.includes("Add"));
  assert.equal(names({ before: "int.", limit: 500, scope: "u1" }).length, 0);
  assert.ok(
    names({ before: "string.IsNullOr", scope: "u1" }).includes("IsNullOrEmpty"),
  );
  assert.ok(
    !names({ before: "string.Jo", limit: 500, scope: "u1" }).includes("Join"),
  );
  assert.equal(names({ before: "Console.", scope: "u1" }).length, 5);
});

test("ünite 2 döngüleri ve metin üyelerini ekler, koleksiyonları eklemez", () => {
  const keywords = names({ before: "", force: true, limit: 500, scope: "u2" });
  for (const name of [
    "for",
    "foreach",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "int",
    "Console",
  ]) {
    assert.ok(keywords.includes(name), "ünite 2'de " + name + " önerilmeli");
  }
  for (const name of [
    "new",
    "void",
    "static",
    "class",
    "Math",
    "Array",
    "List",
  ]) {
    assert.ok(!keywords.includes(name), "ünite 2'de " + name + " önerilmemeli");
  }
  const members = names({ before: "bilinmeyen.", limit: 500, scope: "u2" });
  assert.ok(members.includes("Length"));
  assert.ok(!members.includes("Count") && !members.includes("Add"));
  assert.ok(names({ before: "int.Try", scope: "u2" }).includes("TryParse"));
  const source = 'string ad = " x ";\n';
  assert.ok(
    names({ before: "ad.S", source, limit: 500, scope: "u2" }).includes(
      "Substring",
    ),
  );
});

test("ünite 3 tam katalogdur", () => {
  const keywords = names({ before: "", force: true, limit: 500, scope: "u3" });
  for (const name of [
    "new",
    "void",
    "static",
    "class",
    "Math",
    "Array",
    "List",
  ]) {
    assert.ok(keywords.includes(name), "ünite 3'te " + name + " önerilmeli");
  }
  const members = names({ before: "bilinmeyen.", limit: 500, scope: "u3" });
  assert.ok(members.includes("Length"));
  assert.ok(members.includes("Count") && members.includes("Add"));
  assert.ok(names({ before: "Math.M", scope: "u3" }).includes("Max"));
});

test("ünite belirtilmezse tam katalog geçerli", () => {
  const list = names({ before: "", force: true, limit: 500 });
  assert.ok(
    list.includes("List") && list.includes("for") && list.includes("class"),
  );
});

const caseScopes = {
  "unit1-box-case.js": "u1",
  "unit1-hard-case.js": "u1",
  "unit1-capstone.js": "u1",
  "unit2-flow-case.js": "u2",
  "unit2-next-case.js": "u2",
  "unit2-loop-case.js": "u2",
  "unit2-mix-case.js": "u2",
  "unit2-capstone.js": "u2",
  "unit3-array-case.js": "u3",
  "unit3-method-case.js": "u3",
  "unit3-capstone.js": "u3",
};

test("her kod yazma vakası kendi ünitesini bildirir", () => {
  for (const [file, scope] of Object.entries(caseScopes)) {
    const text = readFileSync(
      new URL("../assets/" + file, import.meta.url),
      "utf8",
    );
    assert.ok(
      text.includes("{scope:'" + scope + "'}"),
      file + " içinde ünite bilgisi yok",
    );
  }
});
