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
            return {
                players:[
                    {
                        "name": "Matteo Castori",
                        "role": "Attaccante",
                        "rate": '3' 
                    },
                    {
                        "name": "Matteo Bisonit",
                        "role": "Difensore",
                        "rate": '5' 
                    },
                    {
                        "name": "Lugia Castori",
                        "role": "Centrocampista",
                        "rate": '2'
                    },
                    {
                        "name": "Mamma Mamma",
                        "role": "Attaccante",
                        "rate": '5' 
                    },
                    {
                        "name": "Maradona",
                        "role": "Cecchino",
                        "rate": '5' 
                    },
                    {
                        "name": "Matteo Castori",
                        "role": "Attaccante",
                        "rate": '3' 
                    }
                ]
            };
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
                <SponsorCard
                    v-for="player in players"
                    :name="player.name"  
                    :role="player.role"
                    :rate="player.rate"  
                />
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
        width: 700px;
        height: calc(100% - 160px);
        top:140px; bottom: 0px; left: 0px; right: 0px;
        overflow-y:scroll;
        .sponsor_card{
            position: absolute;
            top: 0px; bottom: 0; left: 30px; right: 0;
            width: min-content;
            height: min-content;
        }
    }

}
</style>