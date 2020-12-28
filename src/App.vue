<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  margin: 0
  padding: 0
  box-sizing: border-box
</style>
