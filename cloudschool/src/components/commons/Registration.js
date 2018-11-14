import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Registration extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Institution Registration" />
            <Tab label="Student Registration" />
            <Tab label="Teacher Registration" />
            <Link to = {'/SignIn'} ><Tab label="LogIn" /></Link>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><div>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Registration Form
          </Typography>
          <form className={classes.form}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Name</InputLabel>
              <Input name="name" type="name" id="name" autoComplete="name"/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Class Name</InputLabel>
              <Input id="classname" name="classname" autoComplete="classname" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password"/>
            </FormControl>
             <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <Input name="confirmpassword" type="confirmpassword" id="confirmpassword" autoComplete="confirm-password"/>
            </FormControl>

             <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Age</InputLabel>
              <Input name="age" type="name" id="age" autoComplete="age"/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registration Form
            </Button>
          </form>
        </Paper>
      </main>
    </div></TabContainer>}
        {value === 1 && <TabContainer><div>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Registration Form
          </Typography>
          <form className={classes.form}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Name</InputLabel>
              <Input name="name" type="name" id="name" autoComplete="name"/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Class Name</InputLabel>
              <Input id="classname" name="classname" autoComplete="classname" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password"/>
            </FormControl>
             <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <Input name="confirmpassword" type="confirmpassword" id="confirmpassword" autoComplete="confirm-password"/>
            </FormControl>

             <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Age</InputLabel>
              <Input name="age" type="name" id="age" autoComplete="age"/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registration Form
            </Button>
          </form>
        </Paper>
      </main>
    </div></TabContainer>}
        {value === 2 && <TabContainer><div>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Registration Form
          </Typography>
          <form className={classes.form}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Administrator</InputLabel>
              <Input name="name" type="name" id="name" autoComplete="name"/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Class Name</InputLabel>
              <Input id="classname" name="classname" autoComplete="classname" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password"/>
            </FormControl>
             <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <Input name="confirmpassword" type="confirmpassword" id="confirmpassword" autoComplete="confirm-password"/>
            </FormControl>

             <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Age</InputLabel>
              <Input name="age" type="name" id="age" autoComplete="age"/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registration Form
            </Button>
          </form>
        </Paper>
      </main>
    </div></TabContainer>}
      </div>
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registration);

