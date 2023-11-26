import { VitePWAOptions } from "vite-plugin-pwa";

const PWA_CONFIG: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  manifest: {
    name: "React SPA Template",
    short_name: "React SPA",
    description: "React Single Page Application Template by krish.fyi",
    start_url: "/",
    icons: [
      {
        src: "/vite.svg",
        sizes: "144x144",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
    theme_color: "???",
  },
  workbox: {
    globPatterns: ["**/*.{svg,js,css,html}"],
  },
  devOptions: {
    enabled: true,
  },
};

export default PWA_CONFIG;
