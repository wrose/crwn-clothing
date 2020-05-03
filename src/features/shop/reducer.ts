import SHOP_DATA, { ShopData } from "./data";
import * as shop from './actions';
import { ActionType } from "typesafe-actions";

export type ShopAction = ActionType<typeof shop>;

export interface ShopState {
  collections: Record<string, ShopData>;
}

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action: ShopAction) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default shopReducer;