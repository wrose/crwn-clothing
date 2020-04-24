import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { User } from 'firebase';

export interface SetCurrentUserAction {
  type: ActionTypes.setCurrentUser;
  payload: User;
}

export const setCurrentUser = (user: User) => {
  return (dispatch: Dispatch) => {
    // const response = auth.signInWithEmailAndPassword(email, password);
    dispatch<SetCurrentUserAction>({
      type: ActionTypes.setCurrentUser,
      payload: user
    })
  }
}


export interface UnsetCurrentUserAction {
  type: ActionTypes.unsetCurrentUser;
}

export const unsetCurrentUser = () => {
  return (dispatch: Dispatch) => {
    dispatch<UnsetCurrentUserAction>({
      type: ActionTypes.unsetCurrentUser
    });
  }
}
