export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};
export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
