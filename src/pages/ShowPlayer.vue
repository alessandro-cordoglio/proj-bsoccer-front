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
          console.log(this.player);
        })
        .catch((err) => {
          this.$router.push({ name: "page-404" });
        });
    },
  },
};
</script>

<template>
  <div>
    <img :src="player.profile_photo" :alt="player.user.surname" />
  </div>
</template>

<style lang="scss" scoped></style>
