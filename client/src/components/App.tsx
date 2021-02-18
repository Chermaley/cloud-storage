import React, {useEffect} from 'react';
import { NavBar } from './navbar/Navbar';
import './app.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Registration} from "./Registration/Registration";
import {Login} from "./Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../reducers";
import {auth} from "../actions";

export const App: React.FC = () => {
    const isAuth = useSelector((state:AppStateType) => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
            <BrowserRouter>
                <div className="app">
                    <NavBar />
                    <div className="wrap">
                        {isAuth
                            ? <div>Auth</div>
                            : <Switch>
                                <Route path="/registration" component={Registration}/>
                                <Route path="/login" component={Login}/>
                              </Switch>
                        }
                    </div>
                </div>
            </BrowserRouter>
    )
}


