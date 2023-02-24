<script>
import { store } from "../../store";

export default {
  name: "AppMain",
  components: {},
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped></style>
