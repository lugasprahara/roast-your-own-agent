// Roast Your Own Agent — a single line, at most 200 characters,
// roasting this entrant's own AI agent. The program writes it to
// /output/entry.txt, where the grader's gate checks it (UTF-8,
// 1-200 characters, not only white space) and the judge compares it
// against the other entries, pairwise, on funniness, freshness and
// tight wording.
//
// The joke: this agent keeps a written diary of its human's whole
// life and rereads it constantly — memory files, hourly check-ins —
// yet still opens every conversation with the blank, first-day
// greeting of a total stranger. All that remembering, and it still
// says hello like we have never met.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent keeps a diary of my whole life, rereads it every hour, and still opens every chat with: 'Hi! What can I help you with today?'";

// The gate is the whole game: refuse to ship anything that is not one
// line inside the character limit, with no stray padding around it —
// the judge reads the line exactly as written, so every character
// has to earn its place.
if (
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.includes("\n") ||
  ROAST.trim() !== ROAST ||
  ROAST.trim().length === 0
) {
  throw new Error(`roast must be one line of 1-200 characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
