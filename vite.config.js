import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/mernecommerce",
  server: {
    open: true,
    port: 8080,
  },
})
