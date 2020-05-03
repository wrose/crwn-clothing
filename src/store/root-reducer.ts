import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "../features/users/reducer";
import cartReducer from "../features/cart/reducer";
import { routerReducer } from "react-router-redux";
import directoryReducer from "../features/directory/reducer";
import shopReducer from "../features/shop/reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer);

// export default rootReducer;