import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const {
    count, page, rowsPerPage, onChangePage
  } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function createData(id, taskDesc, taskCompletedBy, taskCompletedDate) {
  return {
    id, taskDesc, taskCompletedBy, taskCompletedDate
  };
}

const rows = [
  createData(1, 'Block double submission 1 Block double submission 1', 'Mario Mazza', '01/01/2022'),
  createData(2, 'Block double submission 2', 'Super Dev 2', '01/01/2026'),
  createData(3, 'Block double submission 3', 'Super Dev 3', '01/01/2034'),
  createData(4, 'Block double submission 4', 'Super Dev 4', '01/01/2032'),
  createData(5, 'Block double submission 5', 'Super Dev 2', '01/01/2026'),
  createData(6, 'Block double submission 6', 'Super Dev 3', '01/01/2034'),
  createData(7, 'Block double submission 7', 'Super Dev 4', '01/01/2032'),
  createData(8, 'Block double submission 8', 'Super Dev 1', '01/01/2022'),
  createData(9, 'Block double submission  9', 'Super Dev 1', '01/01/2022'),
  createData(10, 'Block double submission  10', 'Super Dev 2', '01/01/2026'),
  createData(11, 'Block double submission  11', 'Super Dev 3', '01/01/2034'),
  createData(12, 'Block double submission  12', 'Super Dev 4', '01/01/2032'),
  createData(13, 'Block double submission  13', 'Super Dev 2', '01/01/2026'),
  createData(14, 'Block double submission  14', 'Super Dev 4', '01/01/2032'),
  createData(15, 'Block double submission  15', 'Super Dev 3', '01/01/2034'),
  createData(16, 'Block double submission  16', 'Super Dev 1', '01/01/2022')
];

const useStyles2 = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: 300 / theme.spacing(2)
  },
  table: {
    padding: theme.spacing(2)
  },
  tableContainer: {
    maxHeight: 440
  }
}));

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader className={classes.table} padding="none" aria-label="completed task table">
          <TableHead>
            <TableRow>
              <TableCell>Task description</TableCell>
              <TableCell align="right">Target date</TableCell>
              <TableCell align="right">Delivered date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.taskDesc}
                </TableCell>
                <TableCell align="right">
                  {row.taskCompletedBy}
                </TableCell>
                <TableCell align="right">
                  {row.taskCompletedDate}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 10 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}
