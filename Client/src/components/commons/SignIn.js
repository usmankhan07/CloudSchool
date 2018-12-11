
import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
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
import {withRouter} from 'react-router';
import axios from 'axios';
//import AdminDashboard from "../AdminDashboard/AdminDashboard.js";

// import {
// 	getFromStorage,
// 	setInStorage
// } from  '../../utils/storage.js';

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

function handleActive(Tab) {
	alert(`A tab with this route property ${Tab.props['data-route']} was activated.`);
}







class SignIn extends React.Component {
	constructor(props) {
		super(props);
		// Initial State of the component;
		this.state = {
			value: 0,
			AdminName: '',
			Adminpassword: '',
			Adminemail: ''
    };
    // this.handleNewFormforTeacher=this.handleNewFormforTeacher.bind(this);
    this.handleNewForm=this.handleNewForm.bind(this);
    // this.handleNewFormforStudent=this.handleNewFormforStudent.bind(this);
    this.handleAdminName = this.handleAdminName.bind(this);
    this.handleAdminpassword = this.handleAdminpassword.bind(this);
    this.handleAdminemail = this.handleAdminemail.bind(this);
    this.handleAdminSignIn = this.handleAdminSignIn.bind(this);
  }


	handleChange = (event, value) => {
		this.setState({ value });
	};

	// Fields Functions
	handleAdminName(event) {
		this.setState({
			AdminName: event.target.value,
	  });
	}
	handleAdminpassword (event) {
		this.setState({
			Adminpassword: event.target.value,
	  });
	}
	handleAdminemail (event) {
		this.setState({
			Adminemail: event.target.value,
	  });
  }

  // Handle Admin SingIn
  handleAdminSignIn(event){
    var apiBaseUrl = "http://localhost:3001/";
    var self = this;
    var payload={
    "AdminName":this.state.AdminName,
    "Adminpassword":this.state.Adminpassword,
    "Adminemail": this.state.Adminemail
    }
    axios.post(apiBaseUrl+'api/account/AdminSigIn', payload)
    .then(function (response) {

    console.log(response);
    if(response.data.code == 200){
    alert("hello");

    console.log("Login successfull");
    this.handleNewForm();
    // var AdminDashboard=[];
    // AdminDashboard.push(<AdminDashboard appContext={self.props.appContext}/>)

    }
    else if(response.data.code == 500){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }





	handleNewForm() {
		this.props.history.push('/AdminDashboard');
	}
	// handleNewFormforStudent() {
	// 	this.props.history.push('/StudentDashboard');
	// }
	// handleNewFormforTeacher() {
	// 	this.props.history.push('/TeacherDashboard');
	// }
	render() {
		const { classes } = this.props;
		const  {
			value,
			AdminName,
			Adminpassword,
			Adminemail,
    } = this.state;

			  return (
				<div className={classes.root}>

					<Tabs value={value} onChange={this.handleChange}>
						<Tab label="Student Login" />
						<Tab label="Teacher Login" />
						<Tab label="Admin Login" />
					</Tabs>
					{value === 0 &&
					<TabContainer>
						<div>
							<CssBaseline />
							<main className={classes.layout}>
								<Paper className={classes.paper}>
									<Typography component="h1" variant="h5">
										SignIn Form
									</Typography>
									<form className={classes.form}>
										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="password">Name</InputLabel>
											<Input name="name" type="name" id="name" autoComplete="name" />
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
											<Input
												name="password"
												type="password"
												id="password"
												autoComplete="current-password"
											/>
										</FormControl>
										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="password">Confirm Password</InputLabel>
											<Input
												name="confirmpassword"
												type="confirmpassword"
												id="confirmpassword"
												autoComplete="confirm-password"
											/>
										</FormControl>

										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="password">Age</InputLabel>
											<Input name="age" type="name" id="age" autoComplete="age" />
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
											// onClick={this.handleNewFormforStudent}
											className={classes.submit}

										>
											SignIn
										</Button>
									</form>
								</Paper>
							</main>
						</div>
					</TabContainer>}
				{value === 1 &&
					<TabContainer>
						<div>
							<CssBaseline />
							<main className={classes.layout}>
								<Paper className={classes.paper}>
									<Typography component="h1" variant="h5">
										SignIn
									</Typography>
									<form className={classes.form}>
										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="password">Name</InputLabel>
											<Input name="name" type="name" id="name" autoComplete="name" />
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
											<Input
												name="password"
												type="password"
												id="password"
												autoComplete="current-password"
											/>
										</FormControl>
										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="password">Confirm Password</InputLabel>
											<Input
												name="confirmpassword"
												type="confirmpassword"
												id="confirmpassword"
												autoComplete="confirm-password"
											/>
										</FormControl>

										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="password">Age</InputLabel>
											<Input name="age" type="name" id="age" autoComplete="age" />
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
											// onClick={this.handleNewFormforTeacher}
											className={classes.submit}
										>
											SignIn
										</Button>
									</form>
								</Paper>
							</main>
						</div>
					</TabContainer>}
				{value === 2 &&
					<TabContainer>
						<div>
							<CssBaseline />
							<main className={classes.layout}>
								<Paper className={classes.paper}>
									<Typography component="h1" variant="h5">
										Admin Registration Form
									</Typography>
									<form className={classes.form}>
										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="AdminName">AdminName</InputLabel>
											<Input id="classname" name="classname" value = {AdminName} onChange = {this.handleAdminName} autoComplete="classname" autoFocus />
										</FormControl>
										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="password">Adminpassword</InputLabel>
											<Input
												name="password"
												type="password"
												id="Adminpassword"
												value = {Adminpassword}
												onChange = {this.handleAdminpassword}
												autoComplete="current-password"
											/>
										</FormControl>
										<FormControl margin="normal" required fullWidth>
											<InputLabel htmlFor="password">Adminemail</InputLabel>
											<Input
												name="Adminemail"
												type="email"
												id="Adminemail"
												value = {Adminemail}
												onChange = {this.handleAdminemail}
												autoComplete="Adminemail"
											/>
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
											onClick={this.handleAdminSignIn}
											className={classes.submit}
										>
											SignIn
										</Button>
									</form>
								</Paper>
							</main>
						</div>
					</TabContainer>}
			</div>
			);
		}


  }


    SignIn.propTypes = {
      classes: PropTypes.object.isRequired,
    };

    export default withRouter(withStyles(styles)(SignIn));