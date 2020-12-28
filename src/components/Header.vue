<template>
  <header>
    <div class="menu-left">
      <ul>
        <span><strong>STOCK</strong>TRADER</span>
        <li><router-link to="/">INÍCIO</router-link></li>
        <li><router-link to="/portfolio">PORTIFÓLIO</router-link></li>
        <li><router-link to="/actions">AÇÕES</router-link></li>
      </ul>
    </div>
    <div class="menu-right">
      <ul>
        <li><router-link to="#finish">FINALIZAR DIA</router-link></li>
        <li><router-link to="#save">SALVAR &amp; CARREGAR</router-link></li>
        <li>
          <span>Saldo: R$ {{ saldo }}</span>
        </li>
      </ul>
    </div>
  </header>
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
header
  display: flex
  justify-content: space-between
  background: #f3f3f3
  border-bottom: 2px solid  $primaryColor
  box-shadow: 0 10px 5px grey


li
   list-style-type: none
   display: inline
   margin: 0 10px

   span
      color: gray


a
  text-decoration: none
  color: #424242
  font-weight: 400

  &:hover
   color: $primaryColor
</style>
