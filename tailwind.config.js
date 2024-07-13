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
        "primary-dark": "#101928",
        "grey-400": "#98A2B3",
        "blue-50": "#F5F5FF",
        "blue-100": "#D9D8FD",
        "blue-500": "#5755FF",
        "green-500": "#00994D",
        "gray-600": "#475367",
        "red-500": "#D71D30",
        "gray-200": "#E4E7EC",
        "blue-300": "#5755FF",
        "blue-75": "#E8E7FE",
        "gray-300": "#D0D5DD",
        "gray-800": "#404753",
        "divider-black": "#D0D5DD",
      },
    },
  },
  plugins: [],
};
