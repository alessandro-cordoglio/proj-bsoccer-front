<script>
export default {
  name: "Sponsorship",
  components: {},
  data() {
    return {
      players: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="background_image">
    <div class="hero_title">
      <h1>Unisciti alla Community</h1>
    </div>
    <div class="hero_text col">
      <div class="hero_text--subtitle">
        <h2 class="text-center fw-bold">It's Free!</h2>
      </div>
      <div class="hero_text--sponsor text-center text-white fs-2 pt-4">
        <p>
          In qualsiasi Città c'è sempre un nuovo giocatore pronto ad indossare
          la maglia della tua squadra.
        </p>
      </div>
    </div>
    <div class="register_button text-center">
      <a href="#" class="button_register fw-bold fs-3">Registrati</a>
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
  .hero_text {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .hero_text--subtitle {
    h2 {
      font-size: 60px;
      color: #f3e7c6;
    }
  }
  .register_button {
    padding-bottom: 50px;
    a {
      color: rgb(201, 196, 196);
      background-color: rgb(133, 12, 36);
      &:hover {
        background-color: crimson;
        color: white;
      }
    }
  }
}
</style>
