import React, { ChangeEvent, useEffect, MouseEvent } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';
import PageHeader from '../../../parts/attorney/header'
import './style.scss';
import { InputBase, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeCaseStatus, listCase } from '../../../store/attorney/actions';
import { AppState } from '../../../store/configureStore';
import { ICasesParams } from '../../../store/attorney/types';
import { decode } from 'jsonwebtoken';
import { IGetUsersparams } from '../../../store/auth/types';
import { changeUserStatus, getUsers } from '../../../store/auth/actions';
 
const UsersList = () => {

  const classes = useStyles();

  

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

 
//=====================================================================

const [search, setSearch] = React.useState<any>("");
const [select, setSelect] = React.useState<any>("admin");

  const dispatch = useDispatch();

  const { users }: { users: IGetUsersparams[] } = useSelector(
    (state: AppState) => state.auth
  );
  
  const rows = users;
  
  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line 
  }, [users]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };
  
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

  const onChangeUserStatus = (e: MouseEvent, id:string) =>{
    e.preventDefault();    
    dispatch(changeUserStatus(id));
    dispatch(getUsers())
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
              List of users
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
                          {/* <MenuItem selected disabled value="">
                            select
                          </MenuItem> */}
                          <MenuItem selected value="admin">
                          admin
                          </MenuItem>
                          <MenuItem value="client">
                          client
                          </MenuItem>
                          <MenuItem value="attorney">
                          attorney
                          </MenuItem>
                          <MenuItem value="court">
                          court
                          </MenuItem>
                      </TextField>
                  </div>

                  {/* </Box> */}
                  {/* </Box> */}
                  
                    <TableContainer className={classes.container}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell> username </TableCell>
                            <TableCell> active </TableCell>
                            <TableCell> firstName </TableCell>
                            <TableCell> lastName </TableCell>
                            <TableCell> address </TableCell>
                            <TableCell> phoneNumber </TableCell>
                            <TableCell> dob </TableCell>
                            <TableCell> create On </TableCell>
                            <TableCell> rate </TableCell>
                            <TableCell> role </TableCell>
                            <TableCell> attorney category </TableCell>
                            <TableCell> activate </TableCell>
                          </TableRow>
                        </TableHead> 
                        <TableBody>
                          {rows &&
                            rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            // .filter((row:any) => row.attorney && row.attorney.id === attorneyId)
                            .filter((row:any) => row.role.name === select && select)
                              .filter((row) => {
                                return (
                                  (row.username &&
                                    row.username
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row.firstName &&
                                    row.firstName
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row.firstName &&
                                    row.firstName
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) || 
                                  (row.lastName &&
                                    row.lastName
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row.address &&
                                    row.address
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row.phoneNumber &&
                                    row.phoneNumber
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row.dob &&
                                    row.dob
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0)         
                                );
                              }) 
                              .map((row:any) => (
                                <TableRow key={row.id} hover >
                                  <TableCell> {row.username?row.username:"N/A"} </TableCell>
                                  <TableCell> {row.active?row.active:'N/A'} </TableCell>
                                  <TableCell> {row.firstName?row.firstName:"N/A"} </TableCell>
                                  <TableCell> {row.lastName?row.lastName:"N/A"} </TableCell>
                                  <TableCell> {row.address?row.address:"N/A"} </TableCell>
                                  <TableCell> {row.phoneNumber?row.phoneNumber:"N/A"} </TableCell>
                                  <TableCell> {row.dob?row.dob:"N/A"} </TableCell>
                                  <TableCell> {row.createOn?row.createOn:"N/A"} </TableCell>
                                  <TableCell> {row.rate?row.rate:"N/A"} </TableCell>
                                  <TableCell> {row.role?row.role.name:"N/A"} </TableCell>
                                  <TableCell> {row.attorneyCategory?row.attorneyCategory.name:"N/A"} </TableCell>
                                  <TableCell> 
                                      <TableCell style={{ cursor: "pointer" }}> {row.role.name === "attorney" || row.role.name === "court"?<>   {row.active === false?<h3 onClick={(e: MouseEvent) => onChangeUserStatus(e, row.id)} style={{ color: "green" }}>Activate</h3>:<h3 onClick={(e: MouseEvent) => onChangeUserStatus(e, row.id)} style={{ color: "red" }}>Disactivate</h3>}</>:"" }   </TableCell>
                                  </TableCell>
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

export default UsersList;