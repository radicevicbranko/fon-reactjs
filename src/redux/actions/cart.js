import { CartActions } from "./actionTypes";

export const addToCart = item => {
  return {
    type: CartActions.ADD_TO_CART,
    item
  };
};

export const onOrderPlaced = () => {
  return {
    type: CartActions.ON_ORDER_PLACED
  };
};

export const placeOrder = () => {
  return async (dispatch, getState, axios) => {
    const result = await axios.post("/place-order", getState().cart.cartItems);
    if (result.status === 200) {
      dispatch(onOrderPlaced());
    }
  };
};
