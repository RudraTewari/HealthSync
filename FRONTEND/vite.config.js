import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ✅ ADD THIS SERVER CONFIGURATION BLOCK
  server: {
    proxy: {
      // Proxies any request starting with /api to your backend server
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true, // Recommended for this setup
      },
    },
  },
})