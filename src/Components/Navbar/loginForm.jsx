import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/Auth/action'
import Toaster from '../Toaster/toaster'

const LoginForm = (props) =>  {
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formData))
    props.closeFun(false)
    props.openRegister(false)
    setFormData({email:"",password:""})
    navigate("/")
  }

  const handleNavigate = () => {
    navigate("/register")
  }

  const closeLogin = () => {
    props.closeFun(false)
    props.openRegister(false)
  }

  return (
    <Transition.Root show={props.status} as={Fragment}>
      <Dialog as="div" className="relative z-[80]" onClose={closeLogin}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <h2 className="text-center mb-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>

                        <div className='my-2 md:my-4'>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleOnchange}
                                id="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter Your Email"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                type="password"
                                name="password"
                                onChange={handleOnchange}
                                value={formData.password}
                                id="password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="password"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="my-3 md:my-5 inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2" 
                    >
                        Login
                    </button>
                </form>
                <div className='flex items-center justify-center gap-3'>
                    <p className="font-bold leading-9 tracking-tight text-gray-900">if you don't have account ?</p>
                    <button onClick={handleNavigate}  className='text-indigo-600 text-base font-semibold'>Register</button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default LoginForm;