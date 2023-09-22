import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import ProductList from './Container/ProductList/ProductList'
import CheckoutList from './Container/CheckoutList.jsx/CheckoutList'
function App() {
  

  return (
    <Routes>
        <Route path='/' element={
          <>
            <Navbar/>
            <ProductList/>
          </>
        }/>
          <Route path='/checkout' element={
          <>
            <Navbar/>
            <CheckoutList/>
          </>
        }/>
    </Routes>
  )
}

export default App
