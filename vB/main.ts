// u-pangg7-the-best-advice-i-ever-got-358cefb0 — variant vB
// Buy the cheap shoes twice or the good shoes once. Specific, earned and
// true, in a real father's voice; second only because money advice is the
// most common subject in the field.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My father told me to buy the cheap shoes twice or the good shoes once, and twenty years later my feet still agree with him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
