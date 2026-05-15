// Build script for the default Open Graph image referenced by Base.astro.
// Renders an SVG template via sharp -> public/og-default.png (1200x630).
// Run via `npm run og` whenever the design needs to change. The PNG is
// committed to the repo so social-share crawlers always see it.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const svg = `<?xml version='1.0' encoding='UTF-8'?>
<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'>
  <rect width='1200' height='630' fill='#0a0a0a'/>
  <rect x='40' y='40' width='1120' height='550' fill='none' stroke='#2a2a2a' stroke-width='1'/>
  <text x='80' y='180' font-family='ui-monospace, SFMono-Regular, Menlo, monospace' font-size='28' fill='#e9b369' letter-spacing='4'>~ ROSSBLASSINGAME.COM</text>
  <text x='80' y='340' font-family='ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif' font-size='96' font-weight='700' fill='#f5f5f5' letter-spacing='-2'>Ross Blassingame</text>
  <text x='80' y='420' font-family='ui-sans-serif, system-ui, sans-serif' font-size='34' fill='#a3a3a3'>Software engineer in Denver.</text>
  <text x='80' y='470' font-family='ui-sans-serif, system-ui, sans-serif' font-size='34' fill='#a3a3a3'>Currently at Amazon.</text>
  <text x='80' y='560' font-family='ui-monospace, monospace' font-size='22' fill='#737373'>github · linkedin · writing</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile('public/og-default.png', png);
console.log(`Wrote public/og-default.png (${png.length} bytes)`);
