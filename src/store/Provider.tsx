"use client";
import { createContext, useReducer } from "react";

const initialState:any = []

export const Context = createContext(initialState);

const reducer = (state = initialState , action:any)=>{
    switch(action.type){
        default : return state
    }
}
export default function Provider({ children }:any) {
    const [state,dispatch] = useReducer(reducer , initialState)
  return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>;
}
