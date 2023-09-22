import React from 'react'
import './product.css'
import { ADD_TO_Basket } from '../../reducer/Action'
import { useGlobalContext } from '../../context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Product({img,category,name,prise,_id}) {
  const {dispatch} = useGlobalContext()

  const addToBasket = ()=>{
    const item ={
     _id,
     category,
     img,
     name,
     prise
    }
    console.log(item)
    toast.info('🦄 One item Added ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
     dispatch({type:ADD_TO_Basket,item})
 }
  return (
    <div className='product'>
        <div className='product__img'>
            <img src={img} alt={name}/>
        </div>
        <div className='product__detail'>
            <h4>{name}</h4>
            <p> Product Prise: $ {prise}</p>
        </div>
        <button type='button' className='btn' onClick={addToBasket}>Add Cart</button>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  )
}

export default Product