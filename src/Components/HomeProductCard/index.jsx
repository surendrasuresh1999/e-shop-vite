
const HomeProductCard = (props) => {
  return (
    <div className='border border-gray-300 md:mx-4 rounded-lg'>
        <div className="h-[20rem]">
          <img
                src={props.data.imageUrl || props.data.image}
                alt="surendra"
                className='h-full w-full object-cover rounded-t-lg object-left-top'
              />
        </div>
        
        <div className='px-2 md:px-2 py-2'>
            <h1 className="text-lg font-medium text-gray-900">{props.data.brand}</h1>
            {props.data.title2 !== undefined ? <h1 className="text-lg font-medium text-gray-900 truncate">{props.data.title}</h1>:<p className="my-2 text-sm text-gray-700 truncate">{props.data.title}</p>}
            {props.data.title2 && <p className="my-2 text-sm text-gray-700 truncate">{props.data.title2}</p>}
        </div>
    </div>
  )
}

export default HomeProductCard;