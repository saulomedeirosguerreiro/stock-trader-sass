export default {
  sell(state, payload) {
    state.saldo += payload.item.price * payload.amount;
    state.portfolios.splice(payload.item.id, 1);
  },
  decrementAmount(state, payload) {
    state.saldo += state.portfolios[payload.item.id].price * payload.amount;
    state.portfolios[payload.item.id].amount -= payload.amount;
    state.portfolios = [...state.portfolios];
  },
  buy(state, payload) {
    state.saldo -= payload.item.price * payload.amount;
    state.portfolios.push(payload.item);
  },
  incrementAmount(state, payload) {
    state.saldo -= state.portfolios[payload.id].price * payload.amount;
    state.portfolios[payload.id].amount += payload.amount;
    state.portfolios = [...state.portfolios];
  }
};
