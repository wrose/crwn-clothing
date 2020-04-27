import { createSelector } from 'reselect';
import { CartItem } from "../../pages/shop/shop.data";
import { StoreState } from "../../store";
import { CartState } from "./reducer";

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

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc: number, cartItem: CartItem) => acc + cartItem.quantity * cartItem.price, 0)
)