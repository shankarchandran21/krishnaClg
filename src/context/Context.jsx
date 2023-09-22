import React from 'react'
import { createContext,useContext,useReducer } from "react";
import {reducer} from '../reducer/reducer'

const GlobalContext =createContext();
export const useGlobalContext = ()=>useContext(GlobalContext);

const initialState ={
    basket:[],
}


function Context({children}) {
    const [state,dispatch] =useReducer(reducer,initialState)
  return (
    <GlobalContext.Provider value={{...state,dispatch}}>{children}</GlobalContext.Provider>
  )
}

export default Context