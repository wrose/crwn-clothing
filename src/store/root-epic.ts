import { combineEpics, Epic } from "redux-observable";
import { RootAction, StoreState } from "./index";

const rootEpic: Epic<RootAction, RootAction, StoreState, any> =
  combineEpics();//...Object.values(pingPongEpics));
export default rootEpic;