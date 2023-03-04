<script>
export default {
  name: "LoadingPage",
};
</script>

<template>
  <section>
    <div>
      <h2>Caricamento Pagina!</h2>
      <div class="loading-spinner"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
}
.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s ease-in-out infinite;
  margin: auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
