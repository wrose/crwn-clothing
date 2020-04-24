import { Action, ActionTypes } from "../actions";
import { CartItem, ShopItem } from "../../pages/shop/shop.data";
import { addItemToCart } from "../utils/cart";

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state: CartState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.toggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ActionTypes.addItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;