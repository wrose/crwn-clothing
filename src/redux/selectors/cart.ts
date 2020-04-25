import { createSelector } from 'reselect';
import { StoreState } from "../reducers";
import { CartState } from "../reducers/cart";

const selectCart = (state: StoreState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart: CartState) => cart.hidden
);