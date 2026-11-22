import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// GitHub Pages serves from /<repo>/, Cloudflare Pages serves from the domain root.
// BASE_PATH overrides both when a deploy target needs something else.
const githubPagesBase = `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''}/`

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // The site is static content plus localStorage state, so a new build can
      // take over silently without asking the reader to reload.
      registerType: 'autoUpdate',
      // The glob below already precaches every icon, so skip the extra copies.
      includeManifestIcons: false,
      manifest: {
        // Relative URLs keep the manifest valid on the domain root and under
        // the GitHub Pages repository subpath.
        id: './',
        start_url: './',
        scope: './',
        name: 'Studyroom — Class 11, Class 12 and Certification',
        short_name: 'Studyroom',
        description: 'A thoughtful, self-paced learning hub for Class 11, Class 12 and a professional certification.',
        lang: 'en',
        display: 'standalone',
        background_color: '#f7f7f4',
        theme_color: '#f7f7f4',
        categories: ['education', 'productivity'],
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        ],
      },
      workbox: {
        // Every lesson, image and font is small enough to precache in full, so
        // the whole library reads offline, not just the pages already visited.
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,webp,woff,woff2}'],
        // Every lesson is bundled into the main chunk (~2.5 MB), so the default
        // 2 MiB precache ceiling would skip the app shell entirely.
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  base: process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS ? githubPagesBase : '/'),
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const path = id.replaceAll('\\', '/')
          if (!path.includes('/node_modules/')) return
          if (/\/(katex|react-markdown|rehype-|remark-|micromark|mdast|hast-|unist|vfile|zwitch|devlop|bail|ccount|comma-separated-tokens|space-separated-tokens|property-information|decode-named-character-reference|character-entities|longest-streak|markdown-table|trim-lines|extend|is-plain-obj)(\/|$)/.test(path)) return 'markdown-vendor'
          if (/\/react(-dom)?(\/|$)|\/scheduler(\/|$)/.test(path)) return 'react-vendor'
        },
      },
    },
  },
})
