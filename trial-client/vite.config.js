import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ship sourcemaps so a production error reports real component names
    // instead of minified single letters.
    sourcemap: true,
  },
})
