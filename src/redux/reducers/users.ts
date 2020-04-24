import { Action, ActionTypes } from '../actions';
import { User } from "firebase";

export interface UserState {
  currentUser: User | null;
}

const INITIAL_STATE: UserState = { currentUser: null };

const userReducer = (state: UserState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload
      };
    case ActionTypes.unsetCurrentUser:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
