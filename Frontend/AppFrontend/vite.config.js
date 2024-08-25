import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Store-Frontned",
  server: {
    proxy: {
      "/api": "https://store-raiting-project.onrender.com",
    },
  },
});
