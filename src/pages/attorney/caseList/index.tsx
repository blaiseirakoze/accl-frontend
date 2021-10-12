import React, { ChangeEvent, useEffect, MouseEvent } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';
import PageHeader from '../../../parts/attorney/header'
import './style.scss';
import { InputBase, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeCaseStatus, listCase } from '../../../store/attorney/actions';
import { AppState } from '../../../store/configureStore';
import { ICasesParams } from '../../../store/attorney/types';
import { decode } from 'jsonwebtoken';
import { IGetUsersparams } from '../../../store/auth/types';
import { getUsers } from '../../../store/auth/actions';

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const CaseList = () => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const { users }: { users: IGetUsersparams[] } = useSelector(
    (state: AppState) => state.auth
  );

  const attorneyReducer = useSelector((state: AppState) => state.attorney);

 

  const { cases }: { cases: ICasesParams[] } = attorneyReducer;
  
  const rows = cases;
  
  useEffect(() => {
    dispatch(listCase());
    // eslint-disable-next-line 
  }, [cases]);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line 
  }, [users]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [search, setSearch] = React.useState<any>("");
  const [select, setSelect] = React.useState<any>("pending");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };
  
console.log("casesssssssssssssssssssssssssssssss ", cases);

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSelect(value);
  };

  let userToken:any = localStorage.getItem("USER-TOKEN");
  userToken = userToken && userToken.split(',');
  const token:any = userToken && decode(userToken[0]);  
  const attorney:any = users && users.filter(user => user.username === token.sub);
  const attorneyObj:any = attorney[0];
  const attorneyId = attorneyObj && attorneyObj.id;

  // const onClient = (e: MouseEvent) => {

  // }
  const onChangeCaseStatus = (e:MouseEvent, id:string, status:string)=> {
    e.preventDefault();
    const info = {
      id,
      status,
    }
    dispatch(changeCaseStatus(info));
    dispatch(listCase());
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <PageHeader/> 
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              List of cases
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>  
          <Paper className={classes.root}>

              {/* table start ---------------------------------------------------------*/}
              {/* <Header 
              // title={"LIST"} 
              /> */}

                  {/* <Box> */}
                  {/* <Box> */}
                  <div style={{display:"flex", justifyContent: "space-between"}} >
                      <TextField
                        id="outlined-primary"
                        label="Search"
                        variant="outlined"
                        color="primary"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                      />
                  
                      <TextField
                        variant="outlined"
                        color="primary"
                        id="outlined-primary"
                        select
                        label="Select"
                        value={select}
                        onChange={onSelect}
                      >
                        <MenuItem selected disabled value="">
                          status
                          </MenuItem>
                          <MenuItem value="pending">
                          pending
                          </MenuItem>
                          <MenuItem value="accept">
                          accept
                          </MenuItem>
                          <MenuItem value="deny">
                          deny
                          </MenuItem>
                          <MenuItem value="close">
                          close
                          </MenuItem>
                      </TextField>
                  </div>

                  {/* </Box> */}
                  {/* </Box> */}
                  
                    <TableContainer className={classes.container}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell> Case Description </TableCell>
                            <TableCell> Status </TableCell>
                            <TableCell> Document </TableCell>
                            <TableCell> Create On </TableCell>
                            <TableCell> Client </TableCell>
                            <TableCell> Action </TableCell>
                          </TableRow>
                        </TableHead> 
                        <TableBody>
                          {rows &&
                            rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .filter((row:any) => row.attorney && row.attorney.id === attorneyId)
                            .filter((row:any) => row.status === select && select)
                              .filter((row) => {
                                return (
                                  (row &&
                                    row.caseDescription
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) 
                                );
                              }) 
                              .map((row:any, id) => (
                                <TableRow key={id} hover >
                                  <TableCell> {row.caseDescription} </TableCell>
                                  <TableCell> {row.status} </TableCell>
                                  <TableCell> <a style={{color:"Highlight"}} href = {"//"+row.document} target = "_blank">Download Pdf</a> </TableCell>
                                  <TableCell> {row.createOn} </TableCell>
                                  <TableCell> 
                                    {/* <a onClick={onClient} href="#"> {row.client.firstName} {row.client.lastName} </a>  */}
                                    </TableCell>
                                  <TableCell style={{ cursor: "pointer" }}> {row.status === "pending"?<><h3 onClick={(e: MouseEvent) => onChangeCaseStatus(e, row.id, "accept")} style={{ color: "green" }}>Accept</h3><h3 onClick={(e: MouseEvent) => onChangeCaseStatus(e, row.id, "deny")} style={{ color: "red" }}>Deny</h3></>:<h3 style={{color: "blue"}}>summary</h3> }   </TableCell>
                                </TableRow>
                              ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    {/* {rows && rows.length > 0 ? (
                      <ExportCSV csvData={rows} fileName={"Consession"} />
                    ) : (
                      ""
                    )} */}
                    {/* <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component="div"
                      count={rows && rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page && page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    /> */}
                  </Paper>    
              {/* table end-------------------------------------------------- */}

          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default CaseList;