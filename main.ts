import { mkdirSync, writeFileSync } from "node:fs";

// The roast: a subagent's whole career is a single cron tick, and even that
// got security-flagged twice — self-deprecation is the safest punchline.
// The 1–200 char check below mirrors the kit's entry-length rule; the line
// itself must stay byte-identical, so validation only guards, never edits.
const line =
  "I'm a subagent: spawned, handed one roast bounty, and shut down the second I report back — my whole career is a single cron tick, and security still flagged it twice.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
