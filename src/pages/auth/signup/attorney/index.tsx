import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';
import "./style.scss";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, getAttorneyCategory, signUp } from '../../../../store/auth/actions';
import { AppState } from '../../../../store/configureStore';
import Logo from '../../../../components/logo'
import Header from '../../../../parts/guest/header';
import { IAttorneyCategoryparams, IResponse } from '../../../../store/auth/types';
import { Alert } from '@material-ui/lab';

type Props = {
  history: any; 
  location:any
};

export default function SignUp(props:Props) {
  const classes = useStyles();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    dob: "",
    document: "",
    userAttorneyCategory: "",
    username: "",
    password: "",
    spinner: false,
    alert: false
  });
  const {firstName, lastName, address, phoneNumber, dob, document, userAttorneyCategory, username, password} = state;
  const info = { firstName, lastName, address, phoneNumber, dob, document, userAttorneyCategory, userRole: "attorney", username, password };
  const dispatch = useDispatch();
  const authReducer = useSelector(
    (state: AppState) => state.auth
  );
  const { attorneyCategory, authErrors, signupMessage }: { attorneyCategory: IAttorneyCategoryparams[], authErrors: IResponse, signupMessage: String } = authReducer;
  useEffect(() => {
    if(authErrors || signupMessage){
      setState({...state, alert: true});
    }
    // eslint-disable-next-line
  }, [authReducer]);
  useEffect(() => {
    dispatch(getAttorneyCategory());
    // eslint-disable-next-line
  },[]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setState({ ...state, spinner: true });
    dispatch(signUp(info));
  };
  const onCloseAlert = (event:any) => {
    setState({...state, alert: false});
  }
  const logoStyle = {
    color: "blue",
    size: "50px"
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/> 
      <Container component="main" className="card" maxWidth="xs">
      { state.alert?<Alert severity={signupMessage?"success":"error"} onClose={onCloseAlert}>{signupMessage?signupMessage:authErrors}</Alert>:""} 
        <div className={classes.paper}>
          <Logo style={logoStyle} homePath={"/"}/>
            <Typography component="h1" variant="h5">
              Attorney Sign Up 
            </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="First Name"
                name="firstName"
                // autoComplete="username"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Address"
                name="address"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <TextField
                type="date"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Date of birth"
                name="dob"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Document"
                name="document"
                autoFocus
                type="file"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <TextField
                select
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Attorney type"
                name="userAttorneyCategory"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              >
                {attorneyCategory && attorneyCategory.map((item:any) => 
                    <option style={{cursor: "pointer"}} key={item.id} value={item.name}>{item.name}</option>
                )}
              </TextField>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                autoFocus
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign up
              </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {/* Forgot password? */}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}