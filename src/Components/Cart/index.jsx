
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import CartItem from '../CartItem'
import CartSummary from '../CartSummary'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserCart } from '../../store/Cart/action'
import { Link } from 'react-router-dom'


export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store);
  // console.log("cart page",data)
  useEffect(() => {

    dispatch(getUserCart())
    // console.log("user cart",cart)
  }, [cart.removeCartItem, cart.updateCartItem])

  const empty_cart = "https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"

  return (
    <div className="bg-white pt-6 md:pt-10">
      <div className='px-1 lg:px-0'>
        {
          cart?.cartItems[0]?.length === 0 ? 
          <div className='flex items-center justify-center py-20'>
            <div className='flex items-center justify-center flex-col'>
              <img src={empty_cart} />
              <h1 className='text-[#1E293B] font-bold text-2xl my-6'>Your Cart is Empty</h1>
              <Link to={"/"}>
                <button
                  type="button"
                  className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-xl font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200"
                >
                  Shop Now
                </button>
              </Link>
            </div>
           
          </div>
           :
            <>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Cart</h1>
            <div className="my-6 md:my-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">

              {/* Order items */}
              <section aria-labelledby="cart-heading" className="lg:col-span-7 py-4">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul role="list">
                  {cart && cart?.cartItems[0]?.map((product, productIdx) => (
                    <CartItem data={product} key={productIdx} />
                  ))}
                </ul>
              </section>

              {/* Order summary */}
              <section
                aria-labelledby="summary-heading"
                className="lg:col-span-5 py-4"
              >
                <CartSummary summary={{ discount: cart?.cart?.discount, price: cart?.cart?.totalPrice, btnText: "Checkout" }} />
              </section>
            </div>
          </>
        }

      </div>
    </div>
  )
}
