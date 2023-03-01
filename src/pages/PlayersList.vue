<script>
import axios from "axios";
import { store } from "../store";
import CommonPlayerCard from "../components/commons/CommonPlayerCard.vue";
export default {
  name: "PlayersList",
  components: {
    CommonPlayerCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="all-players">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="1"
        v-model="this.store.selectedRating"
      />
      <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio2"
        value="2"
        v-model="this.store.selectedRating"
      />
      <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio3"
        value="3"
        v-model="this.store.selectedRating"
      />
      <label class="form-check-label" for="inlineRadio3">3</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio3"
        value="4"
        v-model="this.store.selectedRating"
      />
      <label class="form-check-label" for="inlineRadio4">4</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio3"
        value="5"
        v-model="this.store.selectedRating"
      />
      <label class="form-check-label" for="inlineRadio5">5</label>
    </div>
    <div class="players-container">
      <CommonPlayerCard
        v-for="(player, index) in this.store.players"
        :data="player"
        class="players-list"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.all-players {
  background-color: var(--common-card-color);
  .players-container {
    max-width: 62.5rem;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    .players-list {
      margin: 3.125rem 1.875rem;
      width: calc(100% / 3 - 3.75rem);
      @media screen and (max-width: 62rem) {
        width: calc(100% / 2 - 3.75rem);
      }
      @media screen and (max-width: 36rem) {
        width: calc(100% - 3.75rem);
      }
    }
  }
}
</style>
