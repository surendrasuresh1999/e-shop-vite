import { api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./actionType"

export const createOrder = (reqData) => async(dispatch) => {
    dispatch({type:CREATE_ORDER_REQUEST})
    const address = reqData
    // console.log(address)
    try {
        const {data} = await api.post(`/api/orders`,address)

        // if(data.id){
        //     reqData.navigate({search:`step=3&order_id=${data.id}`})
        // }
        console.log("order created successfully==========>",data)

        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}

export const getOrderById = (orderID) => async(dispatch) => {
    dispatch({type:GET_ORDER_BY_ID_REQUEST})
    // console.log(orderID)
    try {
        const {data} = await api.get(`/api/orders/${orderID}`)

        dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data})

        // console.log("order fetched successfully==========>",data)
        
    } catch (error) {
        dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:error.message})
    }
}