import { SetCurrentUserAction, UnsetCurrentUserAction } from "./users";
import { ToggleCartHiddenAction } from "./cart";

export enum ActionTypes {
  toggleCartHidden,
  setCurrentUser,
  unsetCurrentUser
}

export type Action = SetCurrentUserAction | UnsetCurrentUserAction | ToggleCartHiddenAction;