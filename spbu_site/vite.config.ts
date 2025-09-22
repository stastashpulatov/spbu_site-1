import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      // Use browserslist from package.json by default
      // Add modern polyfills where needed
      modernPolyfills: true,
      renderModernChunks: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "tailwindcss";
        `
      }
    }
  }
})
