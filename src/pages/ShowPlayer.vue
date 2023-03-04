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
      showCloseButton: false,
      show: false,
      message: "",
      alertClass: "",
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
    showAlert(message, type) {
      this.show = true;
      this.message = message;
      switch (type) {
        case "success":
          this.alertClass = "alert-success";
          break;
        case "danger":
          this.alertClass = "alert-danger";
          break;
        case "warning":
          this.alertClass = "alert-warning";
          break;
        case "info":
          this.alertClass = "alert-info";
          break;
        default:
          this.alertClass = "";
          break;
      }
      this.showCloseButton = true;
    },
    closeAlert() {
      this.show = false;
      this.message = "";
      this.alertClass = "";
      this.showCloseButton = false;
    },
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
      // Controlla se tutti i campi obbligatori sono stati compilati
      if (
        !this.formData.name ||
        !this.formData.email ||
        !this.formData.content
      ) {
        alert("Si prega di compilare tutti i campi obbligatori");
        return;
      }

      // Invia la richiesta POST utilizzando Axios
      axios
        .post(`${this.store.api_url}/messages/${this.player.id}`, {
          name: this.formData.name,
          email: this.formData.email,
          content: this.formData.content,
        })
        .then((res) => {
          // Aggiungi il messaggio alla lista del giocatore
          this.player.messages.push(res.data);
          // Svuota i campi del modulo
          this.formData.name = "";
          this.formData.email = "";
          this.formData.content = "";
          this.showAlert("Messaggio inviato con successo!", "success");
          this.store.showMessageModal = false;
        })
        .catch((error) => {
          // Gestisci eventuali errori qui
          console.log(error);
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
          this.showAlert("Recensione inviata con successo!", "success");
          this.store.showReviewModal = false;
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
    toggleMessageModal() {
      this.store.showReviewModal = false;
      this.store.showMessageModal = !this.store.showMessageModal;
    },
    toggleReviewModal() {
      this.store.showMessageModal = false;
      this.store.showReviewModal = !this.store.showReviewModal;
    },
    closeMessageReviewModal() {
      this.store.showMessageModal = false;
      this.store.showReviewModal = false;
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
  <div class="background" @click="closeMessageReviewModal">
    <div class="ms-container">
      <section v-if="player.user">
        <section class="player-info row g-0 gy-4 ">
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
            <!-- star review -->
            <div class="my-3">
              <h3>Valuta il Giocatore</h3>
              <div class="form-check form-check-inline mx-0 position-relative">
                <input
                  class="form-check-input ms-input-style"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="1"
                  v-model="rating"
                />
                <label class="form-check-label" for="inlineRadio1">
                  <i class="fas fa-star" :class="{ selected: rating >= 1 }"></i>
                </label>
              </div>
              <div class="form-check form-check-inline mx-0 position-relative">
                <input
                  class="form-check-input ms-input-style"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="2"
                  v-model="rating"
                />
                <label class="form-check-label" for="inlineRadio2">
                  <i class="fas fa-star" :class="{ selected: rating >= 2 }"></i>
                </label>
              </div>
              <div class="form-check form-check-inline mx-0 position-relative">
                <input
                  class="form-check-input ms-input-style"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="3"
                  v-model="rating"
                />
                <label class="form-check-label" for="inlineRadio3">
                  <i class="fas fa-star" :class="{ selected: rating >= 3 }"></i>
                </label>
              </div>

              <div class="form-check form-check-inline mx-0 position-relative">
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
                  <i class="fas fa-star" :class="{ selected: rating >= 4 }"></i>
                </label>
              </div>

              <div class="form-check form-check-inline mx-0 position-relative">
                <input
                  class="form-check-input ms-input-style"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio5"
                  value="5"
                  v-model="rating"
                />
                <label class="form-check-label" for="inlineRadio5">
                  <i class="fas fa-star" :class="{ selected: rating >= 5 }"></i>
                </label>
              </div>

              <button @click="addRating()" class="btn btn-primary ms-3">
                Invia Valutazione
              </button>
            </div>
            <!-- /star review -->
          </div>
          <div class="description col-sm-12 col-lg-6">
            <div class="alert" role="alert" :class="[alertClass]">
              <button
                v-if="showCloseButton"
                type="button"
                class="close"
                @click="closeAlert"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {{ message }}
            </div>
            <h2>Descrizione Giocatore</h2>
            <p>{{ player.description }}</p>
            <!-- modale messaggi -->
            <div
              class="ms-message-modal position-fixed"
              :class="{ 'show-modal': this.store.showMessageModal }"
            >
              <div
                class="ms-modale-header d-flex align-items-center justify-content-between py-3 px-3"
              >
                <h4 class="mb-0">
                  Invia un messaggio a {{ player.user.name }}
                </h4>
                <div @click="this.store.showMessageModal = false">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div class="ms-modal-body py-4 px-2">
                <!-- Inizio Form -->
                <form @submit.prevent="addMessage()" ref="formMessage">
                  <div class="mt-1">
                    <label for="name">Nome*</label>
                    <input
                      class="form-control mb-2"
                      type="text"
                      id="name"
                      placeholder="Inserisci nome"
                      v-model="formData.name"
                      required
                    />
                    <label for="email">Email*</label>
                    <input
                      class="form-control mb-2"
                      type="email"
                      id="email"
                      placeholder="Inserisci email"
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
                      placeholder="Inserisci messaggio"
                      v-model="formData.content"
                      required
                    ></textarea>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="this.store.showMessageModal = false"
                    >
                      Chiudi
                    </button>
                    <button type="submit" class="btn btn-success ms-3">
                      Invia Messaggio
                    </button>
                  </div>
                </form>
                <!-- /Fine Form -->
              </div>
            </div>
            <!-- /modale messaggi -->
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-danger"
              @click.stop="toggleMessageModal"
            >
              invia Messaggio
            </button>
            <!-- Button trigger modal -->
            <!-- Modale Messaggi fine -->

            <!-- modale recensioni -->
            <div
              class="ms-message-modal position-fixed"
              :class="{ 'show-modal': this.store.showReviewModal }"
            >
              <div
                class="ms-modale-header d-flex align-items-center justify-content-between py-3 px-3"
              >
                <h4 class="mb-0">
                  Invia una recensione a {{ player.user.name }}
                </h4>
                <div @click="this.store.showReviewModal = false">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div class="ms-modal-body py-4 px-2">
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
                      required
                    />
                    <label for="content">Recensione*</label>
                    <textarea
                      class="form-control"
                      name="content"
                      id="content"
                      cols="30"
                      rows="10"
                      placeholder="Inserisci recensione"
                      v-model="reviewData.content"
                      required
                    ></textarea>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="this.store.showReviewModal = false"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-success ms-3">
                      Aggiungi Recensione
                    </button>
                  </div>
                </form>
                <!-- Form Recensioni -->
              </div>
            </div>
            <!-- /modale recensioni -->
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-danger ms-4"
              @click.stop="toggleReviewModal"
            >
              Scrivi Recensione
            </button>
            <!-- Button trigger modal -->
          </div>
        </section>
        <section class="valutazione py-3 d-flex justify-content-center ">
          <div class="val-content d-flex flex-column align-items-center position-relative">
              <h3>Esprimi la tua Valutazione sul Giocatore</h3>
              <div class="star-content text-center d-flex justify-content-center">

                <div class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4 ">
                  <input
                    class="form-check-input ms-input-style"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="1"
                    v-model="rating"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    <i class="fas fa-star" :class="{ selected: rating >= 1 }"></i>
                  </label>
                </div>
                <div class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4">
                  <input
                    class="form-check-input ms-input-style "
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="2"
                    v-model="rating"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    <i class="fas fa-star" :class="{ selected: rating >= 2 }"></i>
                  </label>
                </div>
                <div class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4">
                  <input
                    class="form-check-input ms-input-style"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="3"
                    v-model="rating"
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    <i class="fas fa-star" :class="{ selected: rating >= 3 }"></i>
                  </label>
                </div>
  
                <div class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4">
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
                    <i class="fas fa-star" :class="{ selected: rating >= 4 }"></i>
                  </label>
                </div>
  
                <div class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4">
                  <input
                    class="form-check-input ms-input-style"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="5"
                    v-model="rating"
                  />
                  <label class="form-check-label" for="inlineRadio5">
                    <i class="fas fa-star" :class="{ selected: rating >= 5 }"></i>
                  </label>
                </div>
              </div>

              <button @click="addRating()" class="btn btn-primary  mt-2 d-block ">
                Invia 
              </button>
            </div>
        </section>
        <section v-if="player.reviews?.length > 0" class="messages-reviews ms-container">
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
.valutazione{
  background-color: white;
  width: 100%;
}
.val-content{
  h3{
    color: black;
    font-weight: 900;
    font-size: 35px;
  }
}

.white-star{
  color: white;
}
.background::-webkit-scrollbar {
  display: none;
}
.background {
  background-image: url("https://assets.fubles.com/images/landing/custom_backgrounds/generica.jpg");
  max-height: 100vh;
  min-width: 100%;
  overflow: auto;
  background-size: cover;
  background-position: top right;
}

.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  max-width: 350px;
  min-width: 250px;
}

.ms-container {
  max-width: 1100px;
  width: 100%;
  // background-color: grey;
  background-color: var(--common-card-color);
  
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
  background-color: transparent;
  margin: auto;
  padding: 10% 2%;
}
.user-review {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  right: 1.75rem;
  cursor: pointer;
  opacity: 0;
  width: 1.875rem;
  height: 1.875rem;
  z-index: 100;
}
.star-valutation {
  width: 80%;
}
.fa-star {
  transition: all 0.2s linear;
}
.selected {
  color: gold;
  transform: scale(1.5);
}
.alert {
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;

  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: inherit;
  }

  &-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  &-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  &-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }

  &-info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }
}
.ms-message-modal {
  background-color: white;
  max-width: 31.25rem;
  width: 100%;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  border: 0.0625rem solid lightgray;
  border-radius: 0.625rem;
  z-index: 999;
  transition: top 0.2s ease;
  .ms-modale-header {
    border-bottom: 0.0625rem solid lightgray;
    .fa-xmark {
      font-size: 1.25rem;
      padding: 0.3125rem 0.5625rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        background-color: lightgrey;
      }
      &:active {
        font-size: 1.125rem;
      }
    }
  }
}
.show-modal {
  top: 0.9375rem !important;
}
.blur {
  filter: blur(0.625rem);
}
</style>
