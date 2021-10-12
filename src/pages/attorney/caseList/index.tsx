import React, { ChangeEvent, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';
import PageHeader from '../../../parts/attorney/header'
import './style.scss';
import { InputBase, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listCase } from '../../../store/attorney/actions';
import { AppState } from '../../../store/configureStore';
import { ICasesParams } from '../../../store/attorney/types';

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

  const attorneyReducer = useSelector((state: AppState) => state.attorney);

  useEffect(() => {
    dispatch(listCase());
    // eslint-disable-next-line 
  }, []);

  const { cases }: { cases: ICasesParams[] } = attorneyReducer;
  
  const rows = cases;
  console.log("data ", rows);
  
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
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };
  
console.log("casesssssssssssssssssssssssssssssss ", cases);

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
              

              {/* table start ---------------------------------------------------------*/}
              {/* <Header 
              // title={"LIST"} 
              /> */}

                  {/* <Box> */}
                  {/* <Box> */}
                  <div className={classes.search}>
                    {/* <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div> */}
                    <InputBase
                      style={{ backgroundColor: "white" }}
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                    />
                  </div>
                  {/* </Box> */}
                  {/* </Box> */}
                  <Paper className={classes.root}>
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
                          {/* {cases &&
                            cases
                              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              // .filter((row) => {
                              //   return (
                              //     (row &&
                              //       row.name
                              //         .toLowerCase()
                              //         .indexOf(search && search.toLowerCase()) >= 0) ||
                              //     (row &&
                              //       row.nature
                              //         .toLowerCase()
                              //         .indexOf(search && search.toLowerCase()) >= 0)
                              //   );
                              // })
                              .map((row) => {
                               return (<TableRow key={row.id} hover style={{ cursor: "pointer" }}>
                                  <TableCell> { row.caseDescription } </TableCell>
                                  <TableCell> { row.status } </TableCell>
                                  <TableCell> { row.document ? row.document : "N/A" } </TableCell>
                                  <TableCell> { row.createOn } </TableCell>
                                  <TableCell> { row.client } </TableCell>
                                  <TableCell> <h3 style={{color: "green"}}>Accept</h3> <h3 style={{color: "red"}}>Deny</h3> </TableCell>
                                </TableRow>)
                              })} */}
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