<template>
  <div class="actions">
    <Card
      v-for="(action, index) in actions"
      :key="index"
      :title="action.name"
      buttonText="Comprar"
      titleBackgroundColor="rgb(63, 167, 63)"
      :item="action"
      @click="buy"
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
    actions() {
      return this.$store.state.stockexchange.actions;
    }
  },
  methods: {
    ...mapActions(["buy"])
  }
};
</script>

<style lang="sass" scoped>
.actions
  @include flexWrap
</style>
