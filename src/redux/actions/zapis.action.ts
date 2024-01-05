import ZapisService from "../../service/zapis.service";
import { CREATE_ZAPIS, DATA_ZAPIS } from "../const";


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
export const CreateZapis = (id: any, date: any, area: any, sum: any, fioClient: any, phoneClient: any, comment: any ): any => {
    return async (dispatch: any) => {
        try {
            if (id) {
                const response = await ZapisService.updateZapis(id, date, area, sum, fioClient, phoneClient, comment)    
                dispatch ({type: CREATE_ZAPIS, payload: response.data})
            }else {
                const response = await ZapisService.createZapis(date, area, sum, fioClient, phoneClient, comment)
                dispatch ({type: CREATE_ZAPIS, payload: response.data})
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch(GetZapis())
        }
    }
}
export const DeleteZapis = (id:any):any => {
    return async (dispatch: any) => {
        try {
            await ZapisService.deleteZapis(id)
            // dispatch({type: DATA_ZAPIS, payload: response.data})
        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch(GetZapis())
        }
    }
}