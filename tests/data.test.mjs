// data.js butunluk testleri (node:test, sifir bagimlilik).
// Soru verisinin tutarliligini denetler; C# ciktilarini scripts/validate-questions.mjs dogrular.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DATA_JS = path.join(ROOT, "data.js");

const context = vm.createContext({});
vm.runInContext(fs.readFileSync(DATA_JS, "utf8"), context, {
  filename: DATA_JS,
});
const DERSLER = context.DERSLER;
const KODTAMAMLALAR = context.KODTAMAMLALAR;

test("data.js parse ediliyor ve beklenen toplamlar korunuyor", () => {
  assert.equal(DERSLER.length, 23, "23 vaka olmali");
  assert.equal(
    Object.keys(KODTAMAMLALAR).length,
    23,
    "her vaka icin KOD TAMAMLA havuzu olmali",
  );
});

// vaka 20 "Beceri Temelli Soru 2" yalnizca KOD TAMAMLA sorularindan olusur;
// coktan secmeli sorusu ve boss sorusu bilincli olarak yok.
const YALNIZCA_KODTAMAMLALI = new Set([20]);

test("her vaka gerekli alanlari iceriyor", () => {
  for (const ders of DERSLER) {
    assert.ok(ders.n, "vaka numarasi yok");
    assert.ok(ders.baslik?.trim(), `vaka ${ders.n} basligi bos`);
    assert.ok(ders.giris?.trim(), `vaka ${ders.n} girisi bos`);
    assert.ok(
      Array.isArray(ders.konu) && ders.konu.length,
      `vaka ${ders.n} konu karti yok`,
    );
    // Her vakada en az bir KOD TAMAMLA olmali; coktan secmeli sorular istege baglidir.
    const kodTamamla = (KODTAMAMLALAR[ders.n] || []).length;
    const coktanSecmeli = (ders.sorular || []).length;
    assert.ok(
      kodTamamla + coktanSecmeli > 0,
      `vaka ${ders.n}: ne KOD TAMAMLA ne coktan secmeli soru var`,
    );

    // Boss ve coktan secmeli soru tasiyan her vakada boss olmali.
    if (!YALNIZCA_KODTAMAMLALI.has(ders.n) && coktanSecmeli > 0) {
      assert.ok(ders.boss?.soru, `vaka ${ders.n} boss sorusu yok`);
      assert.ok(
        coktanSecmeli >= 5,
        `vaka ${ders.n}: ${coktanSecmeli} soru, 5'ten az`,
      );
    }
  }
});

test("coktan secmeli sorularin cevabi bir secenek anahtari", () => {
  for (const ders of DERSLER) {
    for (const soru of ders.sorular || []) {
      if (soru.tip !== "r") continue;
      const secenekler = new Set((soru.sec || []).map(([key]) => key));
      assert.ok(
        secenekler.size >= 2,
        `vaka ${ders.n}: "${soru.soru?.slice(0, 30)}..." secenegi az`,
      );
      assert.ok(
        secenekler.has(soru.cevap),
        `vaka ${ders.n}: cevap "${soru.cevap}" seceneklerde yok -> ${JSON.stringify([...secenekler])}`,
      );
      assert.ok(
        soru.neden?.trim(),
        `vaka ${ders.n}: cevap ${soru.cevap} icin neden yok`,
      );
    }
  }
});

test("nisansli sorularda cevap ve neden var", () => {
  for (const ders of DERSLER) {
    for (const soru of ders.sorular || []) {
      if (soru.tip !== "n") continue;
      assert.ok(soru.soru?.trim(), `vaka ${ders.n}: nüanslı soru metni yok`);
      assert.ok(soru.cevap?.trim(), `vaka ${ders.n}: nüanslı soru cevabı yok`);
      assert.ok(soru.neden?.trim(), `vaka ${ders.n}: nüanslı soru nedeni yok`);
    }
  }
});

test("soru idleri dosya icinde tekil", () => {
  const ids = new Set();
  for (const ders of DERSLER) {
    for (const soru of ders.sorular || []) {
      if (soru.id === undefined) continue;
      const key = `${soru.id}`;
      assert.ok(!ids.has(key), `tekrar eden soru id: ${key}`);
      ids.add(key);
    }
  }
});

test("KOD TAMAMLA havuzlari tutarli (bosluk sayisi kabul ile esit)", () => {
  for (const [unit, sorular] of Object.entries(KODTAMAMLALAR)) {
    for (const soru of sorular || []) {
      if (soru.tip !== "bosluk") continue;
      const boslukSayisi = (soru.satirlar || []).filter(
        (l) => l === null,
      ).length;
      assert.equal(
        boslukSayisi,
        (soru.kabul || []).length,
        `vaka ${unit}, id ${soru.id}: ${boslukSayisi} boşluk ama ${(soru.kabul || []).length} kabul parçası`,
      );
      assert.ok(
        soru.cikti?.trim(),
        `vaka ${unit}, id ${soru.id}: beklenen çıktı yok`,
      );
    }
  }
});
