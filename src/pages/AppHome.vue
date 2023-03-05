<script>
import WelcomePage from "../components/commons/WelcomePage.vue";
import Hero from "../components/main/Hero.vue";
import AppSectionIcon from "../components/main/AppSectionIcon.vue";
import Sponsorship from "../components/main/Sponsorship.vue";

export default {
  name: "AppMain",
  components: {
    WelcomePage,
    Hero,
    Sponsorship,
    AppSectionIcon,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <WelcomePage />

  <section class="hero-section">
    <Hero />
  </section>

  <section class="app-icons">
    <AppSectionIcon />
  </section>

  <section class="sponsored_player">
    <Sponsorship />
  </section>
</template>

<style lang="scss" scoped>
.sponsored_player {
  background-color: var(--sponsor-color);
}
</style>
