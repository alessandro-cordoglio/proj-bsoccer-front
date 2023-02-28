<script>
import axios from "axios";
import { store } from "../store";
import CommonPlayerCard from "../components/commons/CommonPlayerCard.vue";
export default {
  name: "PlayersList",
  components: {
    CommonPlayerCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getAllPlayer() {
      axios.get("http://localhost:8000/api/players").then((resp) => {
        this.store.players = resp.data;
      });
    },
  },
  created() {
    this.getAllPlayer();
  },
};
</script>

<template>
  <section class="all-players">
    <div class="players-container">
      <CommonPlayerCard
        v-for="(player, index) in this.store.players"
        :data="player"
        class="players-list"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.all-players {
  background-color: var(--common-card-color);
  .players-container {
    max-width: 62.5rem;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    .players-list {
      margin: 3.125rem 1.875rem;
      width: calc(100% / 3 - 3.75rem);
    }
  }
}
</style>
