import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['apple-touch-icon.png', 'pwa-192x192.png', 'pwa-512x512.png'],
        manifest: {
          id: '/',
          name: 'PowerDrive Bearings - Sasi Automobiles',
          short_name: 'PowerDrive',
          description: 'Official PowerDrive Bearings catalog & direct WhatsApp ordering by Sasi Automobiles.',
          theme_color: '#002244',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        devOptions: {
          enabled: false,
          type: 'module',
        },
      }),
      {
        name: 'serve-optimized-images',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (!req.url) return next();
            const decoded = decodeURIComponent(req.url);

            const handleImageServe = (folderName: string, prefix: string) => {
              const cleanUrl = decoded.split('?')[0];
              const fileName = cleanUrl.replace(prefix, '');
              const baseName = fileName.replace(/\.(webp|png|jpg|jpeg)$/i, '');

              // Check webp first
              const webpCandidates = [
                path.join(__dirname, 'public', folderName, baseName + '.webp'),
              ];
              for (const p of webpCandidates) {
                if (fs.existsSync(p)) {
                  const stat = fs.statSync(p);
                  if (stat.isFile()) {
                    const etag = `W/"${stat.size}-${stat.mtimeMs}"`;
                    if (req.headers['if-none-match'] === etag) {
                      res.statusCode = 304;
                      res.end();
                      return true;
                    }
                    res.setHeader('Content-Type', 'image/webp');
                    res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
                    res.setHeader('ETag', etag);
                    res.setHeader('Last-Modified', stat.mtime.toUTCString());
                    fs.createReadStream(p).pipe(res);
                    return true;
                  }
                }
              }

              // Fallback to original
              const origCandidates = [
                path.join(__dirname, 'public', folderName, fileName),
              ];
              for (const p of origCandidates) {
                if (fs.existsSync(p)) {
                  const stat = fs.statSync(p);
                  if (stat.isFile()) {
                    const etag = `W/"${stat.size}-${stat.mtimeMs}"`;
                    if (req.headers['if-none-match'] === etag) {
                      res.statusCode = 304;
                      res.end();
                      return true;
                    }
                    const ext = path.extname(fileName).toLowerCase();
                    const cType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
                    res.setHeader('Content-Type', cType);
                    res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
                    res.setHeader('ETag', etag);
                    res.setHeader('Last-Modified', stat.mtime.toUTCString());
                    fs.createReadStream(p).pipe(res);
                    return true;
                  }
                }
              }
              return false;
            };

            if (decoded === '/robots.txt') {
              const robotsPath = path.join(__dirname, 'public', 'robots.txt');
              if (fs.existsSync(robotsPath)) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.setHeader('Cache-Control', 'public, max-age=86400');
                fs.createReadStream(robotsPath).pipe(res);
                return;
              }
            }
            if (decoded === '/sitemap.xml') {
              const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
              if (fs.existsSync(sitemapPath)) {
                res.setHeader('Content-Type', 'application/xml; charset=utf-8');
                res.setHeader('Cache-Control', 'public, max-age=86400');
                fs.createReadStream(sitemapPath).pipe(res);
                return;
              }
            }

            if (decoded.startsWith('/products images/') || req.url.startsWith('/products%20images/')) {
              if (handleImageServe('products images', '/products images/')) return;
            }
            if (decoded.startsWith('/web images/') || req.url.startsWith('/web%20images/')) {
              if (handleImageServe('web images', '/web images/')) return;
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      fs: {
        allow: ['.', 'products images'],
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
