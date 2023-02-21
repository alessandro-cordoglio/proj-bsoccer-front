<script>
import { store } from "../../store";
import Sponsorship from "./Sponsorship.vue";
export default {
  components: {
    Sponsorship,
  },
  name: "AppHeader",
  data() {
    return {
      store,
      hamburgerAnimation: false,
    };
  },
  methods: {
    animateBurger() {
      this.hamburgerAnimation = !this.hamburgerAnimation;
    },
  },
};
</script>

<template>
  <header>
    <section class="top_header">
      <nav
        class="container d-flex justify-content-between align-items-center navbar"
      >
        <div class="header_left">
          <a class="" href="#">
            <img src="src/assets/pngwing.com.png" alt="" />
          </a>
        </div>
        <div class="search_bar">
          <form action="GET" class="d-flex align-items-center">
            <label for="search">
              <button class="button_layout w-100" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </label>
            <input
              class="w-100"
              type="text"
              placeholder="cerca un ruolo/ una città o un giocatore"
            />
          </form>
        </div>
        <div class="header_right navbar_layout">
          <!-- Hamburger Menu -->
          <div class="hamburger" @click="animateBurger">
            <div
              class="hamburger-menu"
              :class="{ 'ham-animation': this.hamburgerAnimation }"
            ></div>
            <!-- /Hamburger Menu -->
          </div>
          <ul :class="{ 'show-ul': hamburgerAnimation }">
            <li>
              <i class="fa-solid fa-house"></i>
              HOME
            </li>
            <li>
              <i class="fa-solid fa-futbol"></i>
              LOG IN
            </li>
          </ul>
        </div>
      </nav>
    </section>

    <section class="sponsored_player">
      <Sponsorship />
    </section>
  </header>
</template>

<style lang="scss" scoped>
nav {
  .search_bar {
    width: 60%;
    label {
      border-radius: 10px 0 0 10px;
      color: black;
      background-color: white;
      padding: 0px 10px 0px 10px;
      height: 100%;
    }
    input {
      outline: none;
      border-left: 1px solid black;
      text-align: center;
      border-radius: 0px 10px 10px 0;
    }
  }
  color: grey;
  .header_left {
    width: max-content;
    img {
      width: 80px;
    }
  }
  .header_right {
    display: flex;
  }
}
/* -------------------
  HAMBERGER MENU
--------------------*/
.hamburger {
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
}
.hamburger-menu {
  position: relative;
  width: 1.875rem;
  height: 0.3125rem;
  background-color: #fff;
  border-radius: 0.3125rem;
  z-index: 999;
  display: none;
  transition: 0.2s background-color linear 0.2s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0.3125rem;
    background-color: #fff;
    border-radius: 0.3125rem;
    transition: 0.4s transform, width linear;
  }
  &::after {
    top: 0.625rem;
    left: 0;
    width: 1.5625rem;
  }
  &::before {
    top: -0.625rem;
    left: 0;
    width: 1.25rem;
  }

  @media screen and (max-width: 1100px) {
    display: block;
  }
}
.ham-animation {
  background-color: transparent;

  &::after {
    top: 0;
    width: 1.875rem;
    transform: rotate(225deg);
  }
  &::before {
    top: 0;
    width: 1.875rem;
    transform: rotate(-225deg);
  }
}
.active {
  position: relative;
  color: #fff;

  &::after {
    position: absolute;
    content: "";
    height: 0.3125rem;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
}

/* -------------------
  UL-ANIMATION
--------------------*/
ul {
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 100;
  transition: right 0.4s ease-out;

  li {
    cursor: pointer;
    padding: 3.125rem 0;
    transition: all 0.3s ease-out;
    margin-right: 1.875rem;

    @media screen and (max-width: 1100px) {
      background-color: #000;
      padding: 1.875rem 0;
      font-size: 0.875rem;
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    position: fixed;
    top: 95px;
    right: -270px;
    width: 240px;
    box-shadow: -10px 7px 10px 0px #000000;
  }
}
.show-ul {
  right: -10px;
}
/* -------------------
  SPONSOR
--------------------*/
.sponsored_player{
  padding-top: 95.86px;
}
</style>
