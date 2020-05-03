import { createAction } from "typesafe-actions";
import { CartItem } from "../shop/data";

export const toggleCartHidden = createAction('TOGGLE_HIDDEN')();
export const addItem = createAction('ADD_ITEM')<CartItem>();
export const removeItem = createAction('REMOVE_ITEM')<CartItem>();
export const clearItemFromCart = createAction('CLEAR_ITEM_FROM_CART')<CartItem>();
