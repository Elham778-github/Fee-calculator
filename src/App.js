import React, { useState, useContext } from "react";
import { Alert, Button, Badge, Placeholder } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'animate.css';
import Radium from "radium";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer';
import SimpleContext from "./contect/simpleContex";

import "./App.css"

const App = () => {
    const [cardValue, setCardValue] = useState(0);
    const [deliveryDistance, setDeliveryDistance] = useState(0);
    const [numberOfItem, setNumberOfItem] = useState(0);
    const [orderTime, setOrderTime] = useState("");
    const [gift, setGift] = useState(false);
    var [price, setPrice] = useState(0);


    const context = useContext(SimpleContext);


    const handleCalculate = () => {
        price = 0;  // .............................

        let deliveryPrice = price;
        let distance = deliveryDistance;
        let time = orderTime;

        if (cardValue && deliveryDistance && cardValue && numberOfItem && orderTime) {
            if (cardValue >= context.priceFreeDelivery) {
                setGift(!gift);
                deliveryPrice = 0;
            } else {

                if (cardValue < 10) {
                    deliveryPrice += (10 - cardValue);
                }

                deliveryPrice += 2;
                distance -= 1000;
                while (distance > 0) {
                    deliveryPrice += 1;
                    distance -= 500;
                }

                if (numberOfItem > 4) {
                    for (let i = 4; i < numberOfItem; i++) {
                        deliveryPrice += 0.50;
                    }
                }

                time = new Date(time);
                const day = time.getUTCDay();
                const hour = time.getHours();
                const minute = time.getMinutes()

                if (day == 5 && hour >= 15) {
                    if (hour <= 18 && minute < 59) {
                        deliveryPrice = (deliveryPrice * 1.1);
                    }
                }

                if (deliveryPrice > 15) {
                    deliveryPrice = 15;
                }
            }
            setPrice(
                isFloat(deliveryPrice) ? deliveryPrice.toFixed(2) : deliveryPrice
            );
        }
        else {
            toast.warning(" please fill in all fields", {
                position: "top-center",
                closeButton: "true",

            })
        }
    }


    const setEvent = (event, parametr) => {
        let value = event.target.value;
        const name = event.target.name;
        if (name == "Card Value" || name == "Delivery Distance" || name == "Amount of items") {
            if (value < 0 || value == NaN) {
                value = 0;
                parametr(value);
                toast.warning(" please enter a positive value in " + name, {
                    position: "top-center",
                    closeButton: "true",

                })

                // alert(" please enter a corect input in " + name);
                var b = document.querySelector(`#${name}`)
                b.setAttribute("value", "0");
            } else parametr(value);
        } else {
            parametr(value);
        }
    }
    function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }


    return (
        <SimpleContext.Provider
            value={{
                cardValue: cardValue,
                deliveryDistance: deliveryDistance,
                numberOfItem: numberOfItem,
                orderTime: orderTime,
                gift: gift,

                setCardValue: setCardValue,

                price: price,
                setDeliveryDistance: setDeliveryDistance,
                setCardValue: setCardValue,
                setNumberOfItem: setNumberOfItem,
                setOrderTime: setOrderTime,
                setEvent: setEvent
            }}>

            <ToastContainer />
            <div className="container mx-auto my-5 px-auto py-auto w-50 ">
                <form className="card  " >
                    <div className="card-header m-0 p-0">
                        <Header />
                    </div>
                    <div className="card-body">
                        <Body setDeliveryDistance={setDeliveryDistance} />
                        <Footer ></Footer>
                    </div>
                    <div className="card-footer  form-header">
                        <Button variant="" className="calculate-btn d-block mx-auto shadow-lg p-3" onClick={handleCalculate}><strong>Calculate Delivery Price </strong> </Button>
                    </div>
                </form>

            </div>
        </SimpleContext.Provider>

    );
}
export default Radium(App);




