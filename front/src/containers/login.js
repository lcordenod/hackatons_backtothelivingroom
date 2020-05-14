import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import NavBar from '../components/navbar';
import { Redirect } from 'react-router-dom';

let endpoint = "http://localhost:8090";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 350,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
      borderRadius: '25px !important'
    },
    header: {
      textAlign: 'center',
      color: 'black'
    },
    card: {
      marginTop: theme.spacing(10)
    }

  }),
);

const Login = () => {
  const classes = useStyles();
  const [userLogin, SetUserLogin] = useState({ email: '', password: ''});
  const [toHome, setToHome] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (userLogin.email.trim() && userLogin.password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [userLogin]);


  const handleLogin = () => {
    if (userLogin.email === 'abc@email.com' && userLogin.password === 'password') {
      setError(false);
      setHelperText('Login Successfully');
    } else {
      setError(true);
      setHelperText('Incorrect email or password')
    }
  };

  const handleSubmit = () => {
    console.log(userLogin);
/*     axios.post(endpoint + '/api/user',
    { user },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
    ); */
    if (userLogin.email === 'keanu@company.com' && userLogin.password === 'password') {
      setError(false);
      setHelperText('Login Successfully');
      setToHome(true);
    } else {
      setError(true);
      setHelperText('Incorrect username or password');
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleLogin();
    }
  };

  const handleChange = (event) => {
    SetUserLogin({...userLogin, [event.target.id]: event.target.value})
}

  return (
    <React.Fragment>
      <NavBar activeTab="login" />
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Let's get things done &#x1f4aa;" />
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="email"
                type="email"
                label="Email"
                placeholder="Email"
                margin="normal"
                onChange={(e)=>handleChange(e)}
                onKeyPress={(e)=>handleKeyPress(e)}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                helperText={helperText}
                onChange={(e)=>handleChange(e)}
                onKeyPress={(e)=>handleKeyPress(e)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={()=>handleSubmit()}
              disabled={isButtonDisabled}>
              Login
            </Button>
          {toHome ? <Redirect to='/home'/> : null}
          </CardActions>
        </Card>
      </form>
    </React.Fragment>
  );
}

export default Login;