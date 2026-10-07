"""Doğru cevap parçalarıyla her KOD TAMAMLA sorusunu dotnet ile derler ve
çıktısının `cikti` alanıyla eşleştiğini doğrular.

Kullanım: python scripts/validate_questions.py
"""

import json
import os
import re
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(ROOT, "data.js")
PROJ = os.path.join(ROOT, "tools", "validator")

WRAPPER = """using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
Console.OutputEncoding = Encoding.UTF8;
{body}
"""


def load_questions():
    text = open(DATA_JS, encoding="utf-8").read()
    out = []

    i = text.index("var KODTAMAMLALAR")
    dersler_text = text[:i]
    m = re.match(r"\s*var DERSLER\s*=\s*(.*);?\s*$", dersler_text, re.S)
    if not m:
        raise RuntimeError("DERSLER bulunamadı")
    dersler = json.loads(m.group(1).rstrip().rstrip(";"))
    for ders in dersler:
        for soru in ders.get("sorular", []):
            if soru.get("tip") == "bosluk" and "satirlar" in soru and "kabul" in soru and "cikti" in soru:
                out.append((ders.get("n"), soru))

    m2 = re.search(r"var KODTAMAMLALAR\s*=\s*(\{.*\});?\s*$", text, re.S)
    if not m2:
        raise RuntimeError("KODTAMAMLALAR bulunamadı")
    havuz = json.loads(m2.group(1))
    for unit, sorular in havuz.items():
        for soru in sorular:
            if soru.get("tip") == "bosluk" and "satirlar" in soru and "kabul" in soru and "cikti" in soru:
                out.append((unit, soru))
    return out


def build_program(soru):
    kabul = list(soru["kabul"])
    lines = []
    for line in soru["satirlar"]:
        if line is None:
            if not kabul:
                raise RuntimeError("kabul yetersiz")
            lines.append(kabul.pop(0))
        else:
            lines.append(line)
    return "\n".join(lines)


def normalize(s):
    return "\n".join(l.rstrip() for l in s.replace("\r\n", "\n").strip().split("\n")).strip()


def main():
    questions = load_questions()
    print(f"{len(questions)} soru bulundu")
    failures = []
    for ders_n, soru in questions:
        try:
            body = build_program(soru)
        except RuntimeError as e:
            failures.append((ders_n, soru.get("id"), str(e)))
            continue
        program = WRAPPER.format(body=body)
        prog_path = os.path.join(PROJ, "Program.cs")
        with open(prog_path, "w", encoding="utf-8", newline="\n") as f:
            f.write(program)
        proc = subprocess.run(
            ["dotnet", "run", "--project", PROJ, "--nologo", "-v", "q"],
            capture_output=True, text=True, encoding="utf-8", errors="replace",
            timeout=180,
        )
        if proc.returncode != 0:
            failures.append((ders_n, soru.get("id"), "DERLEME HATASI: " + proc.stderr.strip().split("\n")[0][:200]))
            continue
        if normalize(proc.stdout) != normalize(soru["cikti"]):
            failures.append((ders_n, soru.get("id"), f"çıktı uyuşmuyor:\nbeklenen: {soru['cikti']!r}\nalınan: {proc.stdout!r}"))

    if failures:
        print(f"\n{len(failures)} SORUN:")
        for d, i, msg in failures:
            print(f"  ders {d}, id {i}: {msg}")
        sys.exit(1)
    print("Tüm sorular dotnet ile doğrulandı.")


if __name__ == "__main__":
    main()
