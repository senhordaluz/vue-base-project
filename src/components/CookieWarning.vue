<template lang="pug">
CookieLaw(
  :theme="cookieLawTheme",
  :message="$t('message')",
  :buttonText="$t('confirm-cookie')",
  :buttonDecline="buttonDecline",
  :buttonDeclineText="$t('decline-cookie')",
  @accept="accepted()"
)
</template>

<script lang="ts">
import { Component, Vue, Prop, InjectReactive } from "vue-property-decorator";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import CookieLaw from "vue-cookie-law";

@Component({
  components: {
    CookieLaw
  }
})
export default class CookieWarning extends Vue {
  @InjectReactive("darkMode") readonly darkMode!: boolean;

  @Prop({ type: Boolean, default: false }) readonly buttonDecline!: boolean;

  get cookieLawTheme(): string {
    if (this.darkMode) return "dark-lime";
    return "base";
  }

  get cookieState(): boolean {
    return localStorage.getItem("cookie:accepted") == "true";
  }

  accepted() {
    console.log("Cookies acepted");
  }
}
</script>

<i18n>
{
  "en": {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "confirm-cookie": "Got It!",
    "decline-cookie": "Decline"
  },
  "pt-BR": {
    "message": "Este site utiliza cookies para garantiar uma melhor experiência.",
    "confirm-cookie": "Aceitar!",
    "decline-cookie": "Recusar"
  }
}
</i18n>
