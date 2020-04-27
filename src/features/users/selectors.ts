import {createSelector} from 'reselect';
import { StoreState } from "../../store";
import { UserState } from "./reducer";

const selectUser = (state: StoreState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: UserState) => user.currentUser
);