import React from 'react';


const Input = ({lable, type}) => {
    return (
        <div>
            <label className="">{lable}</label>
            <input
                type={type}
                name="age"
            // value={inputs.age || ""}
            // onChange={handleChange}
            />


        </div>
    );
}

export default Input;