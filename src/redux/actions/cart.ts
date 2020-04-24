import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export interface ToggleCartHiddenAction {
  type: ActionTypes.toggleCartHidden;
}

export const toggleCartHidden: (dispatch: Dispatch) => (dispatch: Dispatch) => void = (dispatch: Dispatch) => {
  return (dispatch: Dispatch) => {
    dispatch<ToggleCartHiddenAction>({
      type: ActionTypes.toggleCartHidden
    });
  }
}