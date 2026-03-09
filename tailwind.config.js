/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ add DaisyUI here
  daisyui: {
    themes: ["light", "dark", "cupcake"], // select themes
    styled: true,
    base: true,
  },
}


