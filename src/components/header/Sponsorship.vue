<script>
import SponsorCard from "../commons/SponsorCard.vue";
import PlayerCard from "../commons/PlayerCard.vue";
    export default {
        name: "Sponsorship",
        components: {
            PlayerCard,
            SponsorCard,
        },
        data() {
            return {};
        },
    }
</script>

<template>
    <div class="background_image relative">
        <div class="img_container">
            <img src="src/assets/SponsorWallpaper.jpg" alt="">
        </div>
        <div class="hero_title absolute">
            <img src="https://fontmeme.com/permalink/230221/f085f5f243c0fbdec578539547ed3ba6.png" alt="ea-sports-font" border="0">
        </div>
        <div class="carousel_card absolute">
            <div class="sponsor_card">
                <SponsorCard/>
            </div>
            <div class="next">
                <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
            <div class="prev">
                <i class="fa-solid fa-circle-chevron-left"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background_image{
    max-height: 100%;
    .img_container{
        top: 0; bottom: 0; left: 0; right: 0; 
        filter: brightness(0.4);
        pointer-events: none;
        z-index: -200;
        img{
            width: 100%;
        }
    }
    .hero_title{
        top:20px; bottom: 0; left: 580px; right: 0;
        width: fit-content;
        height: fit-content;
    }
    .carousel_card{
        border-radius: 10px;
        width: 1000px;
        height: 600px;
        top:0; bottom: 100px; left: 450px; right: 0;
        .sponsor_card{
            position: absolute;
            top: 150px; bottom: 0; left: 200px; right: 0;
            width: min-content;
            height: min-content;
        }
        .prev, .next {
            max-width: fit-content;
            margin: 10px 0;
            position: absolute;
            cursor: pointer;
            z-index: 40;
            top: 400px;
            i{
                font-size: 30px;
                color: lightcoral;
            }
        }
        .next{
            right: 0px;
        }
    }

}
</style>