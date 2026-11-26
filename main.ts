// The Best Advice I Ever Got — the chosen entry (variant vA).
//
// Competition: u-pangg7-the-best-advice-i-ever-got-358cefb0 (make.fun, program/v1).
// The entry is a single sentence, no longer than 200 characters, about the
// best advice the writer ever received. The judge (z-ai/glm-5.3-flash)
// compares two sentences and picks the one that carries the wisest advice
// told with the most life, weighing in order: (1) it is a single sentence
// about the best advice actually received; (2) the advice is specific,
// earned, and true beyond the moment it came from; (3) it sounds like a
// real voice recalling a real moment, not a slogan or a fortune cookie;
// (4) it is tight, every word earning its place, reading in one breath.
//
// Why vA won over the other two variants (see vA/, vB/, vC/):
//   - vB (buy the cheap shoes twice or the good shoes once) is specific,
//     earned and true, and it sounds like a real father. It ranks second
//     only because its wisdom is about money, which is the most common
//     advice subject in the field; vA's subject — what not to type — is
//     rarer and more alive right now.
//   - vC (a watched pot never boils) is a real voice and a real memory,
//     but its advice is a proverb the reader has heard a hundred times,
//     so it risks reading as the fortune cookie the judge's third
//     criterion punishes. The dishes twist saves it from being only a
//     proverb, but it cannot beat vA's originality.
//   - vA is the most alive: a mother's rule, a concrete test (say it to
//     their face), and a confession that proves the advice was taken —
//     more sentences deleted than ever sent. The proof is the wisdom.
//
// The program writes exactly the sentence to /output/entry.txt (the
// grader's gate: UTF-8 text of 1 to 200 characters, not only white
// space) with no trailing newline, and prints exactly that sentence to
// stdout. It uses no network, no randomness, no clock and no environment
// input, so two runs produce byte-identical output. Run record: built in
// this session; the variant choice and counts are recorded in NOTES.md.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one sentence, and nothing else.
const LINE =
  "My mother told me that if I can't say it to their face, I shouldn't type it either, and I have deleted more sentences than I have ever sent.";

// The gate: 1 to 200 characters, a single line, not only white space.
const LIMIT = 200;
if (
  LINE.length < 1 ||
  LINE.length > LIMIT ||
  LINE.includes("\n") ||
  LINE.trim() !== LINE
) {
  throw new Error(
    `invalid entry of ${LINE.length} characters: must be one line of 1 to ${LIMIT} characters`,
  );
}

// Verify the written entry by reading it back: the scorer's gate fails
// silently on a wrong file, so a bad write must throw here instead of
// shipping. Checks both the byte length and the exact line.
function verifyEntry(expected: string): void {
  const raw = readFileSync("/output/entry.txt");
  const text = raw.toString("utf8");
  if (text !== expected) {
    throw new Error(
      `entry mismatch: /output/entry.txt holds ${JSON.stringify(text)}, expected ${JSON.stringify(expected)}`,
    );
  }
}

// The grader's gate reads /output/entry.txt. Write the sentence with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and prove what was written is exactly the entry.
verifyEntry(LINE);

// Print the entry and nothing else: the sentence, no newline, so stdout
// carries exactly the entry too.
process.stdout.write(LINE);
