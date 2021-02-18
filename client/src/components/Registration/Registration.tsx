import React, {useState} from "react";
import './registration.scss'
import {Input} from "../../utils/input/Input";
import {registration} from "../../actions";

export const Registration: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = () => {
        registration(email, password);
    }

    return (
        <div className="authorization">
            <div className="registration__header">Registration</div>
            <Input value={email} setValue={setEmail} type='email' placeholder='Enter your email'/>
            <Input value={password} setValue={setPassword} type='password' placeholder='Enter your password'/>
            <button onClick={onSubmitHandler} className="registration__btn">Зарегестрироваться</button>
        </div>
    )
}