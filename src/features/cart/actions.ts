import { createAction } from "typesafe-actions";
import { CartItem } from "../../pages/shop/shop.data";

export const toggleCartHidden = createAction('TOGGLE_HIDDEN')();
export const addItem = createAction('ADD_ITEM')<CartItem>();
