import React from "react";
import './navbar.scss';
import logo from '../../assets/img/logo.svg';
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../reducers";
import {actions} from "../../reducers/userReducer";

export const NavBar: React.FC = () => {
    const isAuth = useSelector((state:AppStateType) => state.user.isAuth)
    const dispatch = useDispatch();

    const onLogout = () => {
        localStorage.removeItem('token')
        dispatch(actions.logout());
    }

    return (
        <div className={"navbar"}>
            <div className="container">
                <img src={logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">MERN CLOUD</div>
                {!isAuth && <div className="navbar__login"><NavLink to={'/login'}>Login</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to={'/registration'}>Registration</NavLink></div>}
                {isAuth && <div className="navbar__login" onClick={onLogout}>logout</div>}
            </div>
        </div>
    )
}
