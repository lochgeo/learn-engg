import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from /<repo>/, Cloudflare Pages serves from the domain root.
// BASE_PATH overrides both when a deploy target needs something else.
const githubPagesBase = `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''}/`

export default defineConfig({
  plugins: [react()],
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
