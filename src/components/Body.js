import React, { useContext } from 'react';
import SimpleContext from '../contect/simpleContex';

import Input from './Input';


const Body = ({ }) => {
    const context = useContext(SimpleContext);

    const datetime = new Date().toISOString();
    return (
        <div className='d-block mx-auto'>

            <div className=' mx-auto' style={{ width: "85%" }}>
                <Input lable="Card Value" type="number"
                    sign="€" parameter={context.setCardValue}
                    placeholder={context.cardValue} step="0.01" min="0.00" name="Card Value" value={context.cardValue} width="30%" />

                <Input lable="Delivery Distance" type="number"
                    sign="m" parameter={context.setDeliveryDistance}
                    placeholder={context.deliveryDistance} step="" min="0" name="Delivery Distance" value={context.deliveryDistance} width="30%" />

                <Input lable="Amount of items" type="number"
                    parameter={context.setNumberOfItem} placeholder={context.numberOfItem}
                    step="" min="0" name="Amount of items" value={context.numberOfItem} width="30%" />

                <Input lable="Delivery Time"
                    type="datetime-local" parameter={context.setOrderTime}
                    placeholder={context.orderTime} name="Delivery Time" value={context.OrderTime} width="50%" />

            </div>
        </div>

    );
}

export default Body;

