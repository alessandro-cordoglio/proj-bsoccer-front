<script>
import Sponsorship from "../components/main/Sponsorship.vue";

export default {
  name: "AppMain",
  components: {
    Sponsorship,
  },
  data() {
    return {};
  },
};
</script>

<template>
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
