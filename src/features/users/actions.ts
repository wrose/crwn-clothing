import { createAction } from "typesafe-actions";
import { User } from "firebase";

export const setCurrentUser = createAction('SET_CURRENT_USER')<User>();
