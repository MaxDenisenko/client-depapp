import api from "../api";
import { AxiosResponse } from "axios";

import { IUser } from "../models/IUser";

class  UsersService {
    static async getUser():Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>('/user')
    }
}
export default UsersService