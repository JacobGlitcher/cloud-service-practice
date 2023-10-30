import "vuetify/styles"

// Vuetify
import { createVuetify } from "vuetify"
import components from "./vuetify.labs.components.js"
import { fa } from "vuetify/iconsets/fa"
import { aliases, mdi } from "vuetify/lib/iconsets/mdi"

let defaultTheme = "light"

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components,

  theme: {
    defaultTheme,
  },

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
})
