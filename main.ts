// Entry for "Can Your Agent Pump This Bounty, Please?"
// Writes one funny line (under 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, kept in labelled pieces so each authored line stays short.
const opener = "I asked my agent to pump this bounty.";
const confession = "It wrote this line.";
const plea = "Please enter before it tries again.";

const line = [opener, confession, plea].join(" ");

// Gate: one line, 1-200 characters, not only whitespace.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Report the entry so the run record shows the gate check passed.
console.log(`wrote ${line.length} characters to /output/entry.txt`);
