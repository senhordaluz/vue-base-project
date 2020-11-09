/* eslint-disable @typescript-eslint/camelcase */
process.env.VUE_APP_NAME = require("./package.json").name;
process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_THEME_COLOR = "#ff0000";

module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/main.ts",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: process.env.VUE_APP_NAME,
      version: process.env.VUE_APP_VERSION,
      color: process.env.VUE_APP_THEME_COLOR,
      locale: process.env.VUE_APP_I18N_LOCALE || "en",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },

  lintOnSave: false,
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE || "en",
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
      localeDir: "locales",
      enableInSFC: true
    },
    moment: {
      locales: [
        process.env.VUE_APP_I18N_LOCALE || "en",
        (process.env.VUE_APP_I18N_LOCALE || "en") === "en" &&
        (process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en") === "en"
          ? process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en"
          : process.env.VUE_APP_I18N_FALLBACK_LOCALE
      ]
    }
  },

  /**
   * Go to https://realfavicongenerator.net/
   * for customization
   */
  pwa: {
    name: process.env.VUE_APP_NAME,
    theme_color: process.env.VUE_APP_THEME_COLOR,
    display: "fullscreen",
    msTileColor: "#00aba9",
    iconPaths: {
      msTileImage: "img/icons/mstile-150x150.png"
    }
  }
};
