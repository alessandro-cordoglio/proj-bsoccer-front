<script>
import axios from "axios";
import CommonPlayerCard from "../components/commons/CommonPlayerCard.vue";
import { store } from "../store";
export default {
  name: "ShowPlayer",
  components: {
    CommonPlayerCard,
    randomNumber: 0,
  },
  data() {
    return {
      store,
      player: {},
      formData: {
        name: "",
        email: "",
        content: "",
      },
      reviewData: {
        name: "",
        content: "",
      },
      rating: 0,
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
        .get(`${this.store.api_url}/players/${this.$route.params.id}`)
        .then((resp) => {
          this.player = resp.data;
        })
        .catch((err) => {
          this.$router.push({ name: "page-404" });
        });
    },
    addMessage() {
      axios
        .post(`${this.store.api_url}/messages/${this.player.id}`, {
          name: this.formData.name,
          email: this.formData.email,
          content: this.formData.content,
        })
        .then((res) => {
          this.player.messages.push(res.data);
          this.formData.name = "";
          this.formData.email = "";
          this.formData.content = "";
        });
    },
    addReview() {
      axios
        .post(`${this.store.api_url}/reviews/${this.player.id}`, {
          name: this.reviewData.name,
          content: this.reviewData.content,
        })
        .then((res) => {
          this.player.reviews.push(res.data);
          this.reviewData.name = "";
          this.reviewData.content = "";
        });
    },
    addRating() {
      axios
        .post(`${this.store.api_url}/ratings/${this.player.id}`, {
          rating: this.rating,
        })
        .then((res) => {
          this.player.ratings.push(res.data);
          this.rating = 0;
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
  <div class="background">
    <div class="ms-container">
      <section v-if="player.user">
        <section class="player-info row g-0 gy-4">
          <div class="card-content col-sm-12 col-lg-6">
            <div class="card">
              <div class="card-top">
                <img
                  v-if="player.user"
                  :src="
                    player.profile_photo.includes('https')
                      ? player.profile_photo
                      : player.image_url
                  "
                  :alt="(player.user.name, player.user.surname)"
                />
              </div>
              <div class="card-bottom">
                <h3 class="text-center">
                  {{ player.user.name }} {{ player.user.surname }}
                </h3>
                <h5>
                  RUOLO:<span v-for="role in player.roles"
                    >{{ role.name }}-</span
                  >
                </h5>
                <h5>
                  RATING:
                  <i
                    class="fa-solid fa-star"
                    v-for="n in Number(mediaRating)"
                  ></i>
                  <i
                    class="fa-regular fa-star"
                    v-for="n in 5 - Number(mediaRating)"
                  ></i>
                </h5>
              </div>
            </div>
          </div>
          <div class="description col-sm-12 col-lg-6">
            <h2>Descrizione Giocatore</h2>
            <p>{{ player.description }}</p>

            <!-- Modal Messaggi -->

            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#messageModal"
            >
              invia Messaggio
            </button>
            <!-- Button trigger modal -->

            <div
              class="modal fade"
              id="messageModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Manda un messaggio a {{ player.user.name }}
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <!-- Form Messaggio -->
                    <form
                      @submit.prevent="addMessage()"
                      ref="formMessage"
                      action=""
                    >
                      <div class="mt-1">
                        <label for="name">Nome*</label>
                        <input
                          class="form-control mb-2"
                          type="text"
                          id="name"
                          placeholder="Inserisci nome"
                          v-model="formData.name"
                        />
                        <label for="email">Email*</label>
                        <input
                          class="form-control mb-2"
                          type="text"
                          id="email"
                          placeholder="Inserisci email*"
                          v-model="formData.email"
                          required
                        />
                        <label for="content">Messaggio*</label>
                        <textarea
                          class="form-control mb-2"
                          name="content"
                          id="content"
                          cols="30"
                          rows="10"
                          placeholder="Inserisci messaggio*"
                          v-model="formData.content"
                          required
                        ></textarea>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          class="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Manda Messaggio
                        </button>
                      </div>
                    </form>
                    <!-- Form Messaggio -->
                  </div>
                </div>
              </div>
            </div>

            <!-- Modale Messaggi -->

            <!-- Modal Recensione-->

            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-danger ms-4"
              data-bs-toggle="modal"
              data-bs-target="#reviewModal"
            >
              Scrivi Recensione
            </button>
            <!-- Button trigger modal -->
            <div
              class="modal fade"
              id="reviewModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Scrivi una recensione su {{ player.user.name }}
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <!-- Form Recensioni -->
                    <form @submit.prevent="addReview()" action="">
                      <div class="mt-3">
                        <label for="name">Nome*</label>
                        <input
                          class="form-control mb-2"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Inserisci nome"
                          v-model="reviewData.name"
                        />
                        <label for="content">Recensione*</label>
                        <textarea
                          class="form-control"
                          name="content"
                          id="content"
                          cols="30"
                          rows="10"
                          placeholder="Inserisci messaggio*"
                          v-model="reviewData.content"
                          required
                        ></textarea>
                      </div>
                      <!-- recensioni stelle -->
                      <div class="my-3">
                        <h3>Valuta il Giocatore</h3>
                        <div
                          class="form-check form-check-inline mx-0 position-relative"
                        >
                          <input
                            class="form-check-input ms-input-style"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="1"
                            v-model="rating"
                          />
                          <label class="form-check-label" for="inlineRadio1">
                            <i
                              class="fas fa-star"
                              :class="{ selected: rating >= 1 }"
                            ></i>
                          </label>
                        </div>
                        <div
                          class="form-check form-check-inline mx-0 position-relative"
                        >
                          <input
                            class="form-check-input ms-input-style"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="2"
                            v-model="rating"
                          />
                          <label class="form-check-label" for="inlineRadio2">
                            <i
                              class="fas fa-star"
                              :class="{ selected: rating >= 2 }"
                            ></i>
                          </label>
                        </div>
                        <div
                          class="form-check form-check-inline mx-0 position-relative"
                        >
                          <input
                            class="form-check-input ms-input-style"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="3"
                            v-model="rating"
                          />
                          <label class="form-check-label" for="inlineRadio3">
                            <i
                              class="fas fa-star"
                              :class="{ selected: rating >= 3 }"
                            ></i>
                          </label>
                        </div>
                        <div
                          class="form-check form-check-inline mx-0 position-relative"
                        >
                          <input
                            class="form-check-input ms-input-style"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio4"
                            value="4"
                            v-model="rating"
                            selected
                          />
                          <label class="form-check-label" for="inlineRadio4">
                            <i
                              class="fas fa-star"
                              :class="{ selected: rating >= 4 }"
                            ></i>
                          </label>
                        </div>
                        <div
                          class="form-check form-check-inline mx-0 position-relative"
                        >
                          <input
                            class="form-check-input ms-input-style"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio5"
                            value="5"
                            v-model="rating"
                          />
                          <label class="form-check-label" for="inlineRadio5">
                            <i
                              class="fas fa-star"
                              :class="{ selected: rating >= 5 }"
                            ></i>
                          </label>
                        </div>
                        <button
                          @click="addRating()"
                          class="btn btn-primary ms-3"
                        >
                          Invia Valutazione
                        </button>
                      </div>
                      <!-- /recensioni stelle -->
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          class="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Aggiungi Recensione
                        </button>
                      </div>
                    </form>
                    <!-- Form Recensioni -->
                  </div>
                </div>
              </div>
            </div>
            <!-- Modale Recensione-->
          </div>
        </section>
        <section
          v-if="player.messages?.length > 0"
          class="messages-reviews ms-container"
        >
          <h2>Messaggi:</h2>
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
          </div>
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
                <p>{{ review.content }}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background-image: url("https://assets.fubles.com/images/landing/custom_backgrounds/generica.jpg");
  max-height: 100vh;
  min-width: 100vw;
  overflow: auto;
  background-size: cover;
  background-position: top right;
}
.ms-container {
  max-width: 1100px;
  width: 100%;
  // background-color: grey;
  background-image: linear-gradient(
    to right bottom,
    #f8f8f8,
    #d8d8d8,
    #b9b9b9,
    #9b9b9b,
    #7e7e7e
  );
  opacity: 0.9;
  padding: 0 1.875rem;
  margin: auto;
}
.player-info {
  padding: 15%;
  padding-top: 10%;
}
.card {
  width: 80%;
  height: 100%;
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
  padding: 0 10px;
  h2 {
    font-size: 40px;
    font-weight: 900;
  }
  p {
    font-size: 35px;
  }
}
.messages-reviews {
  margin: auto;
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
.ms-input-style {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  opacity: 0;
  width: 1.875rem;
  height: 1.875rem;
  z-index: 100;
}
.fa-star {
  transition: all 0.2s linear;
}
.selected {
  color: gold;
  transform: scale(1.5);
}
</style>
