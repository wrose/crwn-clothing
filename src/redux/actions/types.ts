import { SetCurrentUserAction, UnsetCurrentUserAction } from "./users";
import { AddItemAction, ToggleCartHiddenAction } from "./cart";

export enum ActionTypes {
  addItem,
  toggleCartHidden,
  setCurrentUser,
  unsetCurrentUser
}

export type Action = SetCurrentUserAction | UnsetCurrentUserAction | ToggleCartHiddenAction | AddItemAction;