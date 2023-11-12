import { DATA_USER } from "../const"
import { IAction } from "./types"

const usersReducers = (state=[], action: IAction) => {
    switch (action.type) {
        case DATA_USER:
            return {
                ...state, users: {...action.payload}
            }
        default:
            return state
    }
}

export default usersReducers