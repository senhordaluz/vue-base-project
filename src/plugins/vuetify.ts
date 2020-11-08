import Vue from "vue";
import Vuetify from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";
import pt from "vuetify/src/locale/pt";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "../theme/app.styl";

Vue.use(Vuetify, {
  directives: {
    Ripple
  }
});

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { pt },
    current: "pt"
  },
  icons: {
    iconfont: "md"
  }
});
