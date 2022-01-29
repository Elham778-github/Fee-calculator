import React,{useContext} from "react";
import SimpleContext from '../contect/simpleContex';


const Input = ({lable, type, sign,parameter,step , min , name, value, placeholder}) => {
    const context = useContext(SimpleContext);

    return (
        <div className=' justify-content-center m-3'>
        <label className="text-left" style={{width : "30%"}}>{lable}</label>
            <input className=' text-center'style={{width : "30%"}}
            id={name}
                type={type}
                step={step}
                min={min}
                name={name}
            //   value={value}
            placeholder={placeholder}
             onChange={event => context.setEvent(event, parameter)} />
            <span className='ms-3'>{sign}</span>

            
        </div>
    );
}

export default Input;