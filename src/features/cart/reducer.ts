import { CartItem } from "../shop/data";
import * as cart from './actions';
import { ActionType, getType } from "typesafe-actions";
import { addItemToCart, removeItemFromCart } from "./utils";

export type CartAction = ActionType<typeof cart>;

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action: CartAction) => {
  switch (action.type) {
    case getType(cart.toggleCartHidden):
      return {
        ...state,
        hidden: !state.hidden
      }
    case getType(cart.addItem):
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case getType(cart.clearItemFromCart):
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case getType(cart.removeItem):
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}


export default cartReducer;