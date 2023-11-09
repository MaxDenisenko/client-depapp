
import axios from "axios";
import AuthService from "../../service/auth.service";
import { AUTH_DATA_USER } from "../const";
import { API_URL } from "../../api";
import { AuthResponse } from "../../models/response/auth.response";

export const AuthLoginAction = (email: string, password: string):any=> {
    return (async (dispatch: any) => {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch({type: AUTH_DATA_USER, payload: response.data})
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    })
}
export const AuthRegistrationAction = (email: string, password: string, name: string, lastname: string):any=> {
    return (async (dispatch: any) => {
        try {
            const response = await AuthService.registration(email, password, name, lastname)
            localStorage.setItem('token', response.data.accessToken)
            dispatch({type: AUTH_DATA_USER, payload: response.data})
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    })
}
export const AuthLogoutAction = (): any => {
    return (async (dispatch: any) => {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            dispatch({type: AUTH_DATA_USER, payload: {}})
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    })
}
export const AuthCheckAction = (): any => {
    return (async (dispatch: any) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            dispatch({type: AUTH_DATA_USER, payload: response.data})
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    })
}