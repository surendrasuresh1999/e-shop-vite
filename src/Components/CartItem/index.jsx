import { useContext ,useState} from 'react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import {AiOutlineMinusSquare,AiOutlineHeart,AiOutlinePlusSquare,AiFillHeart} from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {BiRupee} from 'react-icons/bi'
// import { userContext } from '@/app/layout'
// import 'react-toastify/dist/ReactToastify.css';

const CartItem = () => {
    // const {product} = props
    // const {id,title,imageUrl,price,quantity,availability,brand,favouriteValue} = product
    // const context = useContext(userContext)
    // const [favourite,setFavourite] = useState(favouriteValue)

    // const deleteItem = () => {
    //     context.removeItem(id)
    //     toast.warning('Item removed Successfully!!')
    // }

    // const addFavourite = ()=>{
    //   setFavourite(!favourite)
    // }

    // const decreaseQuan = () =>{
    //     context.decrementCartItemQuantity(id)
    // }

    // const increaseQuan = () => {
    //     context.incrementCartItemQuantity(id)
    // }

  return (
    <div className='mb-7 cart-item rounded-lg py-2 px-2'>
    <li className="flex">
    <div className="flex-shrink-0">
      <img
        src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
        alt="surend"
        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
      />
    </div>

    <div className="ml-4 flex flex-1 flex-col gap-4 sm:ml-6">
      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        <div>
          <div className="flex justify-between">
            <h3 className="text-lg font-bold text-[#171F46]">
              white shirt
            </h3>
          </div>

          <div className="mt-1 flex items-center">
            <p className='text-[#171F46] font-semibold text-lg'>By:</p>
            <p className="ml-2 text-base font-semibold text-gray-500">surend</p>
          </div>
          
          <div className="flex items-center">
            <p className='text-[#171F46] font-semibold text-lg'>Quantity:</p>
            <p className="text-[#171F46] font-semibold ml-1">1</p>
          </div>
        <div className='flex flex-wrap gap-3 md:gap-4 mt-2'>
            <div className='flex items-center w-max'>
                <p className='text-[#171F46] font-semibold'>₹500/-</p>
            </div>
            <div className='flex items-center w-max'>
                <p className='text-[#737477] line-through font-semibold '>₹500/-</p>
            </div>
            <div className='flex items-center w-max'>
                <p className='text-green-500 font-semibold'>500 Off</p>
            </div>
        </div>
          
        </div>

        <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className='flex items-center'>
              <button className='mr-5' ><AiOutlineMinusSquare className='h-7 w-7' fill='#88929C'/></button>
              <p className='text-[#404142] font-bold text-2xl'>1</p>
              <button className='ml-5' ><AiOutlinePlusSquare className='h-7 w-7' fill='#88929C'/></button>
            </div>
          
          <div className="absolute right-0 top-0 ">
            <button type="button" className="-m-2 mt-1 mr-[3px] inline-flex text-gray-400 hover:text-gray-500" >
              <RiDeleteBin5Line className="h-6 w-6" fill='#7E7281' />
            </button>
          </div>
        </div>
      </div>
      <div className="grow flex items-center">
        <p className="flex items-center space-x-2 text-sm text-gray-700">
        <ShieldCheckIcon
            className="mr-1 h-6 w-6 flex-shrink-0 text-green-300 group-hover:text-green-700"
            aria-hidden="true"
          />
          <span className='text-sm text-gray-700'>yes</span>

        </p>
        {/* <button className='px-3 py-3 ml-3 hover:bg-gray-100 cursor-pointer rounded-md'>
          {favourite ?  <AiFillHeart className='h-7 w-7' fill='#f030a3'/> :  <AiOutlineHeart className='h-7 w-7' fill='#f030a3'/>}
        </button> */}
      </div>
    </div>
    </li>
    </div>
  )
}

export default CartItem
