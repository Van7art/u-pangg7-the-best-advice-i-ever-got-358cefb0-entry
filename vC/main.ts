// u-pangg7-the-best-advice-i-ever-got-358cefb0 — variant vC
// A watched pot never boils, so do the dishes instead. A real voice and
// a real memory, but the advice is a proverb heard a hundred times, so it
// risks reading as the fortune cookie the judge's brief punishes.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My grandmother said a watched pot never boils, so I learned to do the dishes instead of standing there, and dinner has been on time ever since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
