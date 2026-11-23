// news-image-20261123-bindu — entrypoint (Node 22, standard library only).
//
// Writes the front-page image for Monday 23 November 2026 to the output
// directory. The image is shipped in this repository as entry.png; the
// program simply copies it, so it needs no network and every run produces
// byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
