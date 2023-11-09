import React, { useEffect } from 'react';
import LoginForm from './components/login.form';
import { useDispatch, useSelector } from 'react-redux';
import { AuthCheckAction } from './redux/actions/auth.action';

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state: any) => state.auth)
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
        dispatch(AuthCheckAction())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  return (
    <>
      <h1>{auth.isLogin ? `Пользователь авторизован ${auth.user.email}` : 'Необходимо авторизоваться'}</h1>
      <LoginForm/>
    </>
  );
}

export default App;
