/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from "vue";
// @ts-ignore
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

switch (process.env.NODE_ENV) {
  case "local":
  case "docker":
  case "development":
    // set default config
    (Vue as any).$cookies.config("30d");
    break;
  default:
    // set secure, only https works
    (Vue as any).$cookies.config("30d", "", "", true);
    break;
}

// set global cookie
// Vue.$cookies.set('theme','default');
// Vue.$cookies.set('hover-time','1s');
