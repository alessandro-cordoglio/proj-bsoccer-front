<script>
import { store } from "../../store";
export default {
  name: "WelcomePage",
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.removeWelcome();
  },
  methods: {
    removeWelcome() {
      setTimeout(() => {
        this.store.welcomeActive = true;
      }, 6000);
    },
  },
};
</script>

<template>
  <div
    class="animation-container"
    :class="{ 'remove-welcome': this.store.welcomeActive }"
  >
    <div class="ball"></div>
    <div class="logo-container">
      <div class="logo">B-SOCCER</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animation-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
  background-image: url("https://www.teleregionemolise.it/wp-content/uploads/2016/10/campo-calcio.jpg");
  background-size: cover;
  z-index: 1000;
  transition: top 0.3s ease;
}
.remove-welcome {
  top: -100% !important;
}
.ball {
  position: absolute;
  top: 45%;
  left: -100px;
  width: 100px;
  height: 100px;
  background-image: url("https://www.freeiconspng.com/thumbs/soccer-ball-png/soccer-ball-png-19.png");
  background-size: contain;
  background-repeat: no-repeat;
  animation: roll 3s linear;
}

.logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: zoom 3s ease-in-out 2s forwards;
}

.logo {
  font-size: 48px;
  font-weight: bold;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #f00,
    #ff0,
    #0f0,
    #0ff,
    #00f,
    #f0f,
    #f00
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: color 6s linear infinite;
}

@keyframes roll {
  0% {
    left: -50px;
  }
  20% {
    transform: rotateZ(180deg);
  }
  40% {
    transform: rotateZ(360deg);
  }
  60% {
    transform: rotateZ(540deg);
  }
  80% {
    transform: rotateZ(720deg);
  }
  99% {
    transform: rotateZ(900deg);
  }
  100% {
    left: calc(100% + 50px);
  }
}

@keyframes zoom {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(4);
  }
  100% {
    transform: translate(-50%, -50%) scale(2.5);
  }
}

@keyframes color {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 800%;
  }
}
</style>
