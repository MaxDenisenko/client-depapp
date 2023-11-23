import { useEffect } from 'react';
import LoginForm from './components/login.form';
import { useDispatch, useSelector } from 'react-redux';
import { AuthCheckAction } from './redux/actions/auth.action';
import ZapisList from './components/zapisList';

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
      <h1>{auth.isLogin ? <ZapisList/> : <LoginForm/>}</h1>
      
    </>
  );
}

export default App;
