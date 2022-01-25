import React from 'react';

import Input from './Input';


const Body = () => {
    return ( 
        <div>
            <Input lable="Card Value " type="number"/>
            <Input lable="Delivery Distance " type="number"/>
            <Input lable="EAmount of items " type="number"/>
            <Input lable="Time" type="date"/>

        </div>
     );
}
 
export default Body;