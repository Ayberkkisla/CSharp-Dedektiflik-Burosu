import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";
const c = vm.createContext({});
c.window = c;
vm.runInContext(
  fs.readFileSync(
    new URL("../assets/c-final-cases.js", import.meta.url),
    "utf8",
  ),
  c,
);
test("final 21 ve 22 normal vakalarla aynı küçük kart yuvalarını kullanır", () => {
  const p = c.CBoardPlacements([...Array(20).fill(false), true, true], 3);
  assert.equal(p[19].row, 7);
  assert.equal(p[19].column, "2");
  assert.equal(p[20].row, 7);
  assert.equal(p[21].row, 8);
  assert.equal(p[20].column, "3");
  assert.equal(p[21].column, "3");
});
test("dar ve geniş panoda final kartları tek hücre kaplar ve üst üste binmez", () => {
  for (const columns of [1, 2, 3, 4, 5])
    for (const flags of [
      [...Array(20).fill(false), true, true],
      [false, true, false, false, true, false],
    ]) {
      const positions = c.CBoardPlacements(flags, columns),
        cells = new Set();
      positions.forEach((p, i) => {
        const cols = [Number(p.column)];
        for (const col of cols) {
          assert.ok(col >= 1 && col <= columns);
          const cell = p.row + ":" + col;
          assert.ok(!cells.has(cell), "Kartlar üst üste binmemeli");
          cells.add(cell);
        }
      });
    }
});
test("final kapakları normal 480/210 oranında; iki farklı animasyon ve durgun sürüm var", () => {
  const art = (name) =>
    fs.readFileSync(
      new URL("../assets/case-loops/c-final-" + name + ".svg", import.meta.url),
      "utf8",
    );
  for (const name of ["single", "double"]) {
    assert.match(art(name), /viewBox="0 0 480 210"/);
    assert.match(art(name), /@keyframes/);
    assert.match(art(name + "-still"), /animation:none!important/);
  }
  assert.match(art("single"), /Yeni delil/);
  assert.match(art("double"), /Komşuları/);
});
test("normal vakaların mevcut kıvrılan sırası değişmez", () => {
  for (const columns of [1, 2, 3, 4])
    c.CBoardPlacements(Array(20).fill(false), columns).forEach((p, i) => {
      const row = Math.floor(i / columns);
      assert.equal(p.row, row + 1);
      assert.equal(
        p.column,
        String(row % 2 ? columns - (i % columns) : (i % columns) + 1),
      );
    });
});
