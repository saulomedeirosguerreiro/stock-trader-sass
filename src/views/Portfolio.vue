<template>
  <div class="portfolio">
    <Card
      v-for="(portfolio, index) in portfolios"
      :key="index"
      :title="portfolio.name"
      buttonText="Vender"
      titleBackgroundColor="rgb(31, 117, 197)"
      :item="{ ...portfolio, id: index }"
      @click="sell"
    />
  </div>
</template>

<script>
import Card from "../components/Card";
import { mapActions } from "vuex";
export default {
  components: {
    Card
  },
  computed: {
    portfolios() {
      return this.$store.state.stock.portfolios;
    }
  },
  methods: {
    ...mapActions(["sell"])
  }
};
</script>

<style lang="sass" scoped>
.portfolio
    @include flexWrap
</style>
