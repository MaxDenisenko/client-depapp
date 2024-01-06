import { useEffect } from 'react';
import LoginForm from './components/login.form';
import { useDispatch, useSelector } from 'react-redux';
import { AuthCheckAction } from './redux/actions/auth.action';
import ZapisList from './components/zapisList';
import Loader from './components/loader';

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state: any) => state.auth)
  useEffect(() => {
    if (localStorage.getItem('token')) {
        dispatch(AuthCheckAction())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  if(auth.isLoading) {
    return <Loader/>
  }

  if(auth.isLogin) {
    return <ZapisList/>
  }
  return <LoginForm/>
      
}

export default App;
