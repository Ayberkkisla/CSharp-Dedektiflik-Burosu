// Guvenlik kontrolu: gizli degerlerin git'e girmesini engeller.
//   1) Icerik taramasi: AIza..., private key, "=BEGIN ... PRIVATE KEY", token/password kaliplari
//   2) Kural kontrolu: .env, firebase-config.js gibi dosyalar .gitignore'da mi
//   3) Tracked dosya kontrolu: yasakli dosyalardan biri git'e giris mi
//
// Kullanim: npm run check:secrets
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// Bu desenler gizli deger tasiyan dosyalari ve degerleri yakalar.
// Firebase web API key'i istisnadır: tarayiciya inmesi zorunludur, bu yuzden
// icerik degil KURAL taramasi uygulanir (dosya repoda olmamalidir).
const CONTENT_PATTERNS = [
  { re: /AIza[0-9A-Za-z_-]{30,}/, ad: "Google/Firebase API key" },
  { re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/, ad: "private key" },
  { re: /\b[0-9]{10,}:[A-Za-z0-9_-]{30,}\b/, ad: "Telegram bot token" },
  { re: /\bghp_[A-Za-z0-9]{30,}/, ad: "GitHub token" },
  { re: /\bsk-[A-Za-z0-9]{20,}/, ad: "OpenAI/Secret key" },
  { re: /AKIA[0-9A-Z]{16}/, ad: "AWS access key" },
  {
    re: /"(?:password|passwd|secret|token|api[_-]?key)"\s*:\s*"[^"$\s]{16,}"/i,
    ad: "sifre/token",
  },
];

// Bu dosyalar repoda bulunmamalidir (deger uretim aninda gecer).
const FORBIDDEN_FILES = [
  ".env",
  ".env.local",
  ".env.production",
  "firebase-config.js",
  "netlify.toml.local",
  "service-account.json",
];

const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "bin",
  "obj",
  "__pycache__",
]);

function gitLines(args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.startsWith(".env")) continue; // gitignore, icerigi de gizli
    if (entry.name.startsWith(".") && entry.name !== ".github") continue;
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function ignoreKurallari() {
  const lines = fs.existsSync(path.join(ROOT, ".gitignore"))
    ? fs.readFileSync(path.join(ROOT, ".gitignore"), "utf8").split("\n")
    : [];
  return lines.map((l) => l.trim());
}

const problems = [];

// 1) Icerek taramasi (git'e girise hazir dosyalar + uretilen dosyalar)
// Not: firebase-config.js build sirasinda uretilir ve icerigi Firebase'in
// public web config'idir; bu yuzden icerik taramasindan muaf tutulur, ancak
// repoda OLMADIGI yine de zorunlu olarak denetlenir (asagida).
const ICERIK_MUAF = new Set(["firebase-config.js"]);
// Bu dosya sahte gizli deger kaliplari icerir (denetim testi); tarama disinda.
const ICERIK_MUAF_DOSYA = new Set([...ICERIK_MUAF, "tests/security.test.mjs"]);

// 1a) Izlenen dosyalar: git'e girecek her sey
for (const rel of gitLines(["ls-files"])) {
  if (ICERIK_MUAF_DOSYA.has(rel)) continue;
  if (/\.(png|jpg|jpeg|gif|ico|woff2?|zip|bundle)$/i.test(rel)) continue;
  const full = path.join(ROOT, rel);
  let text;
  try {
    text = fs.readFileSync(full, "utf8");
  } catch {
    continue;
  }
  if (text.length > 2_000_000) continue; // data.js gibi devre dosyalar atlanir
  for (const { re, ad } of CONTENT_PATTERNS) {
    const satir = text.split("\n").findIndex((l) => re.test(l));
    if (satir >= 0)
      problems.push(`icerik: ${rel}:${satir + 1} ${ad} deseni bulundu`);
  }
}

// 1b) Izlenmemis dosyalar: git'e eklenmeden once de yakalanmasi icin
for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  if (ICERIK_MUAF_DOSYA.has(rel)) continue;
  if (FORBIDDEN_FILES.includes(rel)) continue; // yalnizca varligi yasak
  if (rel.startsWith("dist/")) continue;
  if (/\.(png|jpg|jpeg|gif|ico|woff2?|zip|bundle)$/i.test(rel)) continue;
  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }
  if (text.length > 2_000_000) continue; // data.js gibi devre dosyalar atlanir
  for (const { re, ad } of CONTENT_PATTERNS) {
    const satir = text.split("\n").findIndex((l) => re.test(l));
    if (satir >= 0)
      problems.push(`icerik: ${rel}:${satir + 1} ${ad} deseni bulundu`);
  }
}

// 2) .gitignore kurallari
const ignore = ignoreKurallari();
for (const gerekli of [".env", "firebase-config.js"]) {
  if (!ignore.includes(gerekli))
    problems.push(`.gitignore icinde "${gerekli}" kurali yok`);
}

// 3) Tracked dosyalar
const tracked = new Set(gitLines(["ls-files"]));
for (const yasakli of FORBIDDEN_FILES) {
  if (tracked.has(yasakli))
    problems.push(`git'e giris: "${yasakli}" izleniyor olmamali`);
}

if (problems.length) {
  console.error(
    `${problems.length} guvenlik sorunu:\n` +
      problems.map((p) => `  - ${p}`).join("\n"),
  );
  console.error(
    "\nGizli degerleri dosyalardan kaldir ve gecmise sizdiysa git filter-repo ile temizle.",
  );
  process.exit(1);
}

console.log(
  `Guvenlik kontrolu gecti: ${tracked.size} izlenen dosya tarandi, ${FORBIDDEN_FILES.length} yasakli dosya kurali dogrulandi.`,
);
