import axios from "axios";
import {actions} from "../reducers/userReducer";

export const registration = async (email: string, password: string) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login =  (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            })
            localStorage.setItem('token', response.data.token)
            dispatch(actions.setUser(response.data.user))
            console.log(response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async (dispatch: any) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            localStorage.setItem('token', response.data.token)
            dispatch(actions.setUser(response.data.user))
            console.log(response.data)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}