<script>
import Sponsorship from './Sponsorship.vue';
export default {
  
  components: {
    Sponsorship,
  },
  name: "AppHeader",
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <section class="top_header">
      <nav class="container d-flex justify-content-between align-items-center navbar">
        <div class="header_left">
          <a class="" href="#">
            <img src="src/assets/pngwing.com.png" alt="">
          </a>
        </div>
        <div class="search_bar">
          <form action="GET" class="d-flex align-items-center">
            <label for="search">
              <button class="button_layout w-100" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </label>
            <input class="w-100" type="text" placeholder="cerca un ruolo/ una città o un giocatore">
            
          </form>
        </div>
        <div class="header_right navbar_layout">
          <ul>
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
      <Sponsorship/>
    </section>
  </header>
</template>

<style lang="scss" scoped>

  nav{
    .search_bar{
      width: 60%;
      label{
        border-radius: 10px 0 0 10px;
        color: black;
        background-color: white;
        padding: 0px 10px 0px 10px;
        height: 100%;
      }
      input{
        outline: none;
        border-left: 1px solid black ;
        text-align: center;
        border-radius: 0px 10px 10px 0 ;
      }
    }
    color: grey;
    .header_left{
      width: max-content;
      img{
        width: 80px;
      }
    }
  }

  .sponsored_player{
    padding-top: 200px;
  }


</style>
