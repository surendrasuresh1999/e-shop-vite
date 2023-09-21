import { AiOutlineDelete } from "react-icons/ai";

const AddressCard = (props) => {
    const {firstName,lastName,mobile,zipCode,streetAddress,state} = props?.data?.address;
  return (
    <div className='py-6'>
        <div className='rounded-lg border border-gray-200 pt-2'>
            <div className='px-3 py-3 pb-2'>
                <div className='flex justify-between items-start'>
                <h3 className='text-gray-800 font-medium text-base'>Deliver to: {firstName}{" "}{lastName}</h3>
                </div>
                <p className='text-gray-800 font-medium text-base'>{streetAddress},{" "}{zipCode},{" "}{state}</p>
                <p className='text-gray-800 font-medium text-base'>{mobile}</p>
            </div>          
        </div>
    </div>
  )
}

export default AddressCard;