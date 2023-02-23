<script>
import { store } from "../../store";
import PlayerCard from "../commons/PlayerCard.vue";
import Sponsorship from "./Sponsorship.vue";

export default {
  name: "AppMain",
  components: {
    PlayerCard,
    Sponsorship,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <section class="sponsored_player">
      <Sponsorship />
    </section>
    <!-- <PlayerCard /> -->
    <!-- <router-view></router-view> -->
  </main>
</template>

<style lang="scss" scoped>
.sponsored_player {
  height: 43.75rem;
  background-color: var(--sponsor-color);
}
</style>
