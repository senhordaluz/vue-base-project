/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
// @ts-ignore
import VueMoment from "vue-moment";

Vue.use(VueMoment);

Vue.config.productionTip = false;

new Vue({
  name: process.env.VUE_APP_NAME,
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
