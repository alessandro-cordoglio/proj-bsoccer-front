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
    
    <div class="ms-container">
      
      <div class="row mb-3 gy-3">
        <div class="col-sm-12 col-md-6">
          <div class=" ms-title-footer fw-bold mb-2">Iscriviti alla nostra Community</div>
          <ul class="d-flex list-unstyled ">
            <li class=" pe-3"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li class="pe-3"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li class="pe-3"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>

        <div class="col-12 col-sm-6 col-lg-2 ms-col ms-color text-sm-center text-md-start">
              <h5 class="fw-bold ms-color" >Info</h5>
              <a class=" text-decoration-none" href="#"><p>Scarica</p></a>
              <a href="#" class=" text-decoration-none"><p>Perche BSoccer</p></a>
              <a href="#" class=" text-decoration-none"><p>Sicurezza</p></a>
              <a href="#" class=" text-decoration-none"><p>Assistenza</p></a>
        </div>

        <div class="col-12 col-sm-6 col-lg-2 ms-col text-sm-center text-md-start">
            <h5 class="fw-bold ms-color" >Chi Siamo</h5>
            <a class=" text-decoration-none" href="#"><p>Lavora con noi</p></a>
            <a class=" text-decoration-none" href="#"><p>Marchio</p></a>
            <a href="#" class=" text-decoration-none"><p>BSoccer</p></a>
            <a href="#" class=" text-decoration-none"><p>Redazione</p></a>
            <a href="#" class=" text-decoration-none"><p>Negozio</p></a>
        </div>

        <div class="col-12 col-sm col-lg-2 ms-col text-sm-center text-md-start">
            <h5 class="fw-bold ms-color" >Lavora con Noi</h5>
            <a class=" text-decoration-none" href="#"><p>Scarica</p></a>
            <a href="#" class=" text-decoration-none"><p>Perche BSoccer</p></a>
            <a href="#" class=" text-decoration-none"><p>Sicurezza</p></a>
            <a href="#" class=" text-decoration-none"><p>Assistenza</p></a>
        </div>
          
      </div>

      <div class="footer-bar d-flex align-items-center justify-content-between ">
        <div class="card-logo">
          <img class=" img-fluid" src="src/assets/pngwing.com.png" alt="">
        </div>
        <div class="button">
          <a class="btn ms-btn" href="#">REGISTRATI</a>
        </div>
      </div>

    </div>
    
  </footer>
</template>

<style lang="scss" scoped>

  footer {
    color: white;
    padding: 30px 20px;
    padding-bottom: 10px;
    background-size: 180px;
    margin: auto;
    border-top: 1px solid #f3e7c6;
        
          
    
         .ms-container {
          margin: auto;
          max-width: 1200px;
          width: 100%;
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

        .footer-bar{
          padding: 5px 0;
          border-top: 1px solid #f3e7c6;
        }
  }

      
</style>
