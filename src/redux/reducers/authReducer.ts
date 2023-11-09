import { AUTH_DATA_USER } from "../const"
import { IAction } from "./types"

const initialState: any = {}

const authReducers = (state = initialState, action: IAction) => {
    switch (action.type) {
        case AUTH_DATA_USER: 
            return {...state, ...action.payload}
        default:
            return state
    }
}


export default authReducers