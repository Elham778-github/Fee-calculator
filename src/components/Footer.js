import React, { useContext } from "react";

import { Alert } from "react-bootstrap";
import SimpleContext from "../contect/simpleContex";
import "../App.css";

const Footer = () => {
    const context = useContext(SimpleContext);
    return (
        <div className=" mt-5 d-block footer-alert  mx-auto shadow-lg text-white rounded">
            <div className={context.gift == false ? "" : "d-none"}>
                <Alert variant="" className="text-center">
                    <span>Delivery price: <span>{context.price}€</span></span>
                </Alert>
            </div>

            <div className={context.gift == true ? "wow slideInLeft" : "d-none"}>
                <Alert variant="" className="text-center " >
                    <p><span>Delivery price:{context.price}€</span></p>

                    <span className="shadow-lg"> Free Delivery </span>


                </Alert>

            </div>

        </div>
    );
}

export default Footer;
