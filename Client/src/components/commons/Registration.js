// import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// // import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import Paper from '@material-ui/core/Paper';
// import {withRouter} from 'react-router';
// import axios from 'axios';
// // import SignIn from "./SignIn.js";
// // import 'whatwg-fetch';
// // import {
// // 	getFromStorage,
// // 	setInStorage
// // } from  '../../utils/storage.js';
// // import SignIn from './SignIn.js';

// function TabContainer(props) {
// 	return (
// 		<Typography component="div" style={{ padding: 8 * 3 }}>
// 			{props.children}
// 		</Typography>
// 	);
// }

// TabContainer.propTypes = {
// 	children: PropTypes.node.isRequired,
// };

// const styles = theme => ({
// 	layout: {
// 		width: 'auto',
// 		display: 'block', // Fix IE 11 issue.
// 		marginLeft: theme.spacing.unit * 3,
// 		marginRight: theme.spacing.unit * 3,
// 		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
// 			width: 400,
// 			marginLeft: 'auto',
// 			marginRight: 'auto',
// 		},
// 	},
// 	paper: {
// 		marginTop: theme.spacing.unit * 8,
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
// 	},
// 	avatar: {
// 		margin: theme.spacing.unit,
// 		backgroundColor: theme.palette.secondary.main,
// 	},
// 	form: {
// 		width: '100%', // Fix IE 11 issue.
// 		marginTop: theme.spacing.unit,
// 	},
// 	submit: {
// 		marginTop: theme.spacing.unit * 3,
// 	},
// 	root: {
// 		flexGrow: 1,
// 		backgroundColor: theme.palette.background.paper,
// 	},
// });

// function handleActive(Tab) {
// 	alert(`A tab with this route property ${Tab.props['data-route']} was activated.`);
// }







// class Registration extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		// Initial State of the component;
// 		this.state = {
// 			value: 0,
// 			// Institutionname:'',
// 			// country:'',
// 			// city:'',
// 			// AdminName: '',
// 			// Adminpassword: '',
// 			// Adminemail: ''
// 		};
// 		// this.handleInstitutionname = this.handleInstitutionname.bind(this);
// 		// this.handlecountry = this.handlecountry.bind(this);
// 		// this.handlecity = this.handlecity.bind(this);
// 		// this.handleAdminName = this.handleAdminName.bind(this);
// 		// this.handleAdminemail = this.handleAdminemail.bind(this);
// 		// this.handleAdminpassword = this.handleAdminpassword.bind(this);
// 		// this.handleNewFormforStudent=this.handleNewFormforStudent.bind(this);
// 		// this.handleNewForm=this.handleNewForm.bind(this);
// 		// this.handleNewFormforTeacher=this.handleNewFormforTeacher.bind(this);
// 		// this.handleInstitutionRegistration = this.handleInstitutionRegistration.bind(this);
// 	}

// 	// componentWillReceiveProps(nextProps){
// 	// 	console.log("nextProps",nextProps);
// 	// }



// 	// Fields Functions

// 	// handleInstitutionname = (event) => {
// 	// 	this.setState({
// 	// 		Institutionname: event.target.value,
// 	//   });
// 	// }

// 	// handlecountry = (event) => {
// 	// 	this.setState({
// 	// 		country: event.target.value,
// 	//   });
// 	// }




// 	// // Register Function:

// 	// // handleNewForm() {
// 	// // 	this.props.history.push('/AdminDashboard');
// 	// // }
// 	// // handleNewFormforStudent() {
// 	// // 	this.props.history.push('/StudentDashboard');
// 	// // }
// 	// // handleNewFormforTeacher() {
// 	// // 	this.props.history.push('/TeacherDashboard');
// 	// // }
// 	handleChange = (event) => {
// 		const {value} = event.target.value;
// 		this.setState({
// 			value
// 		});
// 	};

// 	// handleInstitutionRegistration(event,role){
// 	// 	const apiBaseUrl = "http://localhost:3001/api/";

// 	// 	const {Institutionname, country, city, AdminName, Adminpassword, Adminemail} = this.state;
// 	// 	// console.log("values in register handler",role);
// 	// 	const self = this;
// 	// 	// To be done:check for empty values before hitting submit
// 	// 	if(Institutionname.length>0 && country.length>0 && city.length>0 && AdminName.length>0 && Adminpassword.length>0 && Adminemail.length>0){
// 	// 	  const payload={
// 	// 	  Institutionname,
// 	// 	  country,
// 	// 	  city,
// 	// 	  AdminName,
// 	// 	  Adminpassword,
// 	// 	  Adminemail,
// 	// 	  "role":role
// 	// 	  }
// 	// 	  axios.post(`${apiBaseUrl}account/InstitutionRegistration`, payload)
// 	// 	 .then( (response)=> {
// 	// 	   console.log(response);
// 	// 	   if(response.data.code === 200){
// 	// 		//  console.log("registration successfull");
// 	// 		 const SignIn=[];
// 	// 		 SignIn.push(<SignIn parentContext={this} appContext={self.props.appContext} role={role}/>);

// 	// 	   }
// 	// 	   else{
// 	// 		 console.log("some error ocurred",response.data.code);
// 	// 	   }
// 	// 	 })
// 	// 	 .catch((error) => {
// 	// 	   console.log(error);
// 	// 	 });
// 	// 	}
// 	// 	else{
// 	// 	  alert("Input field value is missing");
// 	// 	}

// 	//   }

// 	// handlecity (event){
// 	// 	this.setState({
// 	// 		city: event.target.value,
// 	//   });
// 	// }

// 	// handleAdminpassword (event) {
// 	// 	this.setState({
// 	// 		Adminpassword: event.target.value,
// 	//   });
// 	// }

// 	// handleAdminemail (event) {
// 	// 	this.setState({
// 	// 		Adminemail: event.target.value,
// 	//   });
// 	// }

// 	// handleAdminName(event) {
// 	// 	this.setState({
// 	// 		AdminName: event.target.value,
// 	//   });
// 	// }

// 	render() {
// 		const { classes } = this.props;
// 		const  {
// 			value
// 			// Institutionname,
// 			// country,
// 			// city,
// 			// AdminName,
// 			// Adminpassword,
// 			// Adminemail,
// 			} = this.state;

// 			  return (
// 				<div className={classes.root}>

// 					<Tabs value={value} onChange={this.handleChange()}>
// 						<Tab label="Student Registration" />
// 						<Tab label="Teacher Registration" />
// 						<Tab label="Institution Registration" />
// 					</Tabs>
// 					{value === 0 &&
// 					<TabContainer>
// 						<div>
// 							<StudentRegister/>
// 						</div>

// 					</TabContainer>}
// 				{value === 1 &&
// 					<TabContainer>
// 							<TeacherRegister/>
// 					</TabContainer>}
// 				{value === 2 &&
// 					<TabContainer>
// 						<div>
// 							<InstitutionRegister/>
// 						</div>
// 					</TabContainer>}
// 			</div>
// 			);

// 		  }

// 	}


// // Registration.propTypes = {
// // 	classes: PropTypes.object
// // };

// export default withRouter(withStyles(styles)(Registration));
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import StudentRegister from './StudentRegistration';
import TeacherRegister from './TeacherRegistration';
import InstitutionRegister from './InstitutionRegistration';


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
            <Tab label="Student Registration" />
            <Tab label="Teacher Registration" />
            <Tab label="Institution Registration" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><StudentRegister/></TabContainer>}
        {value === 1 && <TabContainer><TeacherRegister/></TabContainer>}
        {value === 2 && <TabContainer><InstitutionRegister/></TabContainer>}
      </div>
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registration);