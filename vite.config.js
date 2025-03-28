import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  publicDir: "../static/",
  base: "./", // ✅ Fixes relative paths for Netlify
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    rollupOptions: {
      external: [], // ⚠️ REMOVE ["three"] here
    },
  },
  resolve: {
    alias: {
      three: "three", // ✅ Ensures Vite finds Three.js correctly
    },
  },
});
