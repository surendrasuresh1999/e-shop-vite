import HomePage from './Components/Home'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import { Route, Routes } from 'react-router-dom'
import CheckOut from './Components/Checkout'
import OrdersComponent from './Components/Orders'
import OrderDetails from './Components/OrderDetails'

function App() {

  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/orders' element={<OrdersComponent />} />
          <Route path='/orders/:id' element={<OrderDetails />} />
          {/* <Route path='**' element={<ProductDetails />} /> */}
        </Routes>
      </main>
    </>
  )
}

export default App
