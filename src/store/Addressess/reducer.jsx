import { SELECT_DELIVERY_ADDRESS_FAILURE, SELECT_DELIVERY_ADDRESS_REQUEST, SELECT_DELIVERY_ADDRESS_SUCCESS } from "./actionType"

const initialState = {
    address:null,
    error:null,
}

export const addressReducer = (state=initialState,action) => {
    switch (action.type) {
        case SELECT_DELIVERY_ADDRESS_REQUEST:
            return {...state,loading:true,error:null}
        case SELECT_DELIVERY_ADDRESS_SUCCESS:
            return {...state,loading:false,address:action.payload}
        case SELECT_DELIVERY_ADDRESS_FAILURE:
            return {...state,loading:false,error:action.payload}
        default:
            return state;
    }
}