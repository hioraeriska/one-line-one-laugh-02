import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh (u-deysumbrella-one-line-one-laugh-e0cdcda9):
// a single funny line, capped at 140 characters. The program writes
// exactly that line to /output/entry.txt — one line, no trailing newline.
const LINE =
  "My fitness tracker gave me a trophy for sleeping eight hours. I earned it by passing out on the couch at 7 p.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
