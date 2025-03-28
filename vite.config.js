import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  publicDir: "../static/",
  base: "./", // ✅ Use relative paths for Netlify
  build: {
    outDir: "../dist",
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      three: "three", // ✅ Ensure proper module resolution
    },
  },
});
