import {ADD_TO_Basket,Remove_TO_Basket} from './Action'

export const reducer = (state,action)=>{
    if(action.type=== ADD_TO_Basket){
        return{...state,  basket: [...state.basket, action.item],}
    }
    if(action.type=== Remove_TO_Basket){
        return{...state, basket:action.data}
    }
}