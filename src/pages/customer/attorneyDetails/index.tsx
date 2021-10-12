import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';
import Header from '../../../parts/customer/header'
import './style.scss';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { DropzoneArea } from "material-ui-dropzone";
import AttornyProfile from '../../../assets/images/attorney-profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { createCase } from '../../../store/attorney/actions';
import { ICasesParams, IResponse } from '../../../store/attorney/types';
import { decode } from 'jsonwebtoken';
import { IGetUsersparams } from '../../../store/auth/types';
import { AppState } from '../../../store/configureStore';
import { getUsers } from '../../../store/auth/actions';
import { Alert } from '@material-ui/lab';
  
type Props = {
  location:any
}

export default function CaseForm(props: Props) {
  const classes = useStyles();

  const {user} = props.location.state;  

  const [state, setState] = useState<{caseDescription: string, document: any, alert: boolean }>({
    caseDescription: "",
    document: [],
    alert: false
  });

  const dispatch = useDispatch();

  const { users }: { users: IGetUsersparams[] } = useSelector(
    (state: AppState) => state.auth
  );

  const attorneyReducer = useSelector(
    (state: AppState) => state.attorney
  );
  
  const { caseErrors, caseMessage }: { caseErrors: IResponse, caseMessage: IResponse } = attorneyReducer;

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(caseErrors || caseMessage){
      setState({...state, alert: true});
    }
    // eslint-disable-next-line
  }, [attorneyReducer]);

  const onHandleFile = (f: File[]) => {
    setState({ ...state, document: f });
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let userToken:any = localStorage.getItem("USER-TOKEN");
  userToken = userToken && userToken.split(',');
  const token:any = userToken && decode(userToken[0]);
  const client:any = users && users.filter(user => user.username === token.sub);
  const clientObj:any = client[0];
  const clientId = clientObj && clientObj.id;
  
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data:any = {
      caseDescription: state.caseDescription,
      document: state.document,
      client: clientId,
      attorney: user.id
    };
    dispatch(createCase(data))
  }

  const onCloseAlert = (event:any) => {
    setState({...state, alert: false});
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/> 
      { state.alert?<Alert severity={caseMessage?"success":"error"} onClose={onCloseAlert}>{caseMessage?caseMessage.statusMessage:"oops! something went wrong! please try again"}</Alert>:""} 
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Submit your case
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Submit your case. will be reviewed and i will get back to you ass soon as possible
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4} className="col">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={AttornyProfile}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user && user.firstName} {user && user.firstLast}
                    </Typography>
                    <br />
                    <Typography>
                    {`I am an attorney specialized  in ${user.attorneyCategory && user.attorneyCategory.name}`}
                    </Typography>
                    <br />
                    <Typography>

                    {`Rates: ${user.rate}`}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid xs={12} sm={6} md={4} className="col">
                <form onSubmit={onSubmit} >
                  <TextareaAutosize
                    maxRows={6}
                    aria-label=""
                    style={{width:"100%", height: "150px", padding:"1rem", marginBottom: "1rem"}}
                    placeholder="Describe your case"
                    name="caseDescription"
                    required
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
                  />
                  <DropzoneArea
                    acceptedFiles={["image/*", "video/*", "application/*"]}
                    onChange={f => onHandleFile(f)}
                    showFileNames
                    dropzoneText='Upload a document'
                    showAlerts={false}
                    filesLimit={20}
                    dropzoneClass={classes.DropzoneArea}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >Submit</Button>
                </form>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}