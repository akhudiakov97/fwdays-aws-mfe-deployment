import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "movies",
      filename: "moviesRemoteEntry.js",
      exposes: {
        "./Movies": "./src/App.tsx",
      },
      shared: ["react", "react-dom", "zustand", "axios"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
