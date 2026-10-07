// KOD TAMAMLA sorularinin dogru cevaplarini gercekten derleyip calistirir:
// data.js icindeki satirlar + kabul parcalari birlestirilir, gecici bir klasorde
// .NET ile derlenir ve uretilen cikti `cikti` alaniyla karsilastirilir.
//
// Kullanim: npm run validate
//
// Not: Burada test edilen sey C# kodunun dogrulugudur; JavaScript motoru degil.
// Script sadece soru verisini okur ve .NET komutunu calistirir.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DATA_JS = path.join(ROOT, "data.js");
const VALIDATOR_SRC = path.join(ROOT, "tools", "validator");

const WRAPPER = `using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
Console.OutputEncoding = Encoding.UTF8;
{body}
`;

function loadData() {
  // data.js gercek bir JS dosyasi: vm ile calistirip DERSLER / KODTAMAMLALAR alinir.
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(DATA_JS, "utf8"), context, {
    filename: DATA_JS,
  });
  return { DERSLER: context.DERSLER, KODTAMAMLALAR: context.KODTAMAMLALAR };
}

function collectQuestions({ DERSLER, KODTAMAMLALAR }) {
  const usable = (s) => s?.tip === "bosluk" && s.satirlar && s.kabul && s.cikti;
  const out = [];

  for (const ders of DERSLER) {
    for (const soru of ders.sorular || [])
      if (usable(soru)) out.push([ders.n, soru]);
  }
  for (const [unit, sorular] of Object.entries(KODTAMAMLALAR || {})) {
    for (const soru of sorular || []) if (usable(soru)) out.push([unit, soru]);
  }
  return out;
}

function buildProgram(soru) {
  const kabul = [...soru.kabul];
  const lines = soru.satirlar.map((line) => {
    if (line === null) {
      if (!kabul.length) throw new Error("kabul yetersiz");
      return kabul.shift();
    }
    return line;
  });
  return lines.join("\n");
}

function normalize(text) {
  return text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (entry.name === "bin" || entry.name === "obj") continue;
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

function main() {
  const questions = collectQuestions(loadData());
  console.log(`${questions.length} soru bulundu`);

  // Gecici klasorde derle: repodaki tools/validator/Program.cs kirlenmesin.
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cnoir-validate-"));
  const project = path.join(tmp, "validator");
  copyDir(VALIDATOR_SRC, project);

  const failures = [];
  try {
    for (const [unit, soru] of questions) {
      let body;
      try {
        body = buildProgram(soru);
      } catch (error) {
        failures.push([unit, soru.id, String(error.message)]);
        continue;
      }

      fs.writeFileSync(
        path.join(project, "Program.cs"),
        WRAPPER.replace("{body}", body),
        "utf8",
      );

      const run = spawnSync(
        "dotnet",
        ["run", "--project", project, "--nologo", "-v", "q"],
        {
          encoding: "utf8",
          timeout: 180_000,
        },
      );

      if (run.status !== 0) {
        const first = (run.stderr || run.stdout || "")
          .trim()
          .split("\n")[0]
          .slice(0, 200);
        failures.push([unit, soru.id, `DERLEME HATASI: ${first}`]);
        continue;
      }
      if (normalize(run.stdout) !== normalize(soru.cikti)) {
        failures.push([
          unit,
          soru.id,
          `cikti uyusmuyor:\nbeklenen: ${JSON.stringify(soru.cikti)}\nalinan:   ${JSON.stringify(run.stdout)}`,
        ]);
      }
    }
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }

  if (failures.length) {
    console.error(`\n${failures.length} SORUN:`);
    for (const [unit, id, message] of failures)
      console.error(`  vaka ${unit}, id ${id}: ${message}`);
    process.exit(1);
  }
  console.log(
    `${questions.length} KOD TAMAMLA sorusu dotnet ile dogrulandi (gecici klasorde, repo kirletilmeden).`,
  );
}

main();
