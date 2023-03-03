<script>
import axios from "axios";
import PlayerCard from "../commons/PlayerCard.vue";
export default {
  name: "Sponsorship",
  components: {
    PlayerCard,
  },
  data() {
    return {
      // giocatori: [],
      startIndex: 0,
      activePlayer: 0,
      interval: null,
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
  methods: {
    nextPlayers() {
      this.startIndex = Math.min(this.startIndex + 1, this.players.length - 3);
    },
    prevPlayers() {
      this.startIndex = Math.max(this.startIndex - 1, 0);
    },
  },
  mounted() {},
  // created() {
  //   axios.get(`http://localhost:8000/api/players`).then((resp) => {
  //     resp.data.forEach((giocatore) => {
  //       if (giocatore.sponsorships.length > 0) {
  //         this.giocatori.push(giocatore);
  //       }
  //     });
  //   });
  // },
};
</script>

<template>
  <div class="carousel_card">
    <div class="sponsor_card">
      <div class="player_container">
        <PlayerCard
          class="player_card"
          :class="{ 'player-active': activePlayer === index }"
          v-for="(player, index) in players.slice(startIndex, startIndex + 3)"
          :key="player.id"
          :player="player"
        />
      </div>
      <div class="prev-btn" @click="prevPlayers">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="next-btn" @click="nextPlayers">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel_card {
  position: relative;
  max-width: 75rem;
  margin: auto;
  .sponsor_card {
    position: relative;
    overflow: hidden;
    .player_container {
      display: flex;
      width: calc(
        33.3333% * 3
      ); // imposta la larghezza del contenitore delle card
      transition: transform 0.3s ease; // transizione per l'animazione slider
    }
  }

  .prev-btn,
  .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 0.5;
    transition: opacity 0.3s;
  }

  .prev-btn:hover,
  .next-btn:hover {
    opacity: 1;
  }

  .prev-btn {
    left: 0;
  }

  .next-btn {
    right: 0;
  }
}
</style>
