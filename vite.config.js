import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // enables listening on 0.0.0.0
    allowedHosts: ['weatherapp-1-vspg.onrender.com'], // allow your Render hostname
    port: 5173, // optional, specify if needed
  }
})
