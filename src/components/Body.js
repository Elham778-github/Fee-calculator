import React from 'react';

import Input from './Input';


const Body = () => {
    return ( 
        <div>
            <Input lable="Card Value " type="number" name="vardValue" sign="€"/>
            <Input lable="Delivery Distance " type="number" name="deliveryDistance" sign="m"/>
            <Input lable="Amount of items " name="AmountItems" type="number"/>
            <Input lable="Time"  name="time"type="date" />

        </div>
     );
}
 
export default Body;