import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: "Libre Caslon Text",
      styles: [],
    },
    {
      name: "Inter",
      styles: [],
    },
    {
      name: "Roboto",
      styles: [],
    },
  ],
  headerFontFamily: ["Inter"],
  bodyFontFamily: ["Roboto", "serif"],
})

export default typography
