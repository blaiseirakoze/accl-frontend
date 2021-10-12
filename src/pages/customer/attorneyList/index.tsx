import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';
import { ArrowBackIos, ArrowForwardIos, ArrowRightAlt } from '@material-ui/icons';
import Header from '../../../parts/customer/header'
import { useDispatch, useSelector } from 'react-redux';
import { IGetUsersparams } from '../../../store/auth/types';
import { AppState } from '../../../store/configureStore';
import { getUsers } from '../../../store/auth/actions';
import AttorneyList from '../../../components/attorneyList'

export default function ListAttorneys() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { users }: { users: IGetUsersparams[] } = useSelector(
    (state: AppState) => state.auth
  );
  
  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/> 
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Attorneys list
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              List of all active attorneys
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <AttorneyList users={users}/>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
       <ArrowBackIos/>More Attorneys <ArrowForwardIos/>
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}