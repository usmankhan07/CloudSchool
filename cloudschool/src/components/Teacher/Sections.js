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
function createData(name, numberofstudents, school,classteacher, actions) {
  id += 1;
  return { id, name, numberofstudents, school, classteacher, actions};
}

const rows = [
  createData('10-A', 32, 'The Educators', 'Kamran', 'Delete/Edit'),
  createData('10-B', 28, 'The Educators', 'Samyyan', 'Delete/Edit'),
  createData('10-C', 26, 'The Educators', 'Smith', 'Delete/Edit'),
  createData('9-A', 30, 'The Educators', 'Ali', 'Delete/Edit'),
  createData('9-B', 35, 'The Educators', 'John', 'Delete/Edit'),
];

function Sections(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <div>
        <div>
            <button>
                Add Sections
            </button>
    </div>
            <div>
        <Paper className={classes.root}>
        
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Name</CustomTableCell>
              <CustomTableCell>Number of Students </CustomTableCell>
              <CustomTableCell>School</CustomTableCell>
              <CustomTableCell>Class Teacher</CustomTableCell>
              <CustomTableCell>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell>{row.name}</CustomTableCell>
                  <CustomTableCell numeric>{row.numberofstudents}</CustomTableCell>
                  <CustomTableCell>{row.school}</CustomTableCell>
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
    </div>
    
    

    </div>
  );
}

Sections.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sections);