import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_LINK_ID_FAILURE, CREATE_PAYMENT_LINK_ID_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST } from "./actionType";

export const createPaymentLink = (orderId) => async(dispatch) => {
    dispatch({type:CREATE_PAYMENT_LINK_ID_REQUEST});

    try {
        const {data} = await api.post(`/api/payments/${orderId}`,{})

        if(data.payment_link_url){
            window.location.href = data.payment_link_url;
        }
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_LINK_ID_FAILURE,payload:error.message})
    }
}

export const updatePaymentInformation = (reqData) => async(dispatch) => {
    dispatch({type:UPDATE_PAYMENT_REQUEST});

    try {
        const {data} = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`,{})

        console.log("payment information updated",data)
    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message})
    }
}

// http://localhost:3000/payment/650bdac778afd295b1e84fac?razorpay_payment_id=pay_MgBDfGxAEjQVst&razorpay_payment_link_id=plink_MgAWX3l9KclKkq&razorpay_payment_link_reference_id=&razorpay_payment_link_status=paid&razorpay_signature=80e57b74daff781ce38ac5d045f5248f737fbbfc5f1a1d0e67267be6c732acc7