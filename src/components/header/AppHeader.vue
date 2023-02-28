<script>
import { store } from "../../store";
import axios from "axios";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
      filteredRoles:[],
      hamburgerAnimation: false,
    };
  },
  methods: {
    animateBurger() {
      this.hamburgerAnimation = !this.hamburgerAnimation;
    },
    getPlayersByRole() {
      axios
        .get("http://localhost:8000/api/players", {
          params: {
            role: this.store.selectedRole,
          },
        })
        .then((response) => {
          this.store.players = [];
          this.store.players = response.data;
          // redirect sulla pagina dei players
          this.$router.push({ name: "players" });
        });
    },
    getAllPlayer() {
      axios.get("http://localhost:8000/api/players").then((resp) => {
        this.store.players = resp.data;
          this.$router.push({ name: "players" });
      });
    },
    updateFilteredRoles() {
      this.filteredRoles = this.store.roles.filter((role) =>
        role.toLowerCase().includes(this.store.selectedRole.toLowerCase())
      );
    },
     watch: {
      "store.selectedRole"(newValue) {
        this.updateFilteredRoles();
      },
    },
    goToFilteredPlayers(role) {
      this.store.selectedRole = role;
      this.filteredRoles= [];

      this.getPlayersByRole();
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
          <router-link :to="{ name: 'home' }">
            <img src="src/assets/pngwing.com.png" alt="" />
          </router-link>
        </div>
        <div class="search_bar">
          <form
            action="GET"
            @submit.prevent="getPlayersByRole"
            class="d-flex align-items-center"
          >
            <label for="search">
              <button class="button_layout w-100" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </label>
            <input
              class="w-100"
              type="text"
              placeholder="Ricerca per ruolo giocatore"
              v-model="store.selectedRole"
              @input="updateFilteredRoles"
            />
            <ul class="search-dropdown" v-if="store.selectedRole.length > 0 && filteredRoles.length > 0">
              <li  v-for="role in filteredRoles" @click="goToFilteredPlayers(role)" :key="role">
                {{ role }}
              </li>
            </ul>
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
            <li @click="getAllPlayer">
              <router-link :to="{ name: 'players' }">
                <i class="fa-solid fa-futbol"></i>
                Players
              </router-link>
            </li>
            <li>
              <i class="fa-solid fa-user"></i>
              Login
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.search-dropdown {
  position: absolute;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top: none;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  top: 65px;
}

.search-dropdown li {
  padding: 10px;
  cursor: pointer;
}

.search-dropdown li:hover {
  background-color: #f2f2f2;
}


header {
  padding-top: 95.6px;

  .top_header {
    background-color: #111;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 0px 15px 10px -15px #111;
  }
}

nav {
  color: grey;
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
      border-top-style: none;
      border-bottom-style: none;
      border-right-style: none;
      border-left: 1px solid black;
      text-align: center;
      border-radius: 0px 10px 10px 0;
    }
  }

  .header_left {
    width: max-content;
    img {
      width: 80px;
    }
  }
  .header_right {
    display: flex;
  }

  // mixin error scss

  // .navbar_layout {
  //   ul {
  //     @include reset-list;
  //     @include link_reset;
  //     display: flex;
  //     li {
  //       margin-left: 20px;
  //       cursor: pointer;
  //       padding: 13px;
  //       &:hover {
  //         // color: #E0154A
  //         color: #f3e7c6;
  //       }
  //     }
  //   }
  // }
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
      background-color: #111111;
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
</style>
