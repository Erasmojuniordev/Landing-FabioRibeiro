import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    // Adicione esta parte com o link exato que o erro mostrou
    allowedHosts: [
      'vacant-slouching-luckless.ngrok-free.dev'
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})