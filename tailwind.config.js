/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", './node_modules/tw-elements/dist/js/**/*.js'],
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
      menulight: "var(--menulight)",
      bluebut: "var(--bluebut)",
      blueline: "var(--blueline)",
      card: "var(--card)",
      cardtext: "var(--cardtext)",
      cardtext1: "var(--cardtext1)",
      cardtext2: "var(--cardtext2)",
      cardhov: "var(--cardhov)",
      cardgreen: "var(--cardgreen)",
      cardred: "var(--cardred)"
    },
    fontFamily:{
      "object":"object",
      "noto":"noto",
      "notobold":"notobold",
      "blizzard":"blizzard",
      "blizzard700":"blizzard700"
    }
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],
}
