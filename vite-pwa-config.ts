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
        src: "/logo.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "screenshots/d1.png",
        sizes: "1920x1080",
        form_factor: "wide",
        type: "image/png",
      },
      {
        src: "screenshots/d2.png",
        sizes: "1920x1080",
        form_factor: "wide",
        type: "image/png",
      },
      {
        src: "screenshots/p1.png",
        sizes: "828x1792",
        form_factor: "narrow",
        type: "image/png",
      },
      {
        src: "screenshots/p2.png",
        sizes: "828x1792",
        form_factor: "narrow",
        type: "image/png",
      },
    ],
    theme_color: "???",
  },
  workbox: {
    globPatterns: ["**/*.{png,svg,js,css,html}"],
  },
  devOptions: {
    enabled: true,
  },
};

export default PWA_CONFIG;
