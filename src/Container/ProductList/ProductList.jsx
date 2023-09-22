import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './productList.css'
import Product from '../../Components/Product.jsx/Product'
function ProductList() {
const [data,setData] = useState([])
const [product,setProduct] = useState('')
useEffect(()=>{
  axios.get('https://hungry-boa-blazer.cyclic.cloud/api/p1/products/list')
  .then((res)=>{
    console.log(res.data.product);
    setData(res.data.product)
  })
  .catch((err)=>console.log(err))
},[])


const handleChange = (e)=>{
  const letter = e.target.value
  setProduct(letter)

}


  return (
   <>
    <div>
    <input onChange={
      handleChange
      
    } className='input' type='text' placeholder='Enter Product Name' value={product}/>
    </div>
     <div className='productList'>
     
     {
     data.filter((item)=>{
        return product.toLowerCase() === ''?item:item.name.toLowerCase().includes(product)
     }).map((product)=>{
        return <Product key={product._id} {...product}/>
      })
     }
  </div>
   
   </>
  )
}

export default ProductList