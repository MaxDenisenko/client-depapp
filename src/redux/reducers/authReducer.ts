import { AUTH_DATA_USER } from "../const"
import { IAction } from "./types"

const initialState: any = {
    isLogin: false
}

const authReducers = (state = initialState, action: IAction) => {
    switch (action.type) {
        case AUTH_DATA_USER: 
            return {...state, ...action.payload, isLogin: !state.isLogin}
        default:
            return state
    }
}


export default authReducers