import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import stock from "./stock";
import stockexchange from "./stockexchange";

const store = new Vuex.Store({
  modules: { stock, stockexchange }
});

export default store;
