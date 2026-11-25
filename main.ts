const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'entry.txt'),
  // The joke is that “no blockers” sounds like a rehearsed excuse.
  "Our standup is just nine people saying 'no blockers' in the same tone you'd say 'the cheque is in the mail'.\n",
  'utf8'
);
