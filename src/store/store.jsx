import { applyMiddleware, legacy_createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { customerProductReducer } from "./Product/reducer";
import { cartReducer } from "./Cart/reducer";
import { orderReducer } from "./Order/reducer";
import { addressReducer } from "./Addressess/reducer";

const rootReducers = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    address:addressReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))