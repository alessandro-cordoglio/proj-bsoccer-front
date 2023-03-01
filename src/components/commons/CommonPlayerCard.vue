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
  computed: {
    mediaRating() {
      const sum = this.data.stars.reduce(
        (total, star) => total + star.rating,
        0
      );
      const average = sum / this.data.stars.length;
      return average.toFixed(0);
    },
  },
};
</script>

<template>
  <router-link
    :to="{ name: 'show-player', params: { id: data.id } }"
    :class="Number(mediaRating) >= this.store.selectedRating ? '' : 'd-none'"
  >
    <div class="card">
      <div class="card-top">
        <img
          :src="data.profile_photo"
          :alt="(data.user.name, data.user.surname)"
        />
      </div>
      <div class="card-bottom">
        <h3 class="text-center">
          {{ data.user.name }} {{ data.user.surname }}
        </h3>
        <h5>
          RUOLO:<span v-for="role in data.roles" class="ms-2">{{ role.name }} -</span>
        </h5>
        <h5 class="d-flex align-items-center">
          RATING:
          <div v-if="data.stars.length" class="ms-2">
            <i class="fa-solid fa-star" v-for="n in Number(mediaRating)"></i>
            <i
              class="fa-regular fa-star"
              v-for="n in 5 - Number(mediaRating)"
            ></i>
          </div>
          <div v-else>
            //
          </div>
        </h5>

      </div>
      <div class="left-corner"></div>
      <div class="right-corner"></div>
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
  }
}
.card {
  position: relative;
  width: 18.75rem;
  height: 31.25rem;
  cursor: pointer;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.04);
  }

  .left-corner,
  .right-corner {
    position: absolute;
    top: -1.5625rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: var(--common-card-color);
  }
  .left-corner {
    left: -2.1875rem;
  }
  .right-corner {
    right: -2.1875rem;
  }
  .bottom-left,
  .bottom-right {
    position: absolute;
    bottom: -0.125rem;
    height: 3.75rem;
    width: 50%;
    background-color: var(--common-card-color);
  }
  .bottom-left {
    left: -0.125rem;
    border-radius: 0 100% 0 0;
  }
  .bottom-right {
    right: -0.125rem;
    border-radius: 100% 0 0 0;
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
