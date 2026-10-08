// Denetim script'inin kendisini dogrulayan test.
// Gecici bir dosyaya bilerek gizli deger deseni yazar ve script'in yakaladigini
// teyit eder. Dosya test sonunda silinir ve git'e girmez.
//
// NOT: Bu dosyanin kendisi denetimden muaftir: icerigi kasitli olarak sahte
// gizli deger kaliplari barindirir. Gercek bir anahtar degildir.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SCRIPT = path.join(ROOT, "scripts", "check-secrets.mjs");

function calistir() {
  return spawnSync("node", [SCRIPT], { cwd: ROOT, encoding: "utf8" });
}

test("temiz depo geciyor", () => {
  const r = calistir();
  assert.equal(r.status, 0, `temiz depo basarisiz:\n${r.stdout}\n${r.stderr}`);
  assert.match(r.stdout, /Guvenlik kontrolu gecti/);
});

test("yazilan bir API key yakalaniyor", () => {
  const dosya = path.join(ROOT, "temp-leak-test-key.txt");
  fs.writeFileSync(
    dosya,
    'apiKey = "AIzaSyTESTKEY0000000000000000000000000000000"\n',
    "utf8",
  );
  try {
    const r = calistir();
    assert.equal(r.status, 1, "anahtar yazildi ama script gecti");
    assert.match(r.stderr, /Google\/Firebase API key/);
  } finally {
    fs.rmSync(dosya, { force: true });
  }
});

test("private key yakalaniyor", () => {
  const dosya = path.join(ROOT, "temp-leak-test-pem.txt");
  fs.writeFileSync(
    dosya,
    "-----BEGIN RSA PRIVATE KEY-----\nMIIEow==\n",
    "utf8",
  );
  try {
    const r = calistir();
    assert.equal(r.status, 1, "private key yazildi ama script gecti");
    assert.match(r.stderr, /private key/);
  } finally {
    fs.rmSync(dosya, { force: true });
  }
});

test("koda gomulu sifre alani yakalaniyor", () => {
  const dosya = path.join(ROOT, "temp-leak-test-pw.txt");
  fs.writeFileSync(dosya, '{"password":"cokgizliUzunSifre123"}\n', "utf8");
  try {
    const r = calistir();
    assert.equal(r.status, 1, "sifre yazildi ama script gecti");
    assert.match(r.stderr, /sifre\/token/);
  } finally {
    fs.rmSync(dosya, { force: true });
  }
});

test("denetim sonrasi depo yine temiz", () => {
  const r = calistir();
  assert.equal(
    r.status,
    0,
    `denetim sonrasi repo temiz olmali:\n${r.stdout}\n${r.stderr}`,
  );
});
