import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { ShopItem } from "../../pages/shop/shop.data";

export interface ToggleCartHiddenAction {
  type: ActionTypes.toggleCartHidden;
}

export interface AddItemAction {
  type: ActionTypes.addItem;
  payload: ShopItem;
}

export const toggleCartHidden = () => {
  return (dispatch: Dispatch) => {
    dispatch<ToggleCartHiddenAction>({
      type: ActionTypes.toggleCartHidden
    });
  }
}

export const addItem = (item: ShopItem) => {
  return (dispatch: Dispatch) => {
    dispatch<AddItemAction>({
      type: ActionTypes.addItem,
      payload: item
    });
  }
}