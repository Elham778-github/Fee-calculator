import React,  {createContext}from 'react';

const SimpleContext= createContext({
    state : {},
    handleValuePrice :()=>{},
    handleDistance :()=>{},
    handleItemsAmount :()=>{},
    handleDay : () =>{},
    setEvent : ()=>{},
    


 })
export default SimpleContext;
