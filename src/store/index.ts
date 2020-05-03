import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from "redux-observable";
import { LocationChangeAction, RouterAction, routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { composeEnhancers } from "./utils";
import rootEpic from './root-epic';
import rootReducer from "./root-reducer";
import { applyMiddleware, createStore } from 'redux';
import { CartAction, CartState } from "../features/cart/reducer";
import { UserAction, UserState } from "../features/users/reducer";
import { DirectoryState } from "../features/directory/reducer";
import { ShopState } from "../features/shop/reducer";
import { persistStore } from 'redux-persist';
import logger from "redux-logger";

export interface StoreState {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
}

export const history = createBrowserHistory();

export type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction =
  | ReactRouterAction
  | UserAction
  | CartAction;

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  StoreState>();

const routerMiddleware = createRouterMiddleware(history);

const middlewares = [epicMiddleware, routerMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

const store = createStore(rootReducer, initialState, enhancer);

export const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export default store;