import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer";
import currencyReducer from "./currency-reducer";
import UserReducer from './user-reducer';

export const rootReducer = combineReducers({
    //cart: cartReducer,
    //currency: currencyReducer,
    userSession: UserReducer
});
