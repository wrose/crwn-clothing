import { Action, ActionTypes } from "../actions";

export interface CartState {
  hidden: boolean;
}

const INITIAL_STATE: CartState = {
  hidden: true
};

const cartReducer = (state: CartState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.toggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
};

export default cartReducer;