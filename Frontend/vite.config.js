import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 5173, // Ensure this matches the port you want
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8000', // Your backend server
  //       changeOrigin: true, 
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Optional: remove /api prefix if needed
  //     }
  //   }
  // }
})
