<template>
  <div class="welcome">
    <h1 class="title">Desafio QuatroPatas</h1>
    <p class="message">Seja bem-vindo ao desafio QuatroPatas da Stefanini. <br />
      Você pode remover este componente para começar. <br />      
      Boa sorte!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap');
.welcome {
  font-family: 'Nunito', sans-serif;
  text-align: center;
}
.welcome .title {
  font-size: 30px;
}
.welcome .message {
  font-size: 18px;
}
</style>
