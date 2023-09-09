import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { actions } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import AddressComponent from '../AddressCompnent';
import OrderSummary from '../OrderSummary';
// import { useHistory } from 'react-router-dom';
const steps = [
  { id: '01', name: 'Login', href: '#', status: 'complete',stepNumber:1 },
  { id: '02', name: 'Delivery Address', href: '#', status: 'current',stepNumber:2 },
  { id: '03', name: 'Order Summary', href: '#', status: 'upcoming',stepNumber:3 },
  { id: '04', name: 'Payment', href: '#', status: 'upcoming',stepNumber:4 },
]

export default function CheckOut() {

    const location = useLocation();
    const dispatch = useDispatch();
    // const history = useHistory();
    const step = useSelector((state) => state.initialStep);

    const searchParams = new URLSearchParams(location.search);
    let initialActiveStep = searchParams.get('step');

    const [activeStep, setActiveStep] = useState(initialActiveStep);


    const handleNextStepper = () => {
        const nextStep = Number(activeStep) + 1;
        initialActiveStep++
        dispatch(actions.Next())
        setActiveStep(String(nextStep)); // Update the active step
        // updateURL(nextStep);
    }

    const handleBackStepper = () => {
        dispatch(actions.Back())
        const prevStep = Number(activeStep) - 1;
        setActiveStep(String(prevStep)); // Update the active step
        // updateURL(prevStep);
    }
    // const updateURL = (step) => {
    //     const newSearchParams = new URLSearchParams(location.search);
    //     newSearchParams.set('step', step);
    //     history.push(`?${newSearchParams.toString()}`);
    // }


  return (
    <div className='py-20'>
    <nav aria-label="Progress">
      <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {Number(activeStep) > step.stepNumber ? (
              <a href={step.href} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                </span>
              </a>
            ) : Number(activeStep) === step.stepNumber ? (
              <a href={step.href} className="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                  <span className="text-indigo-600">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div className="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
    <section>
        { step === 2 ? <AddressComponent/> : <OrderSummary /> }
    </section>
    <div className='flex gap-6'>
    <button
        type="button"
        onClick={()=>handleBackStepper()}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go Back
      </button>
      <button
        type="button"
        onClick={()=>handleNextStepper()}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Continute
      </button>
    </div>
    </div>
  )
}
