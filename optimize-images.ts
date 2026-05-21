import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';

async function optimize() {
  console.log('--- Starting Image Optimization with Sharp ---');

  // 1. Optimize Hero Device Image (omix_device.avif)
  // Current: 2000x1439 (185.7 KB).
  // Target: max-width 850px, quality 65.
  const heroPath = path.join(PUBLIC_DIR, 'omix_device.avif');
  if (fs.existsSync(heroPath)) {
    console.log('Optimizing omix_device.avif...');
    const originalBuffer = fs.readFileSync(heroPath);
    const info = await sharp(originalBuffer).metadata();
    console.log(`Original: ${info.width}x${info.height}, size: ${originalBuffer.length} bytes`);
    
    const optimizedBuffer = await sharp(originalBuffer)
      .resize({ width: 850, withoutEnlargement: true })
      .avif({ quality: 65, effort: 5 }) // High effort for best compression
      .toBuffer();
    
    fs.writeFileSync(heroPath, optimizedBuffer);
    console.log(`Optimized: 850px max-width, size: ${optimizedBuffer.length} bytes (${Math.round((1 - optimizedBuffer.length / originalBuffer.length) * 100)}% reduction)`);
  }

  // 2. Optimize Activo Logo (activo_logo.png)
  // Current: 412x151 (30.2 KB). Display size: 120x40.
  // Target: width 240px, index colors, compressed.
  const activoPath = path.join(PUBLIC_DIR, 'activo_logo.png');
  if (fs.existsSync(activoPath)) {
    console.log('Optimizing activo_logo.png...');
    const originalBuffer = fs.readFileSync(activoPath);
    const optimizedBuffer = await sharp(originalBuffer)
      .resize({ width: 240 })
      .png({ quality: 80, palette: true, compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(activoPath, optimizedBuffer);
    console.log(`Optimized: 240px width, size: ${optimizedBuffer.length} bytes (${Math.round((1 - optimizedBuffer.length / originalBuffer.length) * 100)}% reduction)`);
  }

  // 3. Optimize DiFluid Logo (difluid_logo.png)
  // Current: 1387x300 (13.0 KB). Display size: 80x24.
  // Target: width 200px, indexed PNG.
  const difluidPath = path.join(PUBLIC_DIR, 'difluid_logo.png');
  if (fs.existsSync(difluidPath)) {
    console.log('Optimizing difluid_logo.png...');
    const originalBuffer = fs.readFileSync(difluidPath);
    const optimizedBuffer = await sharp(originalBuffer)
      .resize({ width: 200 })
      .png({ quality: 80, palette: true, compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(difluidPath, optimizedBuffer);
    console.log(`Optimized: 200px width, size: ${optimizedBuffer.length} bytes (${Math.round((1 - optimizedBuffer.length / originalBuffer.length) * 100)}% reduction)`);
  }

  // 4. Optimize App Interface (app_interface.png)
  // Current: 448x500 (~30KB+).
  // Target: Convert to highly compressed WebP/PNG, or resize/optimize PNG.
  const appInterfacePath = path.join(PUBLIC_DIR, 'app_interface.png');
  if (fs.existsSync(appInterfacePath)) {
    console.log('Optimizing app_interface.png...');
    const originalBuffer = fs.readFileSync(appInterfacePath);
    const info = await sharp(originalBuffer).metadata();
    console.log(`Original app_interface: ${info.width}x${info.height}, size: ${originalBuffer.length} bytes`);
    
    const optimizedBuffer = await sharp(originalBuffer)
      .resize({ width: 450 }) // Display size is ~448px, so 450 is perfect
      .png({ quality: 75, palette: true, compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(appInterfacePath, optimizedBuffer);
    console.log(`Optimized app_interface: width 450px, size: ${optimizedBuffer.length} bytes (${Math.round((1 - optimizedBuffer.length / originalBuffer.length) * 100)}% reduction)`);
  }

  // 5. Optimize Authorization Letter (auth_letter.png)
  // Current: 460x600 (very tall).
  // Target: Compress PNG to palette indexed.
  const authLetterPath = path.join(PUBLIC_DIR, 'auth_letter.png');
  if (fs.existsSync(authLetterPath)) {
    console.log('Optimizing auth_letter.png...');
    const originalBuffer = fs.readFileSync(authLetterPath);
    const info = await sharp(originalBuffer).metadata();
    console.log(`Original auth_letter: ${info.width}x${info.height}, size: ${originalBuffer.length} bytes`);
    
    const optimizedBuffer = await sharp(originalBuffer)
      .resize({ width: 460 })
      .png({ quality: 70, palette: true, compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(authLetterPath, optimizedBuffer);
    console.log(`Optimized auth_letter: width 460px, size: ${optimizedBuffer.length} bytes (${Math.round((1 - optimizedBuffer.length / originalBuffer.length) * 100)}% reduction)`);
  }

  console.log('--- Image Optimization Completed Successfully ---');
}

optimize().catch(err => {
  console.error('Error during image optimization:', err);
  process.exit(1);
});
