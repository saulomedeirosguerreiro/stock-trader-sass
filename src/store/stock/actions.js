export default {
  sell({ commit, state }, payload) {
    if (payload.amount > 0) {
      state.portfolios[payload.item.id].amount == payload.amount
        ? commit("sell", payload)
        : commit("decrementAmount", payload);
    }
  },
  buy({ commit, state }, payload) {
    if (payload.amount > 0) {
      const portfolioIndex = state.portfolios.findIndex(
        portfolio => portfolio.name === payload.item.name
      );
      if (portfolioIndex >= 0) {
        commit("incrementAmount", {
          id: portfolioIndex,
          amount: payload.amount
        });
      } else {
        payload.item.amount = payload.amount;
        commit("buy", payload);
      }
    }
  }
};
