import { userReducer } from './user/user.reducer';
import { combineReducers } from "redux";
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
user: userReducer,
category: categoriesReducer,
cart: cartReducer,

});