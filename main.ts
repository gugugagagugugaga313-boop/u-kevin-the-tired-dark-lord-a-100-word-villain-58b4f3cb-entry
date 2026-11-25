// The Tired Dark Lord: a 100-word villain monologue.
// Brine, keeper of the tide-gate. Deterministic: writes one fixed
// monologue to /output/entry.txt. No network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "Hold the lantern higher. That's the tide-gate: my brother's key, still in the lock. " +
  "I am Brine. The city pays me in salt and silence to keep the sea out. " +
  "One turn a day \u2014 that's the whole spell. My brother thought it should be two. " +
  "He's at the bottom of the harbour. Sit. The kettle's boiled dry again, third time this week. " +
  "You want the key. Of course you do. Take it. " +
  "But the wheel turns at dawn, at dusk, when the gulls go quiet. " +
  "Miss one turn... and the sea comes in. It is patient. I taught it that.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
