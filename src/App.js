import React from "react";
 import { Alert, Button, Badge } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import SimpleContext from "../../personmanager/src/contex/simpleContex";

import Header from "./components/Header";


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
                    <div>
                        <label className="">Card Value
                        </label>
                        <input
                                type="number"
                                name="age"
                            // value={inputs.age || ""}
                            // onChange={handleChange}
                            />

                    </div>
                    <div>
                        <label>Delivery Distance
                        </label>
                        <input
                                type="number"
                                name="age"
                            // value={inputs.age || ""}
                            // onChange={handleChange}
                            />

                    </div>
                    <div>
                        <label>EAmount of items
                        </label>
                        <input
                                type="number"
                                name="age"
                            // value={inputs.age || ""}
                            // onChange={handleChange}
                            />

                    </div>
                    <div>
                        <label>Time
                        </label>
                        <input
                                type="date"
                                name="age"
                            // value={inputs.age || ""}
                            // onChange={handleChange}
                            />

                    </div>



                </div>
                <div className="card-footer"></div>

            </div>


            <Button  />
        </div>
        // </SimpleContext.Provider>


    )
}
export default App;