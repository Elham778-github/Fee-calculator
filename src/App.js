import React , {useState}from "react";
import { Alert, Button, Badge } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import SimpleContext from "../../personmanager/src/contex/simpleContex";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer';
import SimpleContext from "./contect/simpleContex";



const App = () => {
    const [getValuePrice, setValuePrice] = useState();
    const [getDistance, setDistance] = useState();
    const [getItemsAmount, setItemsAmount] = useState();
    const [getTime, setTime] = useState();



    const handelValuePrice= ()=>{}
    const handelItemsAmount= ()=>{}
    const handelDistance= ()=>{}
    const handelTime= ()=>{}
    const handleCalculate= ()=>{}
    const handelPrice= ()=>{}

    const setFild = (event) => {
        // setSinglePerson( event.target.value );
      };
    


    return (
        <SimpleContext.Provider
        value={{
            valuePrice : getValuePrice,
            distance : getDistance ,
            itemsAmount : getItemsAmount,
            time : getTime,


            handelValuePrice : handelValuePrice,
            handelDistance :handelDistance,
            handelItemsAmount: handelItemsAmount,
            handelTime : handelTime,
            handleCalculate : handleCalculate,
            handelPrice : handelPrice
        }}>

            <div className="container mx-auto my-3 px-auto py-auto w-50 shadow-lg">
                <form className="card  " >
                    <div className="card-header mt-2">
                        <Header />
                    </div>
                    <div className="card-body">
                        <Body />
                    </div>
                    <div className="card-footer">
                        <Footer></Footer>
                    </div>

                </form>
                <div className="m-3">
                <Button className="d-block mb-3" >Calculate Delivery Price </Button>
                <span>Delivery price :{0} €</span>

                </div>


            </div>
        // </SimpleContext.Provider>


    )
}
export default App;