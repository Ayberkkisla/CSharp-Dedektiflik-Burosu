// FIREBASE_* ortam degiskenlerinden firebase-config.js uretir.
// - Yerel: once .env dosyasi okunur (varsa), sonra process.env
// - Netlify: Site settings > Environment variables > FIREBASE_* degiskenleri
// Eksik degisken varsa dosya "yapilandirma yok" modunda uretilir: oyun calisir,
// giris/senkron kapali kalir (site deploy edilir, bozulmaz).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = path.join(ROOT, "firebase-config.js");
const ENV_FILE = path.join(ROOT, ".env");

const FIELDS = [
  ["FIREBASE_API_KEY", "apiKey"],
  ["FIREBASE_AUTH_DOMAIN", "authDomain"],
  ["FIREBASE_PROJECT_ID", "projectId"],
  ["FIREBASE_STORAGE_BUCKET", "storageBucket"],
  ["FIREBASE_MESSAGING_SENDER_ID", "messagingSenderId"],
  ["FIREBASE_APP_ID", "appId"],
];

function loadDotEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const rawLine of fs.readFileSync(file, "utf8").split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq < 1) continue;
    const key = line.slice(0, eq).trim();
    let value = line
      .slice(eq + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

function main() {
  loadDotEnv(ENV_FILE);
  const missing = FIELDS.filter(([env]) => !process.env[env]).map(
    ([env]) => env,
  );

  // CI/Netlify gibi ortamda eksik degisken hatadir: gizli modda uretmek
  // "giris calisiyor" gorunumu verir ama giris sessizce kapali kalir.
  // Bu yuzden build ortaminda hata verip deploy'u durduruyoruz.
  const isBuildOrtami = !!(
    process.env.CI ||
    process.env.NETLIFY ||
    process.env.VERCEL ||
    process.env.GITHUB_ACTIONS
  );

  const body = missing.length
    ? `// firebase-config.js (uretilmis) - eksik ortam degiskenleri: ${missing.join(", ")}\n` +
      `// Firebase yapilandirmasi yok; oyun yerel modda calisiyor.\n` +
      `window.FIREBASE_CONFIG = null;\n`
    : `// firebase-config.js (uretilmis) - elle degistirme, ortam degiskenlerinden gelir.\n` +
      `window.FIREBASE_CONFIG = {\n` +
      FIELDS.map(([env, field]) => `  ${field}: ${process.env[env]},`).join(
        "\n",
      ) +
      `};\n`;

  fs.writeFileSync(OUT, body, "utf8");

  if (missing.length) {
    if (isBuildOrtami) {
      console.error(
        `[firebase-config] HATA: ${missing.length} ortam degiskeni eksik: ${missing.join(", ")}\n` +
          "Netlify > Project configuration > Environment variables icinde bu 6 degeni tanimla " +
          "(FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, " +
          "FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID).\n" +
          "Deploy bilerek durduruluyor: aksi halde giriş/senkron sessizce calismaz.",
      );
      process.exit(1);
    }
    console.warn(
      `[firebase-config] ${missing.length} degisken eksik -> yerel modda uretildi: ${missing.join(", ")}`,
    );
  } else {
    console.log("[firebase-config] firebase-config.js uretildi.");
  }
}

main();
