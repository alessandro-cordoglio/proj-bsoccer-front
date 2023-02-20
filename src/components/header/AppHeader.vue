<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <router-link :to="{ name: 'home' }">
        <h2>ProjectLogo</h2>
      </router-link>
    </div>
    <div class="nav">
      <ul>
        <li>
          <router-link :to="{ name: 'contact-us' }"> Contatti </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about-us' }"> About-Us </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 4.375rem;
  background-color: rgb(35, 35, 35);
  padding: 0 0.625rem;
  ul {
    list-style: none;
    display: flex;
    li {
      margin-right: 0.9375rem;
      font-size: 1.25rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  h2 {
    font-size: 3.125rem;
    color: white;
  }
}
</style>
