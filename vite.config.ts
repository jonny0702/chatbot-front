/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from 'vitest/config'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["src/setupTest.ts"],
    exclude: [...configDefaults.exclude, "shared/*"],
  },
});
