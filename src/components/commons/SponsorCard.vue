<script>
    export default {
        
    }
</script>

<template>
    <div class="wrapper">
        <div class="item d-flex">
          <div class="item_img">
              <img src="src/assets/placeholder.png" alt="">
          </div>
          <div class="item_text">
              <div class="item_name">
                  <h1 class="fw-bold">MARCO CAZZI</h1>
              </div>
              <div class="item_bottom">
                  <div class="item_role d-flex align-items-center">
                      <h2>ATTACCANTE</h2>
                  </div>
                  <div class="item_star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item{
    width: 500px;
    height: 200px;
    .item_img{
        margin-right: 10px ;
        position: relative;
        border-radius: 50%;
        background-color: white;
        width: 55px;
        height: 50px;
        text-align: center;
        img{
            padding: 5px;
            width: 40px;
        }
    }
    .item_text{
        height: fit-content;
        background-color: white;
        width: 100%;
        border-radius: 0 20px 0px 20px;
        .item_name{
            padding: 10px;
            border-bottom: 3px solid goldenrod;
            background:linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
        }
        .item_bottom{
            height: 100%;
            background-color: crimson;
            border-radius: 0 0 0 20px;
            border-right: 2px solid crimson ;
            border-left: 2px solid crimson ;
            border-bottom: 2px solid crimson ;
            .item_role{
                padding-left: 10px;
                padding-top: 5px;
            }
            .item_star{
                padding-left: 20px;
                padding-top: 20px ;
                i{
                    color: goldenrod;
                    font-size: 25px;
                }
            }

        }
    }
    
}


</style>