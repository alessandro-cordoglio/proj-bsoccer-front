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
  mounted() {
    if (this.store.selectedRole) {
      this.getPlayersByRole();
    } else {
      this.getAllPlayers();
    }
  },
  methods: {
    getPlayersByRole() {
      axios
        .get(`${this.store.api_url}/players`, {
          params: {
            role: this.store.selectedRole,
          },
        })
        .then((response) => {
          this.store.players = response.data;
        });
    },
    getAllPlayers() {
      axios.get(`${this.store.api_url}/players`).then((resp) => {
        this.store.players = resp.data;
      });
    },
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
        :key="player.id"
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
      @media screen and (max-width: 62rem) {
        width: calc(100% / 2 - 3.75rem);
      }
      @media screen and (max-width: 36rem) {
        width: calc(100% - 3.75rem);
      }
    }
  }
}
</style>
