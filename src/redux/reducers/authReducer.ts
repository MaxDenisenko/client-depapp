import { AUTH_DATA_USER, LOADER } from "../const"
import { IAction } from "./types"

const initialState: any = {
    isLogin: false,
    isLoading: false
}

const authReducers = (state = initialState, action: IAction) => {
    switch (action.type) {
        case AUTH_DATA_USER: 
            return {...state, ...action.payload, isLogin: !state.isLogin}

        case LOADER:
            return {...state, isLoading: !state.isLoading}
            
        default:
            return state
    }
}


export default authReducers