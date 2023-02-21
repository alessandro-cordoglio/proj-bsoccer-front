<script>
    export default {
        name: "Sponsorship",
        data() {
            return {};
        },
    }
</script>

<template>
    <div class="background_image relative">
        <div class="img_container absolute">
            <img src="src/assets/SponsorWallpaper.jpg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background_image{
    .img_container{
        top: 0; bottom: 0; left: 0; right: 0; 
        filter: brightness(0.4);
        pointer-events: none;
        z-index: -200;
        img{
            width: 100%;
            
            
        }
    }

}
</style>