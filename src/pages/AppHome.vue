<script>
import Hero from "../components/main/Hero.vue";
import AppSectionIcon from "../components/main/AppSectionIcon.vue";
import Sponsorship from "../components/main/Sponsorship.vue";

export default {
  name: "AppMain",
  components: {
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
  height: 43.75rem;
  background-color: var(--sponsor-color);
}
</style>
