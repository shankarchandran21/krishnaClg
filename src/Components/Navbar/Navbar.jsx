import React from 'react'
import './navbar.css'
import {SlBasket} from 'react-icons/sl'
import { Link } from 'react-router-dom'
import  {useGlobalContext} from '../../context/Context'

function Navbar() {
  const {basket} = useGlobalContext()
  console.log(basket)
  return (
    <div className='container-nav'>
        <div>
           <h2>e-commerce</h2>
        </div>
          <div className='container-nav__link'>
              <Link to='/'>ProductList</Link>
              <Link to='/checkout'>Checkout</Link>
          </div>
        <div className='container-nav__basket'>
            <SlBasket fontSize={25}/>
            <p>{basket.length}</p>
        </div>
    </div>
  )
}

export default Navbar