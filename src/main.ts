/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from "vue";
import "./plugins/axios";
import "./plugins/bugsnag";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
// @ts-ignore
import VueMoment from "vue-moment";

Vue.use(VueMoment);

switch (process.env.NODE_ENV) {
  case "local":
  case "docker":
  case "development":
    Vue.config.productionTip = false;
    Vue.config.devtools = true;
    Vue.config.performance = true;
    Vue.config.silent = false;
    break;
  default:
    Vue.config.devtools = false;
    Vue.config.performance = false;
    Vue.config.silent = true;
    break;
}

new Vue({
  name: process.env.VUE_APP_NAME,
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
