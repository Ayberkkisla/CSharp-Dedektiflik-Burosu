// Yayinlanacak dosyalari dist/ altina toplar.
// Netlify publish = "dist" kullanir; boylece tools/, tests/, docs/, .github/
// ve gizli dosyalar canli siteye cikmaz.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DIST = path.join(ROOT, "dist");

const FILES = [
  "index.html",
  "style.css",
  "app.js",
  "data.js",
  "favicon.svg",
  "firebase-config.js", // build sirasinda uretilir
  "sw.js",
  "sw-register.js",
  "google5af49ed490352552.html",
];

const DIRS = ["js"];

function copy(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

const eksikler = [];
for (const rel of FILES) {
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) {
    eksikler.push(rel);
    continue;
  }
  copy(src, path.join(DIST, rel));
}
for (const rel of DIRS) {
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) continue;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.isFile())
      copy(path.join(src, entry.name), path.join(DIST, rel, entry.name));
  }
}

// netlify.toml: redirects yok, headers ekle (guvenlik basliklari).
fs.writeFileSync(
  path.join(DIST, "_headers"),
  `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), camera=(), microphone=()

/data.js
  Cache-Control: public, max-age=3600, must-revalidate
`,
  "utf8",
);

if (eksikler.length) {
  console.error(`[build-site] su dosyalar bulunamadi: ${eksikler.join(", ")}`);
  process.exit(1);
}
console.log(`[build-site] dist/ olusturuldu (${FILES.length + 2} dosya).`);
