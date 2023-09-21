import { SELECT_DELIVERY_ADDRESS_FAILURE, SELECT_DELIVERY_ADDRESS_REQUEST, SELECT_DELIVERY_ADDRESS_SUCCESS } from "./actionType"

export const selectDeliveryAddress = (reqData) => async (dispatch) => {
    dispatch({ type: SELECT_DELIVERY_ADDRESS_REQUEST })

    try {
        // const { data } = await api.get("/api/cart/")
        // console.log(reqData)
        dispatch({ type: SELECT_DELIVERY_ADDRESS_SUCCESS, payload: reqData })
        
    } catch (error) {
        dispatch({ type: SELECT_DELIVERY_ADDRESS_FAILURE, payload: error.message })
    }
}