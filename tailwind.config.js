/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  // darkMode:"class",
  theme: { 
    extend: {},
    colors: {
      body: "var(--body)",
      navhov: "var(--navhov)",
      menuhov: "var(--menuhov)",
      menutext: "var(--menutext)",
      dropmenu: "var(--dropmenu)",
      dropmenuhov: "var(--dropmenuhov)",
      menuborder: "var(--menuborder)",
      menulight: "var(--menulight)"
    },
    fontFamily:{
      "object":"object",
      "noto":"noto",
      "notobold":"notobold",
      "blizzard":"blizzard",
      "blizzard700":"blizzard700"
    }
  },
  plugins: [require("daisyui")],
}
