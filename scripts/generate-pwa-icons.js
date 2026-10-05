import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let crc = 0 ^ -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const typeAndData = buf.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

function generatePNG(width, height, isMaskable = false) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // bit depth 8
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);
  const ihdr = createChunk('IHDR', ihdrData);

  // Raw uncompressed scanlines: each row has 1 filter byte (0) + width * 4 bytes
  const rowStride = 1 + width * 4;
  const rawData = Buffer.alloc(rowStride * height);

  const cx = width / 2;
  const cy = height / 2;
  const scale = isMaskable ? 0.72 : 0.85;
  const rMax = (width / 2) * scale;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowStride;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Default background: Premium Deep Navy
      let r = 0x00;
      let g = 0x22;
      let b = 0x44;
      let a = 0xff;

      // Outer border subtle glow on deep navy
      if (!isMaskable) {
        // Rounded app corner or full circle
        const cornerR = width * 0.22;
        const cdx = Math.max(0, Math.abs(x - cx) - (cx - cornerR));
        const cdy = Math.max(0, Math.abs(y - cy) - (cy - cornerR));
        if (cdx * cdx + cdy * cdy > cornerR * cornerR) {
          a = 0; // transparent outside rounded squircle
        }
      }

      if (a > 0) {
        // Bearing outer ring
        const rOuterRingOut = rMax;
        const rOuterRingIn = rMax * 0.84;
        // Bearing inner ring
        const rInnerRingOut = rMax * 0.52;
        const rInnerRingIn = rMax * 0.36;
        // Center shaft hole
        const rBore = rMax * 0.24;

        if (dist <= rOuterRingOut && dist >= rOuterRingIn) {
          // Metallic chrome outer race
          const angle = Math.atan2(dy, dx);
          const shine = (Math.sin(angle * 3) + 1) * 0.25 + 0.5;
          r = Math.floor(190 * shine + 40);
          g = Math.floor(210 * shine + 45);
          b = Math.floor(235 * shine + 50);
        } else if (dist < rOuterRingIn && dist > rInnerRingOut) {
          // Ball groove area: 8 precision steel balls
          const trackR = (rOuterRingIn + rInnerRingOut) / 2;
          const ballR = (rOuterRingIn - rInnerRingOut) * 0.46;
          let inBall = false;

          for (let i = 0; i < 8; i++) {
            const ballAngle = (i * Math.PI) / 4;
            const bx = cx + trackR * Math.cos(ballAngle);
            const by = cy + trackR * Math.sin(ballAngle);
            const bDist = Math.sqrt((x - bx) * (x - bx) + (y - by) * (y - by));

            if (bDist <= ballR) {
              inBall = true;
              // 3D sphere gradient highlight
              const normDist = bDist / ballR;
              const sphereShine = Math.max(0, 1 - normDist * 1.1);
              r = Math.min(255, Math.floor(210 + 45 * sphereShine));
              g = Math.min(255, Math.floor(220 + 35 * sphereShine));
              b = Math.min(255, Math.floor(240 + 15 * sphereShine));
              break;
            }
          }

          if (!inBall) {
            // Ball cage brass / amber tone
            r = 0x05;
            g = 0x14;
            b = 0x28;
          }
        } else if (dist <= rInnerRingOut && dist >= rInnerRingIn) {
          // Metallic chrome inner race
          const angle = Math.atan2(dy, dx);
          const shine = (Math.cos(angle * 2) + 1) * 0.25 + 0.5;
          r = Math.floor(180 * shine + 50);
          g = Math.floor(205 * shine + 50);
          b = Math.floor(230 * shine + 55);
        } else if (dist < rInnerRingIn && dist >= rBore) {
          // Inner hub chamfer
          r = 0x00;
          g = 0x71;
          b = 0xe3; // Apple accent electric blue
        } else if (dist < rBore) {
          // Bore center hole
          r = 0x00;
          g = 0x15;
          b = 0x2e;
        }
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData, { level: 9 });
  const idat = createChunk('IDAT', deflated);
  const iend = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

const publicDir = path.join(process.cwd(), 'public');
fs.mkdirSync(publicDir, { recursive: true });

// 1. 192x192
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), generatePNG(192, 192, false));
console.log('Created pwa-192x192.png');

// 2. 512x512
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), generatePNG(512, 512, false));
console.log('Created pwa-512x512.png');

// 3. Maskable 512x512 (with safe zone margins)
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), generatePNG(512, 512, true));
console.log('Created pwa-maskable-512x512.png');

// 4. Apple Touch Icon 180x180
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), generatePNG(180, 180, false));
console.log('Created apple-touch-icon.png');
