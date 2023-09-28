import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import './App.css'
import Navabar from './Component/Navabar'
export default function App() {
  return (
   <>
<BrowserRouter>
 <Navabar></Navabar>
   <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>

</BrowserRouter>
   </>
  )
}
