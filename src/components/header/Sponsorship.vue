<script>
import PlayerCard from "../commons/PlayerCard.vue";
    export default {
        name: "Sponsorship",
        components: {
            PlayerCard,
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
                <PlayerCard />    
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
    }
    .carousel_card{
        border: 2px solid crimson;
        border-radius: 10px;
        width: 1000px;
        height: 600px;
        background-color: white;
        top:100px; bottom: 0; left: 450px; right: 0;
    }

}
</style>