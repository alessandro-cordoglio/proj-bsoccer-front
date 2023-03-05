<script>
import { store } from "../../store";
export default {
  name: "CommonPlayerCard",
  props: {
    data: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
  computed: {
    backgroundSponsorships() {
      if (this.data.sponsorships[0].typology === "Base") {
        console.log(this.data.sponsorships[0].typology);
        return "background-color: brown";
      } else if (this.data.sponsorships[0].typology === "Standard") {
        console.log(this.data.sponsorships[0].typology);
        return "background-color: silver";
      } else {
        console.log(this.data.sponsorships[0].typology);
        return "background-color: gold";
      }
    },
    mediaRating() {
      const sum = this.data.stars.reduce(
        (total, star) => total + star.rating,
        0
      );
      if (this.data.stars.length === 0) {
        return 0;
      }
      const average = sum / this.data.stars.length;
      return average.toFixed(0);
    },
  },
};
</script>

<template>
  <router-link
    :to="{ name: 'show-player', params: { id: data.id } }"
    :class="mediaRating >= this.store.selectedRating ? '' : 'd-none'"
    v-if="data.reviews.length >= this.store.howManyReviews"
  >
    <div class="card">
      <div class="card-top position-relative">
        <div
          v-if="data.sponsorships.length > 0"
          class="sponsored position-absolute"
          :style="backgroundSponsorships"
        >
          <span>Sponsorizzato {{ data.sponsorships[0].typology }}</span>
        </div>
        <img
          :src="
            data.profile_photo.includes('https')
              ? data.profile_photo
              : data.image_url
          "
          :alt="(data.user.name, data.user.surname)"
        />
      </div>
      <div class="card-bottom">
        <h3 class="text-center">
          {{ data.user.name }} {{ data.user.surname }}
        </h3>
        <div class="d-flex align-items-center">
          <h5>RUOLO:</h5>
          <ul class="list-unstyled mb-0">
            <li v-for="role in data.roles" class="ms-2">{{ role.name }}</li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <h5>RATING:</h5>
          <div v-if="data.stars.length" class="ms-2">
            <i class="fa-solid fa-star" v-for="n in Number(mediaRating)"></i>
            <i
              class="fa-regular fa-star"
              v-for="n in 5 - Number(mediaRating)"
            ></i>
          </div>
          <div v-else>//</div>
        </div>
        <p>Reviews: {{ data.reviews.length }}</p>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
  opacity: 1;
  &:hover {
    color: inherit;
  }
}
.card {
  overflow: hidden;
  border-radius: 40px 0 40px 0;
  position: relative;
  width: 18.75rem;
  height: 31.25rem;
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
    .sponsored {
      top: 0;
      width: 100%;
      padding: 0.3125rem;
      background-color: red;
      text-align: center;
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
