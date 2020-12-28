<template>
  <div class="home">
    <div class="info">
      <h1>Negocie e Consulte suas Ações</h1>
      <p class="paragraph blue">
        <i class="fas fa-info-circle"></i>Você pode Salvar &amp; Carregar os
        Dados
      </p>
      <p class="paragraph green">
        <i class="fas fa-info-circle"></i>Clique em 'Finalizar Dia' para iniciar
        um novo dia !
      </p>
    </div>
    <div class="info-balance">
      <span>Seu Saldo: R$ {{ saldo }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    saldo() {
      return this.$store.state.stock.saldo;
    }
  }
};
</script>

<style lang="sass" scoped>
.home
  margin-left: 100px

  h1
    text-align: left

.info-balance
    width: 91%
    text-align: left
    border-top: 1px solid gray

    span
      font-size: 1.3rem
      font-weight: 400


.paragraph
  max-width: 90%
  text-align: left
  padding: 10px
  color: white

  i
     margin: 0 5px

.green
  background: $green

.blue
  background: $blue
</style>
