<script>
import axios from "axios";
import CommonPlayerCard from "../components/commons/CommonPlayerCard.vue";
export default {
  name: "ShowPlayer",
  components: {
    CommonPlayerCard,
    randomNumber: 0,
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
        .catch((err) => {
          this.$router.push({ name: "page-404" });
        });
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
    <section class="player-info">
      <div class="card">
        <div class="card-top">
          <img
            v-if="player.user"
            :src="player.profile_photo"
            :alt="(player.user.name, player.user.surname)"
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
      <div class="description">
        <h2>Descrizione Giocatore:</h2>
        <p>{{ player.description }}</p>
      </div>
    </section>
    <section v-if="player.messages?.length > 0" class="messages-reviews">
      <!-- <h2>Messaggi:</h2>
      <div class="user-message">
        <div v-for="message in player.messages" class="message">
          <div class="user-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="user-img"
            />
          </div>
          <div class="comment-details">
            <h4 v-if="message.name">{{ message.name }}</h4>
            <h4 v-else>Unknown</h4>
            <p>{{ message.content }}</p>
          </div>
        </div>
      </div> -->
      <h2>Recensioni:</h2>
      <div class="user-review">
        <div v-for="review in player.reviews" class="message">
          <div class="user-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="user-img"
            />
          </div>
          <div class="comment-details">
            <h4 v-if="review.name">{{ review.name }}</h4>
            <h4 v-else>Unknown</h4>
            <i
              class="fa-solid fa-star"
              v-for="n in (this.randomNumber =
                Math.floor(Math.random() * 5) + 1)"
            ></i>
            <i
              class="fa-regular fa-star"
              v-for="n in 5 - this.randomNumber"
            ></i>
            <p>{{ review.content }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin: 2.5rem 0;
}
.player-info {
  max-width: 75rem;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2.5rem;
}
.card {
  position: relative;
  width: 18.75rem;
  height: 25rem;
  border-radius: 1.875rem;
  overflow: hidden;
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
      object-position: top;
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
.description {
  width: 50%;
  margin: 0.625rem 0;
}
.messages-reviews {
  max-width: 56.25rem;
  margin: auto;
  padding-bottom: 3.125rem;
}
.user-review,
.user-message {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.user-message {
  margin-bottom: 1.25rem;
}
.message {
  width: 40%;
  display: flex;
  align-items: center;
  margin-top: 1.25rem;
  .user-img {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
    margin-right: 0.9375rem;
    overflow: hidden;
    border-radius: 50%;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
