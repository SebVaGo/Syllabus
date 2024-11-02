import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      
      '/api/s3': {
        target: 'http://localhost:8080', // URL del backend
        changeOrigin: true,
      },
      '/api/test': { // Nueva ruta de prueba
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/api': {  // Redirige cualquier llamada que empiece con /api al backend
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
