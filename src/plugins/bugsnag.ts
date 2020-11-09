import Vue from "vue";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";

let client = null;

if (
  process.env.VUE_APP_BUGSNAG_ON === "true" &&
  process.env.VUE_APP_BUGSNAG_API_KEY !== undefined &&
  process.env.VUE_APP_BUGSNAG_API_KEY !== ""
) {
  client = Bugsnag.start({
    appVersion: process.env.VUE_APP_VERSION,
    apiKey: process.env.VUE_APP_BUGSNAG_API_KEY || "",
    plugins: [new BugsnagPluginVue()]
    //   async onError(event: any) {
    //     try {
    //       event.setUser(
    //         id,
    //         email,
    //         nome
    //       );
    //     } catch (error) {
    //       console.log("Erro ao enviar informações do usuário ao Bugsnag");
    //     }
    //   }
  });

  Bugsnag.getPlugin("vue")?.installVueErrorHandler(Vue);
}

export default client;
