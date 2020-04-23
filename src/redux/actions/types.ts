import { SetCurrentUserAction, UnsetCurrentUserAction } from "./users";

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T, payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export enum ActionTypes {
  setCurrentUser,
  unsetCurrentUser
}

export type Action = SetCurrentUserAction | UnsetCurrentUserAction;