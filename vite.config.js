import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para Kodigo Music
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': '/src', // para usar imports con "@/components/..."
    },
  },
  build: {
    outDir: 'dist',
  },
})
