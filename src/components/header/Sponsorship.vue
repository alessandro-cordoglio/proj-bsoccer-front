<script>
import SponsorCard from "../commons/SponsorCard.vue";
import PlayerCard from "../commons/PlayerCard.vue";
export default {
  name: "Sponsorship",
  components: {
    PlayerCard,
    SponsorCard,
  },
  data() {
    return {
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
  methods: {},
};
</script>

<template>
  <div class="background_image">
    <div class="hero_title">
      <h1 class="fw-bold">I NOSTRI CAMPIONI</h1>
    </div>
    <div class="carousel_card">
      <div class="sponsor_card d-flex">
        <SponsorCard class="ms-4" v-for="player in players" :player="player" />
      </div>
    </div>
    <div class="hero_text col">
      <div class="hero_text--subtitle">
        <h2 class="text-center text-white fs-2 fw-bold">
          Unisciti pure tu ai campioni del calcetto!
        </h2>
      </div>
      <div class="hero_text--sponsor text-center text-white fs-2 pt-4">
        <p>
          Questi sono i giocatori più richiesti che si sono affidati alle nostre
          sponsorizzazioni!
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background_image {
  background-image: url(/src/assets/wallpaper.jpg);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
  .hero_title {
    text-align: center;
    padding-top: 20px;
    h1 {
      text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
      font-size: 80px;
      color: white;
      font-family: "Karla", sans-serif;
    }
  }
  .carousel_card::-webkit-scrollbar {
    display: none;
  }
  .carousel_card {
    padding: 20px;
    width: 100%;
    overflow-x: scroll;
    .sponsor_card {
      width: min-content;
      height: min-content;
    }
  }
  .hero_text {
    padding-top: 50px;
    padding-bottom: 100px;
    padding-left: 100px;
  }
}
</style>
