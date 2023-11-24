import React, {FC, useState} from "react";
import { AuthLoginAction } from "../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
// import { GetDataUsers } from "../redux/actions/users.action";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from '../assets/img/wall_login.jpg'


function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://depapp.com/">
          DEPAPP.RU
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state: any)=>state.auth.isLogin)
    const users = useSelector((state: any) => state.users.users)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const defaultTheme = createTheme();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(AuthLoginAction(email, password))
      };

    return <>
        <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Войти
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email} 
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Вход
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Забыли пароль?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Нет аккаунта? Зарегистрируйся"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

    {/* {auth   ?   <div> 
                    <button onClick={()=>dispatch(AuthLogoutAction())}>Logout</button>
                    <button onClick={()=>dispatch(GetDataUsers())}>Get Users</button>
                    {users && users.map((user: any): any => <div key={user.email}>{user.name} - {user.lastname} - {user.email}</div>)}
                </div>
            : <div>
                <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={()=> {dispatch(AuthLoginAction(email, password))}}>Login</button>
            </div>
            } */}
    </>
}

export default LoginForm