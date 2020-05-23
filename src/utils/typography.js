import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
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
      name: "Roboto Slab",
      styles: [],
    },
  ],
  headerFontFamily: ["Libre Caslon Text"],
  bodyFontFamily: ["Roboto Slab", "serif"],
})

export default typography
