// File: vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "client", // replace with your frontend code dir
  plugins: [
    react() // replace with your plugin
  ],
});
