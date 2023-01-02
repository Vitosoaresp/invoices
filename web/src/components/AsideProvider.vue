<template>
  <div class="container-aside">
    <div class="cashforce-logo">
      <img src="../assets/cashforce.svg" alt="logo da cashforce">
    </div>

    <div class="menu">

      <div class="menu-item">
        <img src="../assets/iconHand.svg" alt="icone de mão">
        <p>Notas fiscais</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .container-aside {
    background-color: #fbfdfe;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    width: 28%;
  }

  .cashforce-logo {
    padding: 1.5rem;
  }

  .menu {
    align-items: center;
    display: flex;
    width: 100%;
  }

  .menu-item {
    border-left: #00ad8c 5px solid;
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }

  .menu-item p {
    color: #00ad8c;
    font-size: 1.2rem;
    font-family: system-ui, -apple-system, Roboto, sans-serif;
    font-weight: 500;
  }
</style>
