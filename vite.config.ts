import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  envPrefix: "PUBLIC_",
  plugins: [
    react(),
    tailwindcss(),
  ],
})
