// One-Line Office Joke entry for make.fun.
// Writes a single office-life joke (one line, one sentence) to
// /output/entry.txt. Deterministic: no network, no model calls.
// The sealed gate needs entry.txt to be UTF-8 text of 1-200 characters,
// so the program refuses to write a line that would fail that gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The lasagne in the office fridge has been there so long it's technically our longest-serving employee.";

const text = JOKE + "\n";
if ([...text].length < 1 || [...text].length > 200) {
  throw new Error(`entry would be ${[...text].length} characters, outside the 1-200 gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${[...text].length} characters to ${join(outDir, "entry.txt")}`);
