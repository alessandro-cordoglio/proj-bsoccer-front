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
          image:
            "https://images2.gazzettaobjects.it/assets-mc/calcio/giocatori/cristiano_ronaldo_dos_santos_aveiro_05021985.png",
        },
        {
          name: "Matteo Bisonit",
          role: "Difensore",
          rate: 5,
          image:
            "https://static.fanpage.it/wp-content/uploads/sites/27/2022/10/messi-ritorno-barcellona-2023-1200x675.jpg",
        },
        {
          name: "Lugia Castori",
          role: "Centrocampista",
          rate: 2,
          image:
            "https://intermilan.bynder.com/m/44f1b949729d5f37/webimage-Lautaro_scheda.png",
        },
        {
          name: "Mamma Mamma",
          role: "Attaccante",
          rate: 5,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCND3NmOF7cilPOffcdgZwddA85zTtwFp8lNW4RyJTg&s",
        },
        {
          name: "Maradona",
          role: "Cecchino",
          rate: 5,
          image:
            "https://tmssl.akamaized.net/images/foto/galerie/diego-maradona-1401100569-36.jpg?lm=1483605486",
        },
        {
          name: "Franco Madrigali",
          role: "Panchinaro",
          rate: 3,
          image:
            "https://media.licdn.com/dms/image/C5603AQHxaq0QqYCwcA/profile-displayphoto-shrink_800_800/0/1537560592777?e=2147483647&v=beta&t=jEK2x0KzdgVAXg6iVGIMpIWxv21yo4SjeQkCkQbRVCU",
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
    .bottom-right {
      background-color: white !important;
    }
  }
  .next-btn {
    padding: 0.3125rem 0.75rem;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 16.5625rem;
    right: 3.125rem;
    color: black;
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
