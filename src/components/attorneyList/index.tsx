import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { IGetUsersparams } from '../../store/auth/types';
import {useStyles} from './style';
import AttornyProfile from '../../assets/images/attorney-profile.png'

type Props = {
    users: IGetUsersparams[];
}
const AttorneyList = (props:Props) => {
  const classes = useStyles();

    const {users} = props;
    return (
        <Grid container spacing={4}>
            {users && users
            .filter((user:any)=> user.role.name === "attorney")
            .map((user) => (                   
              <Grid item key={user.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <Link to="/client/attorney/details" >
                  <CardMedia
                    className={classes.cardMedia}
                    image={AttornyProfile}
                    title="Image title"
                  />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography>
                      {`I am an attorney specialized  in ${user.attorneyCategory && user.attorneyCategory.name}, My ${user.address} `}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link 
                    to={{
                      pathname: "/client/attorney/details",
                      state: {
                        user
                      },
                    }}
                     >
                    <Button size="small" color="primary">
                      More details <ArrowRightAlt/>
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid> ))}
          </Grid>    
          )
}

export default AttorneyList;