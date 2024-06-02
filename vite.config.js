import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src' // This alias maps "@" to the "src" directory
    }
  },
  base: "/Portfolio",
})

