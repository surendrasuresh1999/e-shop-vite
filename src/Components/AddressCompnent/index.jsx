import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/20/solid'
import { PlusIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import address from "../../assets/no-address.svg";
import {AiOutlineDelete} from "react-icons/ai";
import {BiSolidEdit} from "react-icons/bi";


const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]

const countrys = [
  {
    id:1,
    value:"India",
    label:"INDIA"
  },
  {
    id:2,
    value:"London",
    label:"UK"
  },
  {
    id:3,
    value:"United States",
    label:"USA"
  },
  {
    id:4,
    value:"Australia",
    label:"AUS"
  }

]

const projects = [
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AddressComponent() {
  const [showForm,setShowForm] = useState(false)
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    address:"",
    city:"",
    country:"",
    state:"",
    postalCode:"",
    phone:"",
  })
  const [addressArray, setAddressArray] = useState([]); 
  const [selectedMailingLists, setSelectedMailingLists] = useState([
    { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
    { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
    { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  ])


  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let userAddressObj = {...formData,id:addressArray.length+1}
    setAddressArray((prevAddressArray) => [...prevAddressArray, userAddressObj]);
    setFormData({
      firstName:"",
      lastName:"",
      address:"",
      city:"",
      country:"",
      state:"",
      postalCode:"",
      phone:"",
    })
  }

  const renderAddressForm = () => {
    return(
      <div>
        <h2 className="text-lg md:text-2xl font-medium text-gray-900">Shipping information</h2>
        <form className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4" onSubmit={(e) => handleFormSubmit(e)}>
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                onChange={handleOnchange}
                id="first-name"
                name="firstName"
                value={formData.firstName}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                onChange={handleOnchange}
                id="last-name"
                name="lastName"
                value={formData.lastName}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <div className="mt-1">
              <input
                type="text"
                onChange={handleOnchange}
                name="address"
                id="address"
                value={formData.address}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                onChange={handleOnchange}
                name="city"
                id="city"
                value={formData.city}
                autoComplete="address-level2"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <div className="mt-1">
              <select
                id="country"
                onChange={handleOnchange}
                name="country"
                value={formData.country}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {
                  countrys.map((country,index)=>(
                    <option key={index} value={country.value}>{country.label}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State 
            </label>
            <div className="mt-1">
              <input
                type="text"
                onChange={handleOnchange}
                name="state"
                id="state"
                value={formData.state}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
              Postal code
            </label>
            <div className="mt-1">
              <input
                type="number"
                onChange={handleOnchange}
                name="postalCode"
                id="postal-code"
                value={formData.postalCode}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1">
              <input
                type="Number"
                onChange={handleOnchange}
                name="phone"
                id="phone"
                value={formData.phone}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="rounded-md bg-indigo-50 px-3.5 py-2.5 border-blue-500 border text-sm font-semibold text-indigo-600 hover:text-white shadow-sm hover:bg-indigo-500"
            >
            Save
          </button>

          <button
            type="button"
            onClick={()=>setShowForm(false)}
            className="rounded-md border border-red-500 bg-red-100 px-3.5 py-2.5 text-sm font-semibold text-red-500 hover:text-white shadow-sm hover:bg-red-500"
            >
            Cancel
          </button>        
        </form>
      </div>
    )
  }

  const handleDeleteAddress = (id) => {
    const filteredAdress = selectedMailingLists.filter((address)=>address.id !== id)
    setSelectedMailingLists(filteredAdress)
  }

  const renderAddressCard = () => {

    return (
      <>
        {
          selectedMailingLists.map((data)=>(
            <div className='px-3 py-3' key={data.id}>
            <div className='rounded-lg border border-gray-200 pt-2'>
              <div className='px-2 pb-2'>
                <div className='flex justify-between items-start'>
                  <h3 className='text-gray-800 font-medium text-base'>Deliver to: Surendra parla kuruva</h3>
                  <button onClick={()=>handleDeleteAddress(data.id)}>
                    <AiOutlineDelete className='h-4 w-4' fill='red'/>
                  </button>
                </div>
                <p className='text-gray-800 font-medium text-base'>address will display here</p>
                <p className='text-gray-800 font-medium text-base'>7997856276</p>
              </div>          
              <div className='border-t border-gray-200 flex items-center justify-between px-2 py-2'>
                <div className='flex items-center gap-2'>
                  <input type="radio" id={`choose${data.id}`} name="addressSelection"/>
                  <label htmlFor={`choose${data.id}`} className='text-gray-800 font-medium cursor-pointer text-base'>Choose</label>
                </div>
                <BiSolidEdit className='h-4 w-4' fill='green'/>
              </div>
            </div>
          </div>
          ))
        }
      </>
    )
  }

  const renderNoAddress = () => {
    return(
      <div className='flex flex-col justify-center items-center'>
        <img src={address} alt='address' className='h-72 w-72' />
        <h1 className='text-lg lg:text-2xl text-gray-400 font-medium lg:font-bold my-3'>No Address Are Saved</h1>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <div className="lg:px-8">
        <h2 className="sr-only">Checkout</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 py-8 lg:py-20">
        
          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg md:text-2xl font-medium text-gray-900">Your Address</h2>
            
            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              {
                addressArray.length !== 0 ? renderAddressCard() : renderNoAddress()
              }
            </div>
          </div>
          {
            showForm ? renderAddressForm() : 
            <div className='flex items-center justify-center py-20 lg:py-0'>
                <button
                type="button"
                onClick={()=>setShowForm(true)}
                className="flex items-center gap-2 rounded-lg bg-indigo-600 p-2 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                <PlusIcon className="h-5 w-5 bg-indigo-100 rounded-full p-1" fill='#000000' aria-hidden="true" />
                <span className='text-white font-semibold'>Add Address</span>
              </button> 
            </div>
          }
        </div>
      </div>
    </div>
  )
}
