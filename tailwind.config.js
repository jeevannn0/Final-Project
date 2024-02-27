module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_19: "#ffffff19", A700_33: "#ffffff33", A700_54: "#ffffff54" },
        light_blue: { 500: "#009bff" },
        gray: { 100: "#f4f4f4", 500: "#a1a1aa", 600: "#808080", 900: "#18181b", "800_6d": "#3d3d3d6d" },
        black: { 900: "#000000", "900_7f": "#0000007f", "900_87": "#00000087" },
        red: { 400: "#d9534f", A700: "#ff0000" },
        blue: { A400: "#1977f3" },
        deep_orange: { A700: "#e82a00" },
      },
      boxShadow: { xs: "0px 13px  17px 0px #00000019" },
      fontFamily: { inter: "Inter", opensans: "Open Sans", lato: "Lato", roboto: "Roboto" },
      opacity: { 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
