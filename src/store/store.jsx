import { applyMiddleware, legacy_createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { customerProductReducer } from "./Product/reducer";

const rootReducers = combineReducers({
    auth:authReducer,
    store:customerProductReducer,
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))