import fs from 'fs/promises';
import path from 'path';

const srcDir = 'd:/austex/austex-pharma/src';

const localImages = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg',
  '/images/banner4.jpg',
  '/images/banner5.jpg',
  '/images/About.jpg',
  '/images/service.jpg'
];

let imgIndex = 0;
function getNextLocalImage() {
  const img = localImages[imgIndex];
  imgIndex = (imgIndex + 1) % localImages.length;
  return img;
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = await fs.readFile(fullPath, 'utf8');
      if (content.includes('unsplash.com')) {
        const regex = /"https:\/\/images\.unsplash\.com\/[^"]+"/g;
        content = content.replace(regex, () => `"${getNextLocalImage()}"`);
        await fs.writeFile(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir).catch(console.error);
