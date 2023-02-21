<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
};
</script>

<template>
  <footer class="alt-color">
    <div class="register text-center ">
      <h2 class="m-0" >Unisciti alla Community</h2>
      <div class="free fw-bold my-2">It's Free!</div>
      <p class="m-0">In qualsiasi Città c'è sempre un nuovo giocatore pronto ad indossare la maglia della tua squadra</p>
      <a href="#" class="btn ms-btn my-3">Registrati</a>
      <small class="d-block">Copyrights 2021 Bsoccer s.r.l</small>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    padding: 40px 0;
    background-image: url(src/assets/pngwing.com.png);
    background-repeat: no-repeat;
    background-position: left, center;
    background-size: contain;
   .register{
      .free{
        
        font-size: 50px;
        color: #E0154A;
      }

      h4, h2{
        color: white;
      }

      small, p {
        color: grey;
      }

      .ms-btn{
        padding: 10px 60px;
        border-radius: 15px;
        color: white;
        background-color: 
        rgb(144, 255, 127);

      }


   }
    
  }
</style>
