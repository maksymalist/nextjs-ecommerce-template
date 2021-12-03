const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.find((item) => item.id === action.payload.id)) {
        for (let i = 0; i < state.length; i++) {
          if (state[i].id === action.payload.id) {
            state[i].quantity += 1;
          }
        }
      } else {
        state = [...state, action.payload];
      }
      return state;
    case "REMOVE_FROM_CART":
      state = state.filter((item) => item.uuid !== action.payload.uuid);
      return state;
    case "CLEAR_CART":
      state = [];
      return state;
    default:
      return state;
  }
};

export default cart;
