import React, {FC, useState} from "react";
import { AuthLoginAction, AuthLogoutAction } from "../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { GetDataUsers } from "../redux/actions/users.action";

const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state: any)=>state.auth.isLogin)
    const users = useSelector((state: any) => state.users)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return <>
    {auth   ?   <div> 
                    <button onClick={()=>dispatch(AuthLogoutAction())}>Logout</button>
                    <button onClick={()=>dispatch(GetDataUsers())}>Get Users</button>
                    {users.map((user: any): any => <div key={user.email}>{user.name} - {user.lastname}</div>)}
                </div>
            : <div>
                <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={()=> {dispatch(AuthLoginAction(email, password))}}>Login</button>
            </div>
            }
    </>
}

export default LoginForm