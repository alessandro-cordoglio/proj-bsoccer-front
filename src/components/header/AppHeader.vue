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
      this.store.currentPage = 1;
      axios
        .get(`${this.store.api_url}/players?page=${this.store.currentPage}`, {
          params: {
            role: this.store.selectedRole,
            page: this.store.currentPage,
            perPage: this.store.lastPage,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.store.lastPage = res.data.last_page;
          this.store.players = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push({ name: "players" });
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
      this.store.isSearchDropdownOpen = !this.store.isSearchDropdownOpen;
      this.filteredRoles = this.store.roles;
    },
    goHome() {
      this.store.welcomeActive = true;
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<template>
  <header @click="this.store.isSearchDropdownOpen = false">
    <section class="top_header">
      <nav class="container d-flex justify-content-between align-items-center">
        <div class="header_left" @click="clearSearch">
          <li class="d-flex align-items-center" @click="goHome">
            <i class="fa-solid fa-house"></i>
            <span class="ms-2">HOME</span>
          </li>
        </div>
        <div class="search_bar">
          <form
            action="GET"
            @submit.prevent="goToFilteredPlayers(role)"
            class="d-flex align-items-center position-relative"
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
              @click.stop="toggleSearchDropdown"
            />
            <div class="dropdown-text-search"></div>
            <ul
              class="search-dropdown ps-0"
              :class="{
                'show-search-dropdown': this.store.isSearchDropdownOpen,
              }"
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
            <li v-if="$route.path === '/all-players'">
              <a
                class="d-flex align-items-center btn p-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <i class="me-2 fa-solid fa-filter"></i> filter
              </a>

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
                    <div
                      class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4 w-100 text-center"
                    >
                      <input
                        class="form-check-input ms-input-style"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio0"
                        value="0"
                        v-model="this.store.selectedRating"
                      />
                      <label class="form-check-label" for="inlineRadio0"
                        ><h4 class="no-filter">All</h4></label
                      >
                    </div>
                    <div
                      class="star-content text-center d-flex justify-content-center"
                    >
                      <div
                        class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4"
                      >
                        <input
                          class="form-check-input ms-input-style"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="1"
                          v-model="this.store.selectedRating"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          <i
                            class="fas fa-star"
                            :class="{
                              selected: this.store.selectedRating >= 1,
                            }"
                          ></i>
                        </label>
                      </div>
                      <div
                        class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4"
                      >
                        <input
                          class="form-check-input ms-input-style"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="2"
                          v-model="this.store.selectedRating"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          <i
                            class="fas fa-star"
                            :class="{
                              selected: this.store.selectedRating >= 2,
                            }"
                          ></i>
                        </label>
                      </div>
                      <div
                        class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4"
                      >
                        <input
                          class="form-check-input ms-input-style"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="3"
                          v-model="this.store.selectedRating"
                        />
                        <label class="form-check-label" for="inlineRadio3">
                          <i
                            class="fas fa-star"
                            :class="{
                              selected: this.store.selectedRating >= 3,
                            }"
                          ></i>
                        </label>
                      </div>

                      <div
                        class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4"
                      >
                        <input
                          class="form-check-input ms-input-style"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio4"
                          value="4"
                          v-model="this.store.selectedRating"
                          selected
                        />
                        <label class="form-check-label" for="inlineRadio4">
                          <i
                            class="fas fa-star"
                            :class="{
                              selected: this.store.selectedRating >= 4,
                            }"
                          ></i>
                        </label>
                      </div>

                      <div
                        class="form-check form-check-inline mx-0 position-relative fs-2 ps-0 pe-4"
                      >
                        <input
                          class="form-check-input ms-input-style"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio5"
                          value="5"
                          v-model="this.store.selectedRating"
                        />
                        <label class="form-check-label" for="inlineRadio5">
                          <i
                            class="fas fa-star"
                            :class="{
                              selected: this.store.selectedRating >= 5,
                            }"
                          ></i>
                        </label>
                      </div>
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
                        value="20"
                        v-model="this.store.howManyReviews"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        > di 20
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="80"
                        v-model="this.store.howManyReviews"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        > di 80
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="120"
                        v-model="this.store.howManyReviews"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        > di 120
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="180"
                        v-model="this.store.howManyReviews"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        > di 180
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
            <li
              v-if="$route.path === '/' || $route.path.startsWith('/blog/')"
              class="d-flex align-items-center"
              @click="goToFilteredPlayers(role)"
            >
              <i class="fa-solid fa-futbol me-2"></i>
              Players
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
  display: block !important;
  z-index: 50;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 10px;
  width: 100%;
  max-height: 0;
  opacity: 0;
  overflow-y: auto;
  top: 110%;
  list-style: none;
  transition: all 0.2s ease;
}
.show-search-dropdown {
  max-height: 200px !important;
  opacity: 1;
}

.search-dropdown li {
  padding: 10px;
  cursor: pointer;
}

.search-dropdown li:hover {
  background-color: #f2f2f2;
}

/* -------------------
  OFFCANVAS
--------------------*/
.fa-star {
  transition: all 0.2s linear;
}
.selected {
  color: gold;
  transform: scale(1.5);
}
.ms-input-style {
  position: absolute;
  top: 0;
  right: 1.75rem;
  cursor: pointer;
  opacity: 0;
  width: 1.875rem;
  height: 1.875rem;
  z-index: 100;
}
#inlineRadio0 {
  right: 50%;
}
#inlineRadio0 ~ label {
  transition: transform 0.2s ease;
}
#inlineRadio0:hover ~ label {
  transform: scale(1.2);
}
.ms-offcanvas {
  background-color: #999;
}

.ms-button-close {
  color: white;
  border: none;
  background-image: none;
}

header {
  height: 5rem;
  position: sticky;
  width: 100%;
  z-index: 500;
  top: 0;

  .top_header {
    padding: 20px;
    height: 100%;
    background-color: #111;
    box-shadow: 0px 15px 10px -15px #111;
  }
}

.header_left {
  display: flex;
  align-items: center;
  :hover {
    transition: all 0.3s ease-out;
    color: #f3e7c6;
  }
  li {
    cursor: pointer;
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
      padding: 7px;
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
      padding: 8px 0;
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
