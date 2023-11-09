import React, {FC, useState} from "react";
import { AuthLoginAction, AuthLogoutAction } from "../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";

const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state: any)=>state.auth.isLogin)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return <>
        <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={()=> {dispatch(AuthLoginAction(email, password))}}>Login</button>
        <div>{auth ? <button onClick={()=>dispatch(AuthLogoutAction())}>Logout</button> : null}</div>
    </>
}

export default LoginForm