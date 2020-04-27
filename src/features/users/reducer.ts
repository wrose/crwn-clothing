import { User } from "firebase";
import * as user from './actions';
import { ActionType, getType } from "typesafe-actions";
export type UserAction = ActionType<typeof user>;

export interface UserState {
  currentUser: User | null;
}

const INITIAL_STATE: UserState = { currentUser: null };

const userReducer = (state: UserState = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case getType(user.setCurrentUser):
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
