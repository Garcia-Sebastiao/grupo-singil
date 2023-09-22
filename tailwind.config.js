/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: "poppinsLight",
        poppins: "poppins",
        poppinsMedium: "poppinsMedium",
        poppinsSemiBold: "poppinsSemiBold",
        poppinsBold: "poppinsBold",
      },
      colors: {
        "primary-color": "#004a9f",
        "secondary-color": "#52565e",
        "primary-text": "#222",
      },
      screens: {
        xs: "320px",
        sm: "414px",
        md: "640px",
        lg: "1000px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
