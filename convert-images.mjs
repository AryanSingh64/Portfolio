import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const targets = [
  'src/assets/Gitfix.png',
  'src/assets/Docfix.png',
  'src/assets/Wordlens.png',
  'src/assets/AetherEye.jpg',
  'src/workinprogress.png',
];

for (const file of targets) {
  const ext = extname(file);
  const outPath = file.replace(ext, '.webp');
  try {
    const info = await sharp(file).webp({ quality: 85 }).toFile(outPath);
    console.log(`✅ ${file} → ${outPath} (${(info.size / 1024).toFixed(1)} KB)`);
  } catch (e) {
    console.error(`❌ ${file}: ${e.message}`);
  }
}
console.log('\nDone!');
