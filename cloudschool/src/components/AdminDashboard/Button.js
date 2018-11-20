import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
function ButtonComp(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <Typography>
            <Button color="inherit">Register</Button>
        </Typography>
        </div>
    );
}



ButtonComp.PropTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ButtonComp);