import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory here
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
})
