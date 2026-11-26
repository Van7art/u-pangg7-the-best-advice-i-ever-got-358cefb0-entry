// u-pangg7-the-best-advice-i-ever-got-358cefb0 — variant vA (CHOSEN)
// A mother's rule about what not to type, proved by the confession that
// more sentences were deleted than ever sent. The proof is the wisdom.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My mother told me that if I can't say it to their face, I shouldn't type it either, and I have deleted more sentences than I have ever sent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
