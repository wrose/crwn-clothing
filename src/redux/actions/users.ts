import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export interface SetCurrentUserAction {
  type: ActionTypes.setCurrentUser;
  payload: firebase.User;
}

export const setCurrentUser = (user: firebase.User) => {
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
  payload: null;
}

export const unsetCurrentUser = () => {
  return (dispatch: Dispatch) => {
    dispatch<UnsetCurrentUserAction>({
      type: ActionTypes.unsetCurrentUser,
      payload: null
    });
  }
}
