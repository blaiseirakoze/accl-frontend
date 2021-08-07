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
import Header from '../../../parts/guest/header'
import './style.scss';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { DropzoneArea } from "material-ui-dropzone";

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
              Submit your case
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos non est harum velit numquam laborum?
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
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid xs={12} sm={6} md={4} className="col">
                <TextareaAutosize
                  maxRows={6}
                  aria-label=""
                  style={{width:"100%", height: "150px", padding:"1rem", marginBottom: "1rem"}}
                  placeholder="Describe your case"
                />
                <DropzoneArea
                  acceptedFiles={["image/*", "video/*", "application/*"]}
                  // onChange={f => onHandleFileImages(f)}
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
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}