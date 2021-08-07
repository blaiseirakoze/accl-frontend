import React, { ChangeEvent, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';
import PageHeader from '../../../parts/guest/header'
import './style.scss';
import { InputBase, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';

interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export default function CaseList() {
  const classes = useStyles();

  const dispatch = useDispatch();

  // const concessionReducer = useSelector((state: AppState) => state.concession);

  useEffect(() => {
    // dispatch(listConcession());
    // eslint-disable-next-line
  }, []);

  // const {
  //   listConcessionData,
  // }: { listConcessionData: ListConcession[] } = concessionReducer;
  // const rows = listConcessionData;
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
                            <TableCell> Names </TableCell>
                            <TableCell> Nature </TableCell>
                            <TableCell> Account Number </TableCell>
                            <TableCell> Charges </TableCell>
                            <TableCell> Concession Date </TableCell>
                            <TableCell> Observation </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {/* {rows &&
                            rows
                              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .filter((row) => {
                                return (
                                  (row &&
                                    row.name
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row &&
                                    row.nature
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row &&
                                    row.accountNumber
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row &&
                                    row.charges
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row &&
                                    row.concessionDate
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0) ||
                                  (row &&
                                    row.observation
                                      .toLowerCase()
                                      .indexOf(search && search.toLowerCase()) >= 0)
                                );
                              })
                              .map((row, id) => ( */}
                                <TableRow  hover style={{ cursor: "pointer" }}>
                                  <TableCell> Names </TableCell>
                                    <TableCell> Nature </TableCell>
                                    <TableCell> Account Number </TableCell>
                                    <TableCell> Charges </TableCell>
                                    <TableCell> Concession Date </TableCell>
                                    <TableCell> Observation </TableCell>
                                </TableRow>
                              {/* // ))} */}
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
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
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