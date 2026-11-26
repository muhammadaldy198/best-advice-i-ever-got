// One sentence, 188 characters: the best advice I ever got.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A stranger on the last train home, seeing me rehearse an apology into my phone, said to send it before my stop came, and the apology I sent that night saved a friendship I had written off.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
