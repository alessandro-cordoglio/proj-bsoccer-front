<script>
import { store } from "./store";
import AppHeader from "./components/header/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";
import AppFooter from "./components/footer/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
