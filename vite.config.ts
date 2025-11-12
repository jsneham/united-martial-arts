import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: 'https://jsneham.github.io/united-martial-arts/', // 👈 match your GitHub repo name exactly
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})