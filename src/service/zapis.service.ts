import api from "../api";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/auth.response";

class  ZapisService {
    static async login(email:string , password: string):Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/login',{email, password})
    }
    static async registration(email:string , password: string, name: string, lastname: string):Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/registration',{email, password, name, lastname})
    }
    static async getZapis():Promise<AxiosResponse> {
        return api.get('/zapis')
    }
}

export default ZapisService