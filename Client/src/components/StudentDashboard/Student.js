import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, fathername, classname , registrationnumber, actions) {
  id += 1;
  return { id, name, fathername, classname, registrationnumber, actions };
}

const rows = [
  createData('Ali', 'Kamran', '10-A', 24, 'Delete/Edit'),
  createData('Usama', 'Saleem', '10-B', 37, 'Delete/Edit'),
  createData('Ahmad', 'Arshad', '10-C', 24, 'Delete/Edit'),
  createData('Usman', 'Arshad', '9-A', 23, 'Delete/Edit'),
  createData('Imran', 'Bilal', '9-B', 49, 'Delete/Edit'),
];

function StudentTable(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell >Name</CustomTableCell>
            <CustomTableCell >Fathername</CustomTableCell>
            <CustomTableCell >Classname</CustomTableCell>
            <CustomTableCell numeric>Registrationnumber</CustomTableCell>
            <CustomTableCell >Actions</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell numeric>{row.name}</CustomTableCell>
                <CustomTableCell numeric>{row.fathername}</CustomTableCell>
                <CustomTableCell numeric>{row.classname}</CustomTableCell>
                <CustomTableCell numeric>{row.registrationnumber}</CustomTableCell>
                <CustomTableCell padding="checkbox">
                    <IconButton aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit">
                        <EditIcon />
                    </IconButton>
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

StudentTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentTable);