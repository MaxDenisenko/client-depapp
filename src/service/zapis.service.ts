import api from "../api";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/auth.response";

class  ZapisService {
    static async getZapis():Promise<AxiosResponse> {
        return api.get('/zapis')
    }
    static async createZapis(date: any, area: any, sum: any, fioClient:any, phoneClient:any, comment:any):Promise<AxiosResponse> {
        return api.post('zapis', {date, area, sum, fioClient, phoneClient, comment})
    }
}

export default ZapisService