import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { fileURLToPath } from "node:url"

export default defineConfig({
  plugins: [react()],
  server: {
    // Adicione esta parte com o link exato que o erro mostrou
    allowedHosts: [
      "vacant-slouching-luckless.ngrok-free.dev",
    ]
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
