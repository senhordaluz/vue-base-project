<template lang="pug">
v-app

  v-navigation-drawer(
    app,
    v-model="drawer",
    absolute,
    temporary,
    :dark="darkMode"
  )
    v-list(
      dense,
      rounded,
      :dark="darkMode"
    )
      v-list-item(
        v-for="item in menuItems",
        :key="item.title",
        :href="item.href",
        :dark="darkMode",
        link
      )
        v-list-item-icon
          v-icon(:dark="darkMode") {{ item.icon }}
        v-list-item-content
          v-list-item-title {{ item.title }}
        
  v-app-bar(app, color="primary", dark)
    v-app-bar-nav-icon.d-flex.d-sm-none(@click.stop="drawer = !drawer")
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

  drawer = false;

  menuItems = [
    {
      title: (this as any).$t("home"),
      icon: "mdi-view-dashboard",
      href: "#home"
    },
    {
      title: (this as any).$t("services"),
      icon: "mdi-cart",
      href: "#services"
    },
    {
      title: (this as any).$t("portfolio"),
      icon: "mdi-clipboard-multiple",
      href: "#portfolio"
    },
    { title: (this as any).$t("contact"), icon: "mdi-forum", href: "#contact" }
  ];

  async created() {
    await this.updateCachedMode();
    // await this.changeMode();
  }
}
</script>
