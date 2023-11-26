import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import PWA_CONFIG from "./vite-pwa-config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(PWA_CONFIG)],
});
