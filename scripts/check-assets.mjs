import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';
const git = args => execFileSync('git', args, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
const files = git(['ls-files', '-z']).split('\0').filter(Boolean);
for (const file of files) {
  if (/\.(mp4|gif|png|jpg|jpeg)$/i.test(file) && statSync(file).size > 8 * 1024 * 1024) throw Error(`Asset exceeds 8 MiB: ${file}`);
}
let base = process.env.ASSET_BASE;
if (base) {
  try { git(['cat-file', '-e', `${base}^{commit}`]); }
  catch {
    // An amended single maintenance commit leaves event.before unreachable in a
    // fresh clone. Check all additions against its retained parent instead.
    base = git(['rev-parse', 'HEAD^']).trim();
    console.log('Previous push object is unavailable; checking the retained commit parent.');
  }
  for (const file of git(['diff', '--name-only', '--diff-filter=A', base, 'HEAD']).trim().split('\n')) {
    if (/\.(mp4|gif)$/i.test(file)) throw Error(`Publish new video externally: ${file}`);
  }
}
console.log('Asset policy passed');
