/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chBlue: "hsl(223, 87%, 63%)",
        chPaleBlue: "hsl(223, 100%, 88%)",
        chLightRed: "hsl(354, 100%, 66%)",
        chGray: "hsl(0, 0%, 59%)",
        cVeryDarkBlue: "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: [],
};
