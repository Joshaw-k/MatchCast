import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export default defineConfig({
  build: {
    target: "esnext",
    rollupOptions: {},
  },
  define: {
    // Stringify the process.env variables to ensure they are properly injected into the code
    "process.env": JSON.stringify(process.env),
  },
  plugins: [react()],
});
