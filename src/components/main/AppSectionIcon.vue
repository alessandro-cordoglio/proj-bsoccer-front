<script>
export default {
  name: "AppSectionIcon",
};
</script>

<template>
  <div class="ms-container p-4">
    <div class="row text-center block-2">
      <div class="col">
        <img src="https://assets.fubles.com/images/home/img-giuste.svg?v24" />
        <div class="ms d-none d-lg-block">Seleziona il Giocatore per ruolo</div>
      </div>

      <div class="col">
        <img src="https://assets.fubles.com/images/home/img-partite.svg?v24" />
        <div class="ms d-none d-lg-block">
          Invia un mesaggio subito al giocatore
        </div>
      </div>

      <div class="col">
        <img src="https://assets.fubles.com/images/home/img-gioca.svg?v24" />
        <div class="ms d-none d-lg-block">Scendi in campo e gioca</div>
      </div>
      <div class="col-12 d-lg-none mt-3">
        "Seleziona un ruolo del giocatore nella tua zona, ed invia subito" un
        <b>messagio</b> "con un click"
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ms-container {
  margin: auto;
  max-width: 1200px;
  width: 100%;
}

.block-2 {
  padding: 3rem 1rem;
  img {
    height: 64px;
    margin-bottom: 1rem;
  }
  .ms {
    max-width: calc(1200 / 3);
    margin: auto;
  }
}
</style>
