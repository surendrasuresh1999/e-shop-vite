import React, {useState} from 'react'
import {AiOutlineMinusSquare,AiOutlineHeart,AiOutlinePlusSquare,AiFillHeart} from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { removeCartItem, updateCartItem } from '../../store/Cart/action'

const CartItem = (props) => {

  const dispatch = useDispatch();

  const handleCartActions = (number) => {

    const updatedData = {data:{quantity:props.data.quantity + number},cartItemId:props.data._id}
    dispatch(updateCartItem(updatedData))

  }

  const handleRemoveItem = () => {
    dispatch(removeCartItem(props.data._id))
  }

  return (
    <div className='mb-7 cart-item rounded-lg py-2 px-2'>
    <li className="flex">
      <div className="flex-grow md:flex-shrink-0">
        <img
          src={props.data.product.imageUrl}
          alt="surend"
          className="h-24 w-24 hidden md:block rounded-md object-cover object-center sm:h-48 sm:w-48"
        />

        {/* mobile screen view */}
        <div className='block md:hidden'>
          <div className='grid grid-cols-12 gap-4'>
            <img
              src={props.data.product.imageUrl}
              alt="surend"
              className="h-24 w-24 col-span-5 rounded-md object-cover object-center sm:h-48 sm:w-48 grow"
            />
            <div className='col-span-7'>
              <h3 className="text-base col-span-6 font-bold text-[#171F46] text-ellipsis">
                {props.data.product.title}
              </h3>
              <div className="py-2 flex items-center">
                <p className='text-[#171F46] font-semibold text-sm'>Brand:</p>
                <p className="ml-2 text-sm font-semibold text-gray-500">{props.data.product.brand}</p>
              </div>
            </div>
          </div>
          
          <div className='py-2'>
            <div className="flex items-center">
              <p className='text-[#171F46] font-semibold text-lg'>Size:</p>
              <p className="text-[#6c6d75] font-semibold ml-1">{props.data.size}</p>
            </div>

            <div className='flex flex-wrap gap-3 md:gap-4 my-2'>
              <div className='flex items-center w-max'>
                  <p className='text-[#171F46] font-semibold'>₹{props.data.price}/-</p>
              </div>
              <div className='flex items-center w-max'>
                  <p className='text-[#737477] line-through font-semibold '>₹{props.data.discountedPrice}/-</p>
              </div>
              <div className='flex items-center w-max'>
                  <p className='text-green-500 font-semibold'>{props.data.product.discountPersent}% Off</p>
              </div>
            </div>

            <div className=" sm:mt-0 sm:pr-9 block md:hidden">
              <div className='flex items-center justify-between gap-4'>
                  <div className='flex items-center'>
                    <button className='mr-5' ><AiOutlineMinusSquare className='h-7 w-7' fill='#88929C'/></button>
                    <p className='text-[#404142] font-bold text-2xl'>1</p>
                    <button className='ml-5' ><AiOutlinePlusSquare className='h-7 w-7' fill='#88929C'/></button>
                  </div>
                  
                  <button onClick={handleRemoveItem} type="button" className="inline-flex text-gray-400 hover:text-gray-500" >
                      <RiDeleteBin5Line className="h-6 w-6" fill='#7E7281' />
                  </button>
              </div>
                
            </div>
          </div>
        </div>
      </div>

      {/* large screens view */}
      <div className='hidden md:block'>
        <div className="ml-4 flex flex-1 flex-col gap-4 sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-base font-bold text-[#171F46] text-ellipsis">
              {props.data.product.title}
              </h3>
            </div>

            <div className="pt-2 flex items-center">
              <p className='text-[#171F46] font-semibold text-lg'>Brand:</p>
              <p className="ml-2 text-base font-semibold text-gray-500">{props.data.product.brand}</p>
            </div>
            
            {/* <div className="flex items-center py-2">
              <p className='text-[#171F46] font-semibold text-lg'>Quantity:</p>
              <p className="text-[#6c6d75] font-semibold ml-1">{props.data.quantity}</p>
            </div> */}

            <div className="flex items-center">
              <p className='text-[#171F46] font-semibold text-lg'>Size:</p>
              <p className="text-[#6c6d75] font-semibold ml-1">{props.data.size}</p>
            </div>

            <div className='flex flex-wrap gap-3 md:gap-4 mt-2'>
                <div className='flex items-center w-max'>
                    <p className='text-[#171F46] font-semibold'>₹{props.data.price}/-</p>
                </div>
                <div className='flex items-center w-max'>
                    <p className='text-[#737477] line-through font-semibold '>₹{props.data.discountedPrice}/-</p>
                </div>
                <div className='flex items-center w-max'>
                    <p className='text-green-500 font-semibold'>{props.data.product.discountPersent}% Off</p>
                </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9 hidden md:block">
              <div className='flex items-center'>
                <button className='mr-5' onClick={()=>handleCartActions(-1)}><AiOutlineMinusSquare className='h-7 w-7' fill='#88929C'/></button>
                <p className='text-[#404142] font-bold text-2xl'>{props.data.quantity}</p>
                <button className='ml-5' onClick={()=>handleCartActions(1)}><AiOutlinePlusSquare className='h-7 w-7' fill='#88929C'/></button>
              </div>
            
            <div className="absolute right-0 top-0 ">
              <button type="button" onClick={handleRemoveItem} className="-m-2 mt-1 mr-[3px] inline-flex text-gray-400 hover:text-gray-500" >
                <RiDeleteBin5Line className="h-6 w-6" fill='#7E7281' />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

    </li>
    </div>
  )
}

export default CartItem
