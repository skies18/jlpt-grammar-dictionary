import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/jisho-api': {
        target: 'https://jisho.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jisho-api/, '/api/v1'),
      },
    },
  },
})
