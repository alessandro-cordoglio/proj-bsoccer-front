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
        <h3 class="text-center">FRANCO MADRIGALI</h3>
        <h5>RUOLO:</h5>
        <h5>RATING:</h5>
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
  display: flex;
  justify-content: center;
  width: 100%;
  .card {
    position: relative;
    margin-top: 3.125rem;
    margin-bottom: 3.125rem;
    width: 18.75rem;
    height: 31.25rem;

    .left-corner,
    .right-corner {
      position: absolute;
      top: -1.5625rem;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: white;
    }
    .left-corner {
      left: -2.1875rem;
    }
    .right-corner {
      right: -2.1875rem;
    }
    .bottom-left,
    .bottom-right {
      position: absolute;
      bottom: -0.125rem;
      height: 3.75rem;
      width: 50%;
      background-color: white;
    }
    .bottom-left {
      left: -0.0625rem;
      border-radius: 0 100% 0 0;
    }
    .bottom-right {
      right: -0.0625rem;
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
      padding: 0.625rem 1.25rem;
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
        font-size: 1.625rem;
        padding-bottom: 0.625rem;
        border-bottom: 0.0625rem solid #746b43;
      }
      h5 {
        padding-top: 0.625rem;
      }
    }
  }
}
</style>
