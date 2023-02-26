<script>
export default {
  name: "Hero",
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
  <section class="hero">
    <div class="ms-container ">
      <div class="block-dark row g-0 w-100">
        <div class="col-lg">
          <div class="hero-content">

            <div class="text">
              "Il modo piu semplice per trovare il tuo"
              <b>giocatore</b>
              "nella tua città"
            </div>

            <a class="btn btn-primary mt-5 text-uppercase px-5 " href="http://127.0.0.1:8000/">Registrati</a>
            <a class="d-block mt-3" href="#"><img src="https://assets.fubles.com/images/home/google-play-badge.svg?v24"  style="max-width: 190px;" alt=""> </a>
            <a class="d-block mt-3" href="#"><img src="https://assets.fubles.com/images/home/app-store-badge.svg?v24"  style="max-width: 190px;" alt=""> </a>
          </div>
        </div>
        
        <div class="col-lg d-flex align-content-end flex-wrap">
          <img src="https://scontent.fbri4-1.fna.fbcdn.net/v/t1.15752-9/333747967_1407064953440614_3458858666857106804_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wzgzumz1v-EAX8BaN_Z&_nc_ht=scontent.fbri4-1.fna&oh=03_AdTWS4n-JGMEeKJv9vprs-FcdYyRr3KBhFPG-O51IHD2AQ&oe=6421A6FA" style="max-width: 100%;" alt="">
        </div>
      </div>
      
    </div>
  </section>
</template>

<!-- In qualsiasi Città c'è sempre un nuovo giocatore pronto ad indossare
          la maglia della tua squadra. -->

<style lang="scss" scoped>

    .hero{
      background-color: black;
    }

    .ms-container {
      margin: auto;
      max-width: 1200px;
      width: 100%;
    }

    .hero-content{
      color: white;
      padding: 15%;
      font-size: 35px;
      b{
        color: #f3e7c6;
      }
    }

    
  
   
   
  
</style>
