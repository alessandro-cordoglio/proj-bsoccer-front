<script>
export default {
  name: "PlayerCard",
  data() {
    return {};
  },
};
</script>

<template>
  <section class="player-card">
    <div class="card">
      <div class="card-top">
        <img
          src="https://media.licdn.com/dms/image/C5603AQHxaq0QqYCwcA/profile-displayphoto-shrink_800_800/0/1537560592777?e=2147483647&v=beta&t=jEK2x0KzdgVAXg6iVGIMpIWxv21yo4SjeQkCkQbRVCU"
          alt="player-name"
        />
      </div>
      <div class="card-bottom">
        <h3>FRANCO MADRIGALI</h3>
      </div>
      <div class="left-corner"></div>
      <div class="right-corner"></div>
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.player-card {
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  .card {
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
    overflow: hidden;
    width: 300px;
    height: 500px;

    .left-corner,
    .right-corner {
      position: absolute;
      top: -25px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: white;
    }
    .left-corner {
      left: -35px;
    }
    .right-corner {
      right: -35px;
    }
    .bottom-left,
    .bottom-right {
      position: absolute;
      bottom: -2px;
      height: 60px;
      width: 50%;
      background-color: white;
    }
    .bottom-left {
      left: -1px;
      border-radius: 0 100% 0 0;
    }
    .bottom-right {
      right: -1px;
      border-radius: 100% 0 0 0;
    }
    .card-top {
      height: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .card-bottom {
      height: 50%;
      padding: 10px 20px;
      background-image: linear-gradient(
        to right bottom,
        #fdf9e4,
        #e4dcb3,
        #d4cc9f,
        #d9cd9a,
        #cebf7f,
        #bfaf70,
        #b09f60,
        #a19052,
        #928143
      );
      h3 {
        font-size: 26px;
        padding-bottom: 10px;
        border-bottom: 1px solid #746b43;
      }
    }
  }
}
</style>
