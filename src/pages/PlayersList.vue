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
      this.getPlayers();
    }
    
  },
  computed: {
    isNextDisabled() {
      return this.store.currentPage >= Math.ceil(this.store.players.length / this.store.prePage) || 
           this.store.players.length < this.store.prePage;
    },
  },
  methods: {
    getPlayers() {
      axios.get(`${this.store.api_url}/players`, {
        params: {
          page: this.store.currentPage,
          perPage: this.store.prePage
        }
      })
      .then(res => {
        console.log(res.data);
        this.store.players = res.data.data;
      })
      .catch(error => {
        console.log(error);
      })
    },
    changePage(num) {
      this.store.currentPage += num;
      if (this.store.selectedRole) {
        this.getPlayersByRole();
      } else {
        this.getPlayers();
  }
    },

  getPlayersByRole() {
      axios.get(`${this.store.api_url}/players`, {
          params: {
            role: this.store.selectedRole,
            page: this.store.currentPage,
            perPage: this.store.prePage
          }
        })
        .then(res => {
          console.log(res.data)
          this.store.players = res.data.data;
        })
        .catch(error => {
          console.log(error);
        })
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
        :key="player.id "
      />
    </div>
    <div class="ms_bt_container">
        <button class="btn me-4 btn-info" type="button" :disabled="store.currentPage === 1" @click="changePage(-1)">-- Prev</button>
        <button class="btn btn-info" type="button"  :disabled="isNextDisabled" @click="changePage(1)">Next --</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.ms_bt_container{
  padding-top: 30px ;
  padding-bottom: 30px ;
  display: flex;
  justify-content: center;
}
.all-players::-webkit-scrollbar {
    display: none;
  }
.all-players {
  background-image: url("http://www.asdbassabresciana.it/wp-content/uploads/2016/06/Sfondo-HD-calcio-sport.jpeg");
  max-height: 100vh;
  min-width: 100%;
  overflow: auto;
  background-size: cover;
  background-position: top right;
  .players-container {
    background-color: var(--common-card-color);
    max-width: 75rem;
    margin: auto;
    padding: 0px 0px 0 1.25rem;
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
