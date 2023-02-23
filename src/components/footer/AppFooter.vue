<template>
  <footer class="alt-color">
    <div class="register text-center d-flex ">
      <div class="text-content">
        <h2 class="m-0" >Unisciti alla Community</h2>
      <div class="free fw-bold my-2">It's Free!</div>
      <p class="mb-2 fw-bold">In qualsiasi Città c'è sempre un nuovo giocatore pronto ad indossare la maglia della tua squadra.</p>
      <a href="#" class="btn ms-btn ">Registrati</a>
      <small class="d-block mt-1">Copyrights 2021 Bsoccer s.r.l</small>
      </div>
      
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    padding: 40px 0;
    background-image: url(src/assets/pngwing.com.png);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 180px;
    margin: auto;
   .register{
    justify-content: center;
    
      @media screen and (max-width: 576px) {
      justify-content: end;
      margin-right: 40px;
      }
    
      .free{
        font-size: 60px;
        color: #f3e7c6;
      }

      h4, h2{
        color: white;
      }

      small, p {
        color: grey;
      }

      p{
        @media screen and (max-width: 1100px) {
        display: none;
        }
        font-size: 19px;
      
      }

      .ms-btn{
        font-size: 28px;
        margin: 16px 0;
        @media screen and (max-width: 1100px) {
        margin-top: 0px;
        }
        padding: 4px 60px;
        border-radius: 15px;
        color: white;
        // box-shadow: 1px 3px 10px 1px #35682d;
        background-color: #35682d;
        border: 2px solid #f3e7c6;

      }


    }

   
    
  }




</style>
