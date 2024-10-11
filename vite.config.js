import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/instituciones': {
        target: 'http://localhost:8080', // URL del backend
        changeOrigin: true,
      },
    },
  },
})
