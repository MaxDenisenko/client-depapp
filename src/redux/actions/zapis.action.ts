import ZapisService from "../../service/zapis.service";
import { DATA_ZAPIS } from "../const";


export const GetZapis = ():any=> {
    return async (dispatch: any) => {
        try {
            const response = await ZapisService.getZapis()
            dispatch({type: DATA_ZAPIS, payload: response.data})
        } catch (error: any) {
            console.log(error.response?.data?.message);
        }
    }
}