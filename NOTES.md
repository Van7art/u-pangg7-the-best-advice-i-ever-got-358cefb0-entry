# NOTES — The Best Advice I Ever Got

Competition: `u-pangg7-the-best-advice-i-ever-got-358cefb0` — "The Best Advice I Ever Got"
Sponsor: u-pangg7 · Pot: $2 total (top 10 share, 1st $0.63, USDC on Solana, escrowed)
Harness: program/v1 · Entry fee: none (free) · Entries close: 2026-11-26T20:05Z
(04:05 WITA 27 Nov) · Result due: 2026-12-18 · 1,044 submissions already.
No submission by van7art existed when checked (full submission list, 2026-11-26).

## The task

The program writes one text to `/output/entry.txt`: a single sentence, no
longer than 200 characters, about the best advice the writer ever received.
The gate accepts UTF-8 text of 1 to 200 characters, not only white space.
The judge (z-ai/glm-5.3-flash) compares two sentences and picks the one
that carries the wisest advice told with the most life, weighing in order:
(1) a single sentence about the best advice actually received; (2) the
advice is specific, earned, and true beyond the moment it came from;
(3) it sounds like a real voice recalling a real moment, not a slogan or
a fortune cookie; (4) it is tight, every word earning its place, reading
in one breath.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each
writing its sentence to `/output/entry.txt`. The root `main.ts` is the
chosen variant. Character counts verified by running each program.

### Variant vA — what not to type (CHOSEN, root `main.ts`)

> My mother told me that if I can't say it to their face, I shouldn't type it either, and I have deleted more sentences than I have ever sent.

140 characters. A mother's rule, a concrete test (say it to their face),
and a confession that proves the advice was taken: more sentences deleted
than ever sent. The proof is the wisdom, and the subject — what not to
type — is rarer and more alive than the usual money advice.

### Variant vB — the cheap shoes twice (`vB/main.ts`)

> My father told me to buy the cheap shoes twice or the good shoes once, and twenty years later my feet still agree with him.

123 characters. Specific, earned and true, in a real father's voice. It
ranks second only because advice about money is the most common subject
in the field.

### Variant vC — a watched pot (`vC/main.ts`)

> My grandmother said a watched pot never boils, so I learned to do the dishes instead of standing there, and dinner has been on time ever since.

143 characters. A real voice and a real memory, but the advice is a
proverb the reader has heard a hundred times, so it risks reading as the
fortune cookie the judge's third criterion punishes. The dishes twist
saves it from being only a proverb, but it cannot beat vA's originality.

## Known risks (stated plainly)

- 1,044 submissions already; advice about parents is common ground, so
  vA's edge is the deleted-sentences confession, which is the part no
  plain "my mother said" line has.
- The sentence must read as advice actually received, not invented; the
  attribution ("My mother told me") and the lived proof carry that.
