/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Vue from "vue";
// @ts-ignore
import VueLocalforage from "v-localforage";
import localforage from "localforage";
// @ts-ignore
import memoryDriver from "localforage-memoryStorageDriver";

const Options: LocalForageOptions = {
  // Prefix all storage keys to prevent conflicts
  name: `${(process.env.VUE_APP_NAME as string)
    .replace(/\s+/g, "-")
    .toLowerCase()}-vue-localforage`,
  version: parseInt(
    (process.env.VUE_APP_VERSION as string).split(".").join("")
  ),
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

// Create `localforage` instance
const forageStore = localforage.createInstance(Options);
export default forageStore;
