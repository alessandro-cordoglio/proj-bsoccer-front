<script>
import axios from "axios";
import CommonPlayerCard from "../components/commons/CommonPlayerCard.vue";
export default {
  name: "ShowPlayer",
  components: {
    CommonPlayerCard,
  },
  data() {
    return {
      player: {},
    };
  },
  created() {
    this.getPlayer();

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.getPlayer();
      }
    );
  },
  methods: {
    getPlayer() {
      axios
        .get(`http://localhost:8000/api/players/${this.$route.params.id}`)
        .then((resp) => {
          this.player = resp.data;
          
        })
      //  .catch((err) => {
      //     this.$router.push({ name: "page-404" });
      //   }); 
    },
  },
  computed: {
    mediaRating() {
      const sum = this.player.stars.reduce(
        (total, star) => total + star.rating,
        0
      );
      const average = sum / this.player.stars.length;
      return average.toFixed(0);
    },
  },
};
</script>

<template>
  <section v-if="player.user">
    <div class="card">
      <div class="card-top">
        <img
          :src="player.profile_photo"
          alt=""
        />
      </div>
      <div class="card-bottom">
        <h3 class="text-center">
          {{ player.user.name }} {{ player.user.surname }}
        </h3>
        <h5>
          RUOLO:<span v-for="role in player.roles">{{ role.name }}-</span>
        </h5>
        <h5>
          RATING:
          <i class="fa-solid fa-star" v-for="n in Number(mediaRating)"></i>
          <i
            class="fa-regular fa-star"
            v-for="n in 5 - Number(mediaRating)"
          ></i>
        </h5>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 18.75rem;
  height: 25rem;
  border-radius: 1.875rem;
  overflow: hidden;
  margin-bottom: 3.75rem;
  cursor: pointer;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.04);
  }
  .card-top {
    height: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-bottom {
    height: 50%;
    padding: 0.625rem 1.25rem;
    background-image: linear-gradient(
      to right bottom,
      #fdf9e4,
      #e4dcb3,
      #d4cc9f,
      #d9cd9a,
      #cebf7f,
      #bfaf70,
      #b09f60,
      #a19052,
      #928143
    );
    h3 {
      font-size: 1.625rem;
      padding-bottom: 0.625rem;
      border-bottom: 0.0625rem solid #746b43;
    }
    h5 {
      padding-top: 0.625rem;
    }
  }
}
</style>
