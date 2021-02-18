import React, {useState} from "react";
import './Login.scss';
import {Input} from "../../utils/input/Input";
import {login} from "../../actions";
import {useDispatch} from "react-redux";

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onSubmitHandler = () => {
        dispatch(login(email, password));
    }

    return (
        <div className="authorization">
            <div className="authorization__header">Login</div>
            <Input value={email} setValue={setEmail} type='email' placeholder='Enter your email'/>
            <Input value={password} setValue={setPassword} type='password' placeholder='Enter your password'/>
            <button onClick={onSubmitHandler} className="authorization__btn">Login</button>
        </div>
    )
}