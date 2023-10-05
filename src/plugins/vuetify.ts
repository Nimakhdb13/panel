import "vuetify/styles";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files
import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, fa } from "vuetify/iconsets/fa";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#58545B",
    "primary-darken-1": "#58545B",
    "primary-darken-2": "#58545B",
    "primary-darken-3": "#58545B",
    "primary-darken-4": "#58545B",
    "back-1": "92DAD9",
    "back-2": "DCEBEB",
    "back-3": "F7E2E1",
    "primary-lighten-1": "#58545B",
    "primary-lighten-2": "#AC6869",
    "primary-lighten-3": "#AC6869",
    "primary-lighten-4": "#58545B",
    secondary: "#ffffff",
    "secondary-darken-1": "#018786",
    texts : 'ad5e5e',
    error: "#FF1744",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};  

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#9C27B0",
    "primary-darken-1": "#8E24AA",
    "primary-darken-2": "#7B1FA2",
    "primary-darken-3": "#6A1B9A",
    "primary-darken-4": "#4A148C",
    "back-1": "b6756a",
    "back-2": "373771",
    "back-3": "70416e",
    texts : 'ffffff',
    "primary-lighten-1": "#3700B3",
    "primary-lighten-2": "#BA68C8",
    "primary-lighten-3": "#CE93D8",
    "primary-lighten-4": "#E1BEE7",
    secondary: "#607D8B",
    "secondary-darken-4": "#263238",
    error: "#FF1744",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};  
export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme
    },
  },
});
