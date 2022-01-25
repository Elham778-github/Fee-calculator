import React from 'react';


const Input = ({lable, type, sign,name}) => {
    return (
        <div className=' justify-content-center m-3'>
        <label className="w-25">{lable}</label>
            <input className='w-50 text-center'
                type={type}
                name={name}
            // value={inputs.age || ""}
            // onChange={handleChange}
            />
            <span className='ms-3'>{sign}</span>


        </div>
    );
}

export default Input;