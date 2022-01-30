import React,  {createContext}from 'react';
import { ToastContainer, toast } from "react-toastify";


const SimpleContext= createContext({
    state : {},
    handleValuePrice :()=>{},
    handleDistance :()=>{},
    handleItemsAmount :()=>{},
    handleDay : () =>{},
    setEvent : ()=>{},
    priceFreeDelivery : 100,
    xyz : 100,
    



 })
export default SimpleContext;
