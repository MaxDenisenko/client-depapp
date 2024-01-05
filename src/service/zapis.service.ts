import api from "../api";
import { AxiosResponse } from "axios";

class  ZapisService {
    static async getZapis():Promise<AxiosResponse> {
        return api.get('/zapis')
    }
    static async createZapis(date: any, area: any, sum: any, fioClient:any, phoneClient:any, comment:any):Promise<AxiosResponse> {
        return api.post('/zapis', {date, area, sum, fioClient, phoneClient, comment})
    }
    static async updateZapis(id: any ,date: any, area: any, sum: any, fioClient:any, phoneClient:any, comment:any):Promise<AxiosResponse> {
        return api.post('/zapis', {id, date, area, sum, fioClient, phoneClient, comment})
    }
    static async deleteZapis(id: string):Promise<AxiosResponse> {
        return api.delete(`/zapis/${id}`)
    }
}

export default ZapisService