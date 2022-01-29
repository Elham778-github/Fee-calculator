import React, { useContext } from "react";

import { Alert } from "react-bootstrap";
import SimpleContext from "../contect/simpleContex";


const Footer = () => {
    const context = useContext(SimpleContext);
    return (
        <div className="pt-3">
            <div className={context.gift == false ? "" : "d-none"}>
                <Alert variant="info" className="text-center shadow">
                    <span>Delivery price: {context.price}€</span>
                </Alert>
            </div>

            <div className={context.gift == true ? "" : "d-none"}>
                <Alert variant="success" className="text-center shadow-lg" >
                    <span>Delivery price: {context.price}€</span>

                    <span> Free Delivery </span>


                </Alert>

            </div>

        </div>
    );
}

export default Footer;
