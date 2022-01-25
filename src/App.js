import React from "react";
 import { Alert, Button, Badge } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import SimpleContext from "../../personmanager/src/contex/simpleContex";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer';



const App = () => {
    // const [getPersons, setPersons] = useState([]);
    // const [getSinglePerson, setSinglePerson] = useState({ fullname: "" });
    // const [getShowDiv, setShowDiv] = useState(true);

    return (
        // <SimpleContext.Provider
        //     value={{
        //     }}>

        <div className="container">
            <div className="card" >
                <div className="card-header">
                    <Header />
                </div>
                <div className="card-body">
                    <Body/> 
                </div>
                <div className="card-footer">
                    <Footer></Footer>
                </div>

            </div>


            <Button  />
        </div>
        // </SimpleContext.Provider>


    )
}
export default App;