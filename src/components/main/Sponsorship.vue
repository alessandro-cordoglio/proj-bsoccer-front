<script>
// import SponsorCard from "../commons/SponsorCard.vue";
import PlayerCard from "../commons/PlayerCard.vue";
export default {
  name: "Sponsorship",
  components: {
    PlayerCard,
    // SponsorCard,
  },
  data() {
    return {
      activePlayer: 0,
      players: [
        {
          name: "Matteo Castori",
          role: "Attaccante",
          rate: 3,
        },
        {
          name: "Matteo Bisonit",
          role: "Difensore",
          rate: 5,
        },
        {
          name: "Lugia Castori",
          role: "Centrocampista",
          rate: 2,
        },
        {
          name: "Mamma Mamma",
          role: "Attaccante",
          rate: 5,
        },
        {
          name: "Maradona",
          role: "Cecchino",
          rate: 5,
        },
        {
          name: "Matteo Castori",
          role: "Attaccante",
          rate: 3,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    nextPlayer() {
      if (this.activePlayer === this.players.length - 1) {
        this.activePlayer = 0;
      } else {
        this.activePlayer++;
      }
    },
  },
};
</script>

<template>
  <div class="carousel_card">
    <div class="sponsor_card">
      <PlayerCard
        class="player_card"
        :class="{ 'player-active': activePlayer === index }"
        v-for="(player, index) in players"
        :player="player"
      />
      <div class="next-btn" @click="nextPlayer(index)">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel_card {
  position: relative;
  max-width: 31.25rem;
  margin: auto;
  background-color: #e1e1e1;
  .player_card {
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s;
    transition-timing-function: cubic-bezier(0.33, 0.94, 0.76, 1.61);
  }
  .next-btn {
    padding: 0.3125rem 0.75rem;
    background-color: #090808;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 16.5625rem;
    right: 3.125rem;
    color: white;
  }
}
.player-active {
  opacity: 1 !important;
  animation: zoom-in 0.5s ease-in-out;
}

.hero_text {
  padding-top: 50px;
  padding-bottom: 100px;
  padding-left: 100px;
}

/* ------------------------------
    KEYFRAME
------------------------------ */
@keyframes zoom-in {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
