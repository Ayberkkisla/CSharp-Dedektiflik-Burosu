// Git hook'larini etkinlestirir: core.hooksPath = ./.githooks
// Boylece commit/push oncesi gizli deger denetimi calisir.
// Kullanim: npm run install:hooks
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function git(args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();
}

for (const hook of ["pre-commit", "pre-push"]) {
  const p = path.join(ROOT, ".githooks", hook);
  if (fs.existsSync(p)) fs.chmodSync(p, 0o755);
}

git(["config", "core.hooksPath", "./.githooks"]);

// Hook dizini repoda takip edilsin (Windows chmod calismasa da dosyalar commit edilir).
git(["add", "-f", ".githooks/pre-commit", ".githooks/pre-push"]);

console.log(
  `Hook'lar etkin: core.hooksPath = ${git(["config", "core.hooksPath"])}`,
);
console.log("Artik commit ve push oncesi gizli deger denetimi calisir.");
