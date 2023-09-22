import React, { useMemo } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './checkoutList.css'
import {Remove_TO_Basket} from '../../reducer/Action'
import { useGlobalContext } from '../../context/Context'
function CheckoutList() {
  const {basket,dispatch} = useGlobalContext()
 

const removeButton = (id)=>{
  let data = basket.filter((item)=>item._id !== id)
  toast.info('🦄 One item Removed ', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  dispatch({type:Remove_TO_Basket,data})
 

}


  const totalPrise =  basket.reduce((amount,item)=>item.prise + amount,0)
console.log(totalPrise)
  return (
    <div className='checkout'>
      <div className='total'>
          <h3>Total Prise: {totalPrise}</h3>
      </div>
      {basket?.map((data)=>{
        return(
          <div className='checkout-list' key={data._id}>
              <div className='checkout-list__image'>
                  <img src={data.img} alt={data.name}/>
              </div>
              <div className='line'/>
              <div className='checkout-detail'>
                  <h3>{data.name}</h3>
                  <h4>Product Prise: {data.prise}</h4>
                  <button type='button' className='btn' onClick={()=>removeButton(data._id)}>Remove</button>
              </div>
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
      })}
    </div>
  )
}

export default CheckoutList