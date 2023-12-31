import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import ProductCard from '../ProductCard'
import { mens_kurta } from '../../data'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../store/Product/action'
import { addItemToCart } from '../../store/Cart/action'

const productDetails = {
  name: 'Basic Tee 6-Pack',
  price: '192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M")
  
  const value = useParams();
  const dispatch = useDispatch();

  const {product} = useSelector(store => store)
  useEffect(()=>{
    // console.log(value.id)
    dispatch(findProductsById(value.id))

  },[value.id])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {productId:value.id,size:selectedSize}
    dispatch(addItemToCart(data))
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {productDetails.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={productDetails.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {productDetails.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 py-10'>
          {/* Image gallery */}
          <div className="overflow-hidden flex justify-center rounded-lg">
              <img
                src={product?.product?.imageUrl}
                alt="product image"
                className="h-full w-full md:h-[500px] md:w-[450px] rounded-md"
              />
            </div>

          {/* Product info */}
          <div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#3e4c59] sm:text-3xl">{product?.product?.title}</h1>
              <div className="my-2 flex items-center">
                <p className='text-[#171F46] font-bold text-lg'>Brand:</p>
                <p className="ml-2 text-base font-semibold text-gray-500">{product?.product?.brand}</p>
              </div>
            </div>

            {/* Options */}
            <div className="lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className='flex items-center gap-3 md:gap-8 my-4'>
                <p className="text-3xl tracking-tight text-[#171f46]">₹{product?.product?.price}</p>
                <p className="text-3xl tracking-tight text-[#b0b0b4] line-through">₹{product?.product?.discountedPrice}</p>
                <p className="text-3xl tracking-tight text-green-500 ">{product?.product?.discountPersent}%</p>
                
              </div>
              {/* Reviews */}
              <div className='mb-3'>
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {reviews.totalCount} reviews
                    </a>
                  </div>
              </div>
              <div className="space-y-6">
                  <p className="text-base text-[#6b7280] font-semibold text-justify">{product?.product?.description}</p>
              </div>

              <form className="mt-10" onSubmit={handleSubmit}>
                {/* Colors */}
                <div>
                  <div className='flex items-center gap-3'>
                    <h3 className="text-2xl font-medium text-gray-900">Color:</h3>
                    <p className="text-xl font-medium text-slate-400">{product?.product?.color}</p>
                  </div>
                  {/* <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {productDetails.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup> */}
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a>
                  </div>

                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product?.product?.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size._id}
                          value={size}
                          disabled={size.quantity > 0}
                          className={({ active }) =>
                            classNames(
                              size.quantity
                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              active ? 'ring-2 ring-indigo-500' : '',
                              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                              {size.quantity ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add To Cart
                </button>
              </form>
            </div>

            <div className="py-6 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {productDetails.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{productDetails.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Need to implement ratings and reviews section below */}
        {/* Similar products section*/}
        <section className='pb-14 pt-4'>
          <h1 className='text-3xl text-gray-500 font-semibold'>Similar Products</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 my-4'>
              {mens_kurta.slice(0,4).map((product,index) => (
              <ProductCard key={index} data={product} /> 
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
