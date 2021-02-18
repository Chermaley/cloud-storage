import React, {ChangeEvent} from "react";
import './input.scss'

type InputProps = {
    type: string,
    placeholder: string,
    value: string,
    setValue: (value: string) => void
}

export const Input: React.FC<InputProps> = ({type, setValue, placeholder, value}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
    }
    return (
        <input onChange={onChangeHandler} value={value} type={type} placeholder={placeholder}/>
    )
}