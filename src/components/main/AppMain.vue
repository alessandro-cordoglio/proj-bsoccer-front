<script>
import { store } from "../../store";
import PlayerCard from "../commons/PlayerCard.vue";

export default {
  name: "AppMain",
  components: {
    PlayerCard,
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
    <!-- <PlayerCard /> -->
    <!-- <router-view></router-view> -->
  </main>
</template>

<style lang="scss" scoped></style>
