/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from "vue";
// @ts-ignore
import VueLocalforage from "@storage-js/vue-localforage";
import localforage from "localforage";
// @ts-ignore
import memoryDriver from "localforage-memoryStorageDriver";

const Options = {
  // Prefix all storage keys to prevent conflicts
  name: `${(process.env.VUE_APP_NAME as string)
    .replace(/\s+/g, "-")
    .toLowerCase()}-vue-localforage`,
  version: process.env.VUE_APP_VERSION,
  driver: [
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE,
    memoryDriver._driver
  ]
  // instances: [
  //     {
  //         storeName: 'instance1'
  //     },

  //     {
  //         storeName: 'instance2'
  //     }
  // ],
};

// you can also pass options, check options reference below
Vue.use(VueLocalforage, Options);
