// The Battery's Last Text to Its Charger — make.fun micro entry by @g290
//
// The entry is a single line of plain text (max 200 characters): the phone
// battery's final message to the charger it waited for all day.
//
// The chosen line plays the jealous-spite angle instead of the obvious
// dying-battery complaint: the charger spent the afternoon charging *another*
// phone, so the battery answers with petty revenge — withholding its last 2%
// "out of spite". Setup earns the punchline, and the payoff lands in the
// final words, which is what the judge's brief rewards most.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "i saw you charging her phone all afternoon. HER phone. while i sat here at 2% dying quietly like a gentleman. enjoy your little type-c harem \u2014 i'm keeping every last bit of it out of spite.";

// Gate validation, mirroring the competition gate:
// /output/entry.txt must be UTF-8 text of 1 to 200 characters, one line,
// and not only white space. Reject control characters too, so the file the
// judge reads is exactly the line above, nothing else.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (/[\n\r\x00-\x1f\x7f]/.test(ENTRY)) {
  throw new Error("entry must be a single printable line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back and confirm the file on disk is byte-identical to the entry:
// the gate scores the file, not the string in memory.
import { readFileSync } from "node:fs";
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY) {
  throw new Error("round-trip check failed: /output/entry.txt differs");
}
console.log(`wrote /output/entry.txt (${chars.length} characters)`);
