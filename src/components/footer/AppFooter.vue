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
    <!-- <div class="register text-center d-flex ">
      <div class="text-content">
        <h2 class="m-0" >Unisciti alla Community</h2>
      <div class="free fw-bold my-2">It's Free!</div>
      <p class="mb-2 fw-bold">In qualsiasi Città c'è sempre un nuovo giocatore pronto ad indossare la maglia della tua squadra.</p>
      <a href="#" class="btn ms-btn ">Registrati</a>
      <small class="d-block mt-1">Copyrights 2021 Bsoccer s.r.l</small>
      </div>
    </div> -->
    <div class="ms-container">
      <div class="row mb-3 gy-3">
        <div class="col-sm-12 col-md-6">
          <div class=" ms-title-footer fw-bold mb-2">Iscriviti alla nostra Community</div>
          <ul class="d-flex list-unstyled ">
            <li class=" pe-2"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li class="pe-2"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li class="pe-2"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>

          <div class="col-sm-12 col-md-6 col-lg-2 ms-col ms-color">
                <h4 class="fw-bold ms-color" >Info</h4>
                <a class=" text-decoration-none" href="#"><p>Scarica</p></a>
                <a href="#" class=" text-decoration-none"><p>Perche BSoccer</p></a>
                <a href="#" class=" text-decoration-none"><p>Sicurezza</p></a>
                <a href="#" class=" text-decoration-none"><p>Assistenza</p></a>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-2  ms-col">
              <h4 class="fw-bold ms-color" >Chi Siamo</h4>
              <a class=" text-decoration-none" href="#"><p>Lavora con noi</p></a>
              <a class=" text-decoration-none" href="#"><p>Marchio</p></a>
              <a href="#" class=" text-decoration-none"><p>BSoccer</p></a>
              <a href="#" class=" text-decoration-none"><p>Redazione</p></a>
              <a href="#" class=" text-decoration-none"><p>Negozio</p></a>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-2 ms-col">
              <h4 class="fw-bold ms-color" >Lavora con Noi</h4>
              <a class=" text-decoration-none" href="#"><p>Scarica</p></a>
              <a href="#" class=" text-decoration-none"><p>Perche BSoccer</p></a>
              <a href="#" class=" text-decoration-none"><p>Sicurezza</p></a>
              <a href="#" class=" text-decoration-none"><p>Assistenza</p></a>
          </div>
          
      </div>

      <div class="foooter-bar d-flex row align-items-center ">
        <div class="card-logo d-flex align-items-center col-sm-12">
          <img class=" img-fluid" src="src/assets/pngwing.com.png" alt="">
        </div>
        <div class="button col-sm-12 col-md-6 ">
          <a class="btn ms-btn" href="#">REGISTRATI</a>
        </div>
      </div>

    </div>
    
  </footer>
</template>

<style lang="scss" scoped>

  footer {
    color: white;
    padding: 40px 20px;
    // padding: 40px 0;
    // background-image: url(src/assets/pngwing.com.png);
    // background-repeat: no-repeat;
    // background-position: left;
    background-size: 180px;
    margin: auto;

  //  .register{
  //   justify-content: center;
    

  //     @media screen and (max-width: 576px) {
  //     justify-content: end;
  //     margin-right: 40px;
  //     }
    

  //     .free{
  //       font-size: 60px;
  //       color: #f3e7c6;
  //     }


  //     h4, h2{
  //       color: white;
  //     }


  //     small, p {
  //       color: grey;
  //     }


  //     p{
  //       @media screen and (max-width: 1100px) {
  //       display: none;
  //       }
  //       font-size: 19px;
  //     }

  //     .ms-btn{
  //       font-size: 28px;
  //       margin: 16px 0;
  //       @media screen and (max-width: 1100px) {
  //       margin-top: 0px;
  //       }
  //       padding: 4px 60px;
  //       border-radius: 15px;
  //       color: white;
  //       // box-shadow: 1px 3px 10px 1px #35682d;
        // background-color: #35682d;
        // border: 2px solid #f3e7c6;
  //     }
  //   }


        .ms-container {
        
          margin: auto;
          width: 1100px;
        }

        .card-logo{
          width: 100px;
          height: 100px;
        }

        li a{
          font-size: 25px;
          color: white;
        }

        .ms-title-footer{
          color: #f3e7c6;
          font-size: 30px;
        }

        .ms-col{
          a {
            color: white;
          }
        }

        .ms-btn{
          background-color: #f3e7c6;
          border-radius: 10px;
          padding: 5px 30px;
        }

        .ms-color{
          color: #f3e7c6;
        }


  }

      
</style>
