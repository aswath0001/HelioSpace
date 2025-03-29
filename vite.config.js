import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  publicDir: "../static/",
  base: "./", // ✅ Fixes relative paths for Netlify
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    rollupOptions: {
      external: [],
    },
  },
  resolve: {
    alias: {
      three: "three",
    },
  },
});
