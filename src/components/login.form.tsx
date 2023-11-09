import React, {FC, useState} from "react";
import { AuthLoginAction } from "../redux/actions/auth.action";
import { useDispatch } from "react-redux";

const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return <>
        <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={()=> {
            dispatch(AuthLoginAction(email, password))
            console.log(email, password)
        }
    }>Login</button>
    </>
}

export default LoginForm