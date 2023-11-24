import { DATA_USER } from "../const";
import UsersService from "../../service/users.service";

export const GetDataUsers = ():any=> {
    return async (dispatch: any) => {
        try {
            const response = await UsersService.getUser()
            dispatch({type: DATA_USER, payload: response.data})
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    }
}