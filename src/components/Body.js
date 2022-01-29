import React, { useContext } from 'react';
import SimpleContext from '../contect/simpleContex';
import { Alert } from 'react-bootstrap';

import Input from './Input';


const Body = ({}) => {
    const context = useContext(SimpleContext);

    const datetime = new Date().toISOString();
    return ( 
        <div className='text-center'>
            <div></div>
            <Input lable="Card Value " type="number"  
            sign="€" parameter={context.setCardValue}  
            placeholder={context.cardValue} step = "0.01"  min ="0.00" name="Card Value" value={context.cardValue} />

           <Input lable="Delivery Distance " type="number" 
           sign="m" parameter={context.setDeliveryDistance} 
           placeholder={context.deliveryDistance} step = ""  min ="0" name="Delivery Distance" value={context.deliveryDistance}/>

             <Input lable="Amount of items " type="number"
             parameter={context.setNumberOfItem} placeholder={context.numberOfItem} 
             step = ""  min ="0"name="Amount of items" value={context.numberOfItem}/>

            <Input lable="Delivery Time" 
             type="datetime-local" parameter={context.setOrderTime} 
             placeholder={context.orderTime} name="Delivery Time" value={context.OrderTime} /> 

        </div>
     );
}
 
export default Body;

// "YYYY-MM-DD"
 // Card Value , Delivery Distance ,Amount of items, Delivery Time