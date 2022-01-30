import React,{useContext} from "react";
import SimpleContext from '../contect/simpleContex';


const Input = ({lable, type, sign,parameter,step , min , name, value, placeholder, pattern, width}) => {
    const context = useContext(SimpleContext);

    return (
        <div className=' m-4'>
        <label className="d-inline-sm text-left me-3 " style={{width : "40%"}}>{lable}</label>
            <input className='d-inline-sm text-center d-block-sm'style={{width }}
            id={name}
            pattern="[1-9][0-9]"
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