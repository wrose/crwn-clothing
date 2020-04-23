import { userReducer, UserState } from "./users";
import { combineReducers } from "redux";

export interface StoreState {
  user: UserState;
}

export const reducers = combineReducers<StoreState>({
  user: userReducer
});