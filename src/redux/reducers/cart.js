import { CartActions } from "../actions/actionTypes";

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.item]
      };
    case CartActions.ON_ORDER_PLACED:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;
