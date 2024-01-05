import { DATA_ZAPIS } from "../const"
import { IAction } from "./types"

const zapisReducers = (state=[], action: IAction) => {
    switch (action.type) {
        case DATA_ZAPIS:
            return {...state, zapis: [...action.payload.map((item: any) => ({...item, date: item.date.split('T')[0]}))]}
        default:
            return state
    }
}

export default zapisReducers