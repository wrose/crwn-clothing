import userReducer, { UserState } from "./users";
import { combineReducers } from "redux";
import cartReducer, { CartState } from "./cart";

export interface StoreState {
  user: UserState;
  cart: CartState;
}

export const reducers = combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer
});