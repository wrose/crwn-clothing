import {createSelector} from 'reselect';
import { StoreState } from "../reducers";
import { UserState } from "../reducers/users";

const selectUser = (state: StoreState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: UserState) => user.currentUser
);