import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import userReducer from "../features/users/reducer";
import cartReducer from "../features/cart/reducer";

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;