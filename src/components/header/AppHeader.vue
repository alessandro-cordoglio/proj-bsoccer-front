<script>
import { store } from "../../store";
import axios from "axios";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
      filteredRoles: [],
      hamburgerAnimation: false,
      isSearchDropdownOpen: false,
    };
  },
  methods: {
    clearSearch() {
      this.store.selectedRole = "";
    },
    animateBurger() {
      this.hamburgerAnimation = !this.hamburgerAnimation;
    },
    getPlayersByRole() {
      axios
        .get(`${this.store.api_url}/players`, {
          params: {
            role: this.store.selectedRole,
            page: this.store.currentPage,
          },
        })
        .then((res) => {
          this.store.players = [];
          this.store.players = res.data.data;
          // redirect sulla pagina dei players
          this.$router.push({ name: "players" });
        });
    },
    updateFilteredRoles() {
      this.filteredRoles = this.store.roles.filter((role) =>
        role.toLowerCase().includes(this.store.selectedRole.toLowerCase())
      );
    },
    goToFilteredPlayers(role) {
      this.store.selectedRole = role;
      this.filteredRoles = [];
      this.getPlayersByRole();
      this.isSearchDropdownOpen = !this.isSearchDropdownOpen;
    },
    toggleSearchDropdown() {
      this.filteredRoles = this.store.roles;
      this.isSearchDropdownOpen = !this.isSearchDropdownOpen;
    },
  },
};
</script>

<template>
  <header>
    <section class="top_header">
      <nav class="container d-flex justify-content-between align-items-center">
        <div class="header_left">
          <router-link :to="{ name: 'home' }" @click="clearSearch()">
            <img src="src/assets/pngwing.com.png" alt="" />
          </router-link>
        </div>
        <div class="search_bar">
          <form
            action="GET"
            @submit.prevent="goToFilteredPlayers(role)"
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
              @click="toggleSearchDropdown()"
            />
            <div class="dropdown-text-search"></div>
            <ul
              class="search-dropdown"
              v-show = "isSearchDropdownOpen"
            >
              <li
                v-for="role in filteredRoles"
                @click="goToFilteredPlayers(role)"
                :key="role"
              >
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

            <!-- OFFCAnvas component -->
            <li>
              <a
                class="d-flex align-items-center btn p-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                ><i class="me-2 fa-solid fa-filter"></i> filter</a
              >

              <div
                class="ms-offcanvas offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div
                  class="offcanvas-header"
                  style="background-color: white; color: black"
                >
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Filtri disponibili
                  </h5>
                  <button
                    style="color: white"
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div style="background-color: black" class="offcanvas-body">
                  <!-- Filtro per numero di stelle -->
                  <div>
                    <p>Scegli il player con un numero minimo di stelle</p>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="0"
                        checked
                        v-model="this.store.selectedRating"
                      />
                      <label class="form-check-label" for="inlineRadio1"
                        >All</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="1"
                        v-model="this.store.selectedRating"
                      />
                      <label class="form-check-label" for="inlineRadio1"
                        >1</label
                      >
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
                      <label class="form-check-label" for="inlineRadio2"
                        >2</label
                      >
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
                      <label class="form-check-label" for="inlineRadio3"
                        >3</label
                      >
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
                      <label class="form-check-label" for="inlineRadio4"
                        >4</label
                      >
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
                      <label class="form-check-label" for="inlineRadio5"
                        >5</label
                      >
                    </div>
                  </div>
                  <!-- /Filtro per numero di stelle -->

                  <!-- Filtro per numero di recensioni -->
                  <div class="reviews-filter">
                    <p>Filtra per numero minimo di recensioni</p>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="0"
                        v-model="this.store.howManyReviews"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Tutti i Players
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="5"
                        v-model="this.store.howManyReviews"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        > di 5
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="15"
                        v-model="this.store.howManyReviews"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        > di 15
                      </label>
                    </div>
                  </div>
                  <!-- /Filtro per numero di recensioni -->
                </div>
              </div>
            </li>
            <!-- /OFFCAnvas component -->

            <li class="d-flex align-items-center">
              <i class="fa-solid fa-user"></i>
              <a class="ms-2" href="http://127.0.0.1:8000/login">Login</a>
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
  z-index: 50;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 10px;
  width: 60%;
  max-height: 200px;
  overflow-y: auto;
  top: 70%;
  list-style: none;
}

.search-dropdown li {
  padding: 10px;
  cursor: pointer;
}

.search-dropdown li:hover {
  background-color: #f2f2f2;
}

// -----OffCanvas-----
.ms-offcanvas {
  background-color: #999;
}

.ms-button-close {
  color: white;
  border: none;
  background-image: none;
}

header {
  position: sticky;
  width: 100%;
  z-index: 500;
  top: 0;

  .top_header {
    background-color: #111;
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
    width: min-content;
    img {
      width: 80px;
    }
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

.header_right {
  display: flex;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    z-index: 100;
    transition: right 0.4s ease-out;

    li {
      cursor: pointer;
      padding: 10px;
      transition: all 0.3s ease-out;
      margin-right: 1.875rem;

      @media screen and (max-width: 1100px) {
        background-color: #111111;
        // padding: 1.875rem 0;
        font-size: 0.875rem;
        width: 100%;
        text-align: center;
      }
    }
    @media screen and (max-width: 1100px) {
      flex-direction: column;
      position: fixed;
      top: 80px;
      right: -270px;
      width: 240px;
      box-shadow: -10px 7px 10px 0px #000000;
    }
  }
  .show-ul {
    right: -10px;
  }
}
.reviews-filter {
  margin-top: 1.875rem;
}
</style>
