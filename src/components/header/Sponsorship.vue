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
    .carousel_card{
        top:0; bottom: 0; left: 0; right: 0;
    }

}
</style>