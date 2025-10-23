const fs = require('fs');
const path = require('path');

function walk(dir, exts, files = []) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of dirents) {
    const res = path.resolve(dir, d.name);
    if (d.isDirectory()) walk(res, exts, files);
    else if (exts.includes(path.extname(d.name))) files.push(res);
  }
  return files;
}

function extractClassesFromFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const re = /className\s*=\s*["'`]([^"'`]+)["'`]/g;
  const matches = content.matchAll(re);
  const tokens = new Set();
  for (const m of matches) {
    const classes = m[1].split(/\s+/).map(s => s.trim()).filter(Boolean);
    for (const c of classes) tokens.add(c);
  }
  return Array.from(tokens);
}

function getCssSelectors(cssPath) {
  const css = fs.readFileSync(cssPath, 'utf8');
  const re = /\.(?![0-9])(\\\\.|[A-Za-z0-9_:\/\\-\\[\\]\\(\\)\\%\\\.#]+)\b/g;
  const sels = new Set();
  let m;
  while ((m = re.exec(css)) !== null) {
    let sel = m[1];
    // unescape backslashes
    sel = sel.replace(/\\\\/g, "\\");
    // stop at first non-class char like :, space
    sel = sel.split(/[:\s>+~]/)[0];
    sels.add(sel);
  }
  return sels;
}

const srcDir = path.resolve(__dirname, '..', 'src');
const cssPath = path.resolve(__dirname, '..', 'src', 'index.css');
const exts = ['.ts', '.tsx', '.js', '.jsx', '.html'];

const files = walk(srcDir, exts);
const allTokens = new Set();
for (const f of files) {
  const toks = extractClassesFromFile(f);
  toks.forEach(t => allTokens.add(t));
}

const cssSels = getCssSelectors(cssPath);

const missing = [];
for (const t of Array.from(allTokens).sort()) {
  // normalize token for css lookup: escape special chars with backslash
  const norm = t.replace(/([\\\./\[\]():%\\])/g, match => `\\${match}`);
  if (!cssSels.has(norm) && !cssSels.has(t)) missing.push(t);
}

console.log(JSON.stringify({ totalClasses: allTokens.size, missingCount: missing.length, missing }, null, 2));

