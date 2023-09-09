import { BiRupee } from "react-icons/bi";

const ProductCard = (props) => {
    return (
      <div className='rounded-lg product-card cursor-pointer'>
          <div className="h-[20rem] md:h-[17rem]">
            <img
                  src={props.data.imageUrl}
                  alt="surendra"
                  className='h-full w-full object-cover rounded-t-lg object-left-top'
                />
          </div>
          <div className='px-2 md:px-2 py-2 bg-white rounded-b-lg content'>
            <div>
                <h1 className="text-lg font-medium text-gray-900">{props.data.brand}</h1>
                <p className="my-2 text-sm text-gray-700 truncate">{props.data.title}</p>
            </div>
            <div className='flex items-center gap-4'>
                <p className="text-lg flex items-center font-medium text-gray-900">
                  <BiRupee />
                  {props.data.price}
                </p>
                <p className="my-2 text-sm text-gray-700 line-through">{props.data.discountedPrice}</p>
                <p className="my-2 text-sm text-green-400 font-semibold ">{props.data.discountPersent}%off</p>
            </div>
          </div>
      </div>
    )
  }
  
  export default ProductCard;
