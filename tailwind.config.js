/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
