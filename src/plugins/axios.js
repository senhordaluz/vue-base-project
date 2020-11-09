"use strict";

import Vue from "vue";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import localforage from "localforage";
import memoryDriver from "localforage-memoryStorageDriver";

// Create `localforage` instance
const forageStore = localforage.createInstance({
  name: `${(process.env.VUE_APP_NAME || "")
    .replace(/\s+/g, "-")
    .toLowerCase()}-axios-cache`,
  version: parseInt(process.env.VUE_APP_VERSION.split(".").join("")),
  driver: [
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE,
    memoryDriver._driver
  ]
});

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  store: forageStore, // Pass `localforage` store to `axios-cache-adapter`
  // Deactivate `clearOnStale` option so that we can actually read stale cache data
  clearOnStale: false,
  debug: process.env.VUE_APP_DEBUG === "true" || false,
  // Tell adapter to attempt using response headers
  // readHeaders: true,
  exclude: {
    query: false
  },
  ignoreCache: false
});

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  adapter: cache.adapter,
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
