import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const FOLDERS = [
  { input: './src/assets',   output: './src/assets/optimized' },
  { input: './src/cardapio', output: './src/cardapio/optimized' },
];

for (const { input, output } of FOLDERS) {
  mkdirSync(output, { recursive: true });

  const images = readdirSync(input).filter(f =>
    ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
  );

  for (const file of images) {
    const name = basename(file, extname(file));
    const outPath = join(output, `${name}.webp`);
    await sharp(join(input, file))
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`✓ ${file} → ${name}.webp`);
  }
}

console.log('\nPronto! Substitua as referências nos componentes pelas versões em /optimized/');