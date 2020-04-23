import { Action, ActionTypes } from '../actions';

export interface UserState {
  currentUser: firebase.User | null;
}

const INITIAL_STATE: UserState = { currentUser: null };

export const userReducer = (state: UserState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
