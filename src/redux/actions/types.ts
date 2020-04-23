import { SetCurrentUserAction, UnsetCurrentUserAction } from "./users";

export enum ActionTypes {
  setCurrentUser,
  unsetCurrentUser
}

export type Action = SetCurrentUserAction | UnsetCurrentUserAction;