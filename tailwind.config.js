/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monse: "'Montserrat', sans-serif;",
      },
      colors: {
        greenColor: "#27AE60",
        grayColor: "#828282",
        cardColor: "#212121",
        bgColor: "#171717",
        menuColor: "#172554",
      },
      backgroundImage: {
        openMenu: "url('./assets/menu.svg')",
        closeMenu: " url('./assets/menurigth.svg')",
      },
    },
  },
  plugins: [],
};
