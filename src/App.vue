<template lang="pug">
v-app
  v-app-bar(app, color="primary", dark)
    .d-flex.align-center
      v-img.shrink.mr-2(
        alt="Vuetify Logo",
        contain,
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
        transition="scale-transition",
        width="40"
      )

      v-img.shrink.mt-1.hidden-sm-and-down(
        alt="Vuetify Name",
        contain,
        min-width=100,
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",
        width=100
      )

    v-spacer

    v-btn(
      href="https://github.com/vuetifyjs/vuetify/releases/latest",
      target="_blank",
      text
    )
      span.mr-2 Latest Release
      v-icon open_in_new
      
  v-main
    HelloWorld

  footer
    CookieWarning(button-decline=false)
</template>

<script lang="ts">
import { Component, Vue, ProvideReactive } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CookieWarning from "@/components/CookieWarning.vue"; // @ is an alias to /src
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component({
  components: {
    CookieWarning,
    HelloWorld
  }
})
export default class App extends Vue {
  @Getter("getDarkMode")
  @ProvideReactive("darkMode")
  darkMode!: boolean;
  @Action("changeMode") changeMode!: Function;
  @Action("updateCachedMode") updateCachedMode!: Function;

  async created() {
    await this.updateCachedMode();
    // await this.changeMode();
  }
}
</script>
