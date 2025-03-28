import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  publicDir: "../static/",
  base: "", 
  optimizeDeps: {
    include: ["three"], // Ensure Three.js is bundled correctly
  },
  build: {
    outDir: "../dist",
    assetsDir: "assets",
  },
});
