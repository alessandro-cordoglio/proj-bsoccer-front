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
  <main @click="this.store.isSearchDropdownOpen = false">
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped></style>
