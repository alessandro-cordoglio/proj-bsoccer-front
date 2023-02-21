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
    width: 300px;
    height: 500px;
    // background-color: rgb(144, 255, 127);
    background-color: #35682d;
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
  }
}
</style>
