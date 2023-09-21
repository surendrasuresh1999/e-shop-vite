import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../AddressCard/address";
import { useEffect } from "react";
import { getOrderById } from "../../store/Order/action";
import { useSearchParams } from "react-router-dom";
import CartItem from "../CartItem";
import CartSummary from "../CartSummary";
import { getUserCart } from "../../store/Cart/action";

const OrderSummary = () => {
  // 650bdac778afd295b1e84fac past order id fetch this orde details and set the order id in the search bar as beside the step value
  const orderById = "650bdac778afd295b1e84fac";
  const dispatch = useDispatch();
  const {address,cart} = useSelector(store => store);
  // console.log("cart page",data)
  useEffect(()=>{
    
    dispatch(getUserCart())
    console.log("user cart",cart)
  },[cart.removeCartItem,cart.updateCartItem])

  
 
  return (
    <>
    <AddressCard data={address} />
    <h1>user selected address should displayed here</h1>
    <div className="bg-white pt-6 md:pt-10">
      <div className='px-1 lg:px-0'>
        <div className="my-6 md:my-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">

          {/* Order items */}
          <section aria-labelledby="cart-heading" className="lg:col-span-7 py-4">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list">
              {cart && cart?.cartItems[0]?.map((product, productIdx) => (
                <CartItem data={product} key={productIdx}/>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="lg:col-span-5 py-4"
          >
            <CartSummary summary={{discount:cart?.cart?.discount,price:cart?.cart?.totalPrice,btnText:"Confirm"}}/>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderSummary;