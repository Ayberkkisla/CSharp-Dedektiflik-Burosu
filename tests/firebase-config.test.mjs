// make-firebase-config.mjs'in CI davranisini dogrular.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SCRIPT = path.join(ROOT, "scripts", "make-firebase-config.mjs");
const OUT = path.join(ROOT, "firebase-config.js");
const ENV_FILE = path.join(ROOT, ".env");

const FIELDS = [
  "FIREBASE_API_KEY",
  "FIREBASE_AUTH_DOMAIN",
  "FIREBASE_PROJECT_ID",
  "FIREBASE_STORAGE_BUCKET",
  "FIREBASE_MESSAGING_SENDER_ID",
  "FIREBASE_APP_ID",
];

// .env dosyasini gecici olarak tasiyarak .env'siz (Netlify gibi) durumu taklit ederiz.
function envsizCalistir(extraEnv = {}) {
  const yedek = fs.existsSync(ENV_FILE)
    ? fs.readFileSync(ENV_FILE, "utf8")
    : null;
  if (yedek !== null) fs.rmSync(ENV_FILE);
  const temizEnv = { ...process.env };
  for (const k of FIELDS) delete temizEnv[k];
  for (const k of Object.keys(extraEnv)) temizEnv[k] = extraEnv[k];
  try {
    const r = spawnSync("node", [SCRIPT], {
      cwd: ROOT,
      encoding: "utf8",
      env: temizEnv,
    });
    return {
      status: r.status,
      stdout: r.stdout ?? "",
      stderr: r.stderr ?? "",
      config: fs.readFileSync(OUT, "utf8"),
    };
  } finally {
    if (yedek !== null) fs.writeFileSync(ENV_FILE, yedek, "utf8");
  }
}

test("CI ortaminda eksik degiskenler build'i durdurur", () => {
  const r = envsizCalistir({ CI: "true" });
  assert.equal(r.status, 1, "CI'da eksik degisken hata vermeli");
  assert.match(r.stderr, /ortam degiskeni eksik/);
  for (const alan of FIELDS) assert.match(r.stderr, new RegExp(alan));
});

test("Netlify ortaminda eksik degiskenler build'i durdurur", () => {
  const r = envsizCalistir({ NETLIFY: "true" });
  assert.equal(r.status, 1, "Netlify'ta eksik degisken hata vermeli");
});

test("yerel ortamda eksik degisken uyari verir ama calisir", () => {
  const r = envsizCalistir({});
  assert.equal(r.status, 0, "yerelde eksik degisken hata vermemeli");
  assert.match(r.stderr, /yerel modda uretildi/); // console.warn -> stderr
  assert.match(r.config, /FIREBASE_CONFIG = null/);
});

test("tum degiskenler tanimliyse gercek config uretilir", () => {
  const r = envsizCalistir({
    CI: "true",
    FIREBASE_API_KEY: "AIzaTEST",
    FIREBASE_AUTH_DOMAIN: "x.firebaseapp.com",
    FIREBASE_PROJECT_ID: "x",
    FIREBASE_STORAGE_BUCKET: "x.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "1",
    FIREBASE_APP_ID: "1:1:web:x",
  });
  assert.equal(r.status, 0, "tam degiskenle hata vermemeli");
  assert.match(r.stdout, /uretildi/);
  assert.match(r.config, /FIREBASE_CONFIG = \{/);
  assert.match(r.config, /apiKey: AIzaTEST/);
});
