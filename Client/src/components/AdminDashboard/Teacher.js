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
function createData(name, contact, place, classteacher, actions) {
  id += 1;
  return { id, name, contact, place, classteacher, actions };
}

const rows = [
  createData('Ali', '03036718292', 'Lahore', '10-A', 'Edit/Delete'),
  createData('Ahmad', '03036718293', 'Kasur', '10-B', 'Edit/Delete'),
  createData('Kamran', '03036718267', 'Lahore', '8-C', 'Edit/Delete'),
  createData('Samyyan', '03036718212', 'Lahore', '9-C', 'Edit/Delete'),
  createData('Raza', '03036718346', 'Gujranwala', '9-A', 'Edit/Delete'),
];

function TeacherTable(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Contact</CustomTableCell>
            <CustomTableCell>Place</CustomTableCell>
            <CustomTableCell>Class Teacher</CustomTableCell>
            <CustomTableCell>Actions</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell>{row.name}</CustomTableCell>
                <CustomTableCell>{row.contact}</CustomTableCell>
                <CustomTableCell>{row.place}</CustomTableCell>
                <CustomTableCell>{row.classteacher}</CustomTableCell>
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

TeacherTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherTable);