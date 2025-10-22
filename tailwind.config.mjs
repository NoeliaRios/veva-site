/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lilac: "#d7bded",
        crema: "#fff0e5",
        naranja: "#fdd6a7",
        rosaBebe: "#ffbcf8",
        rosaChicle: "#f795ae",
        lila: "#d9cfe8",
        verdeAgua: "#bfe0d3",
        celeste: "#bae1f6",
        charcoal: "#36454F",
        turquesa: "#2fc7d9",
      },
      fontFamily: {
        openSans: ["Open Sans Variable", "sans-serif"],
        montserrat: ["Montserrat Variable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cabin: ["Cabin Variable", "sans-serif"],
        outfit: ["Outfit Variable", "sans-serif;"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
