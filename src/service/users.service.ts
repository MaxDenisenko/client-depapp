import api from "../api";
import { AxiosResponse } from "axios";

import { allUser } from "../models/allUsers";

class  UsersService {
    static async getUser():Promise<AxiosResponse<allUser[]>> {
        return api.get<allUser[]>('/user')
    }
}
export default UsersService