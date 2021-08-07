import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';
import Header from '../../../../parts/guest/header'
import './style.scss';
import { BusinessCenter, EmojiPeople } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function CaseForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/> 
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Sign up as: 
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4} className="col">
                <Link to="/signup/attorney">
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      ATTORNEY
                    </Typography>
                    <Typography>
                    <BusinessCenter className="signup-icon"/>
                    </Typography>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
              <Grid xs={12} sm={6} md={4} className="col">
              <Link to="/signup/customer">
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        CLIENT
                      </Typography>
                      <Typography>
                        <EmojiPeople className="signup-icon"/>
                      </Typography>
                    </CardContent>
                  </Card>
              </Link>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}