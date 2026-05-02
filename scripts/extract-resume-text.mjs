import fs from "node:fs";

import { PDFParse } from "pdf-parse";

const buf = fs.readFileSync(new URL("../public/resume.pdf", import.meta.url));
const parser = new PDFParse({ data: new Uint8Array(buf) });

try {
  const { text } = await parser.getText();
  console.log(text ?? "");
} finally {
  await parser.destroy();
}
