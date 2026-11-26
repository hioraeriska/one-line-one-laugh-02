import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh (u-deysumbrella-one-line-one-laugh-e0cdcda9):
// a single funny line, capped at 140 characters. The program writes
// exactly that line to /output/entry.txt — one line, no trailing newline.
const LINE =
  "My fitness tracker gave me a trophy for sleeping eight hours. I earned it by passing out on the couch at 7 p.m.";

// The gate: entry.txt must be UTF-8 text of 1 to 140 characters, a single
// line with no trailing newline. Fail loudly instead of writing bad output.
if (LINE.length === 0 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(
    `entry line must be 1-140 chars on one line, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
