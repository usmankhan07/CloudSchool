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
// import RenderPropsMenu from './menurole';

// JSS
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


// Component
class TeacherRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            name: '',
            fathername: '',
            email: '',
            password: '',
            InstitutionName: '',
            classname: '',
            section:'',

        }
        this.handleTeachername = this.handleTeachername.bind(this);
		this.handlefathername = this.handlefathername.bind(this);
		this.handleemail = this.handleemail.bind(this);
		this.handlepassword = this.handlepassword.bind(this);
		this.handleInstitutionName = this.handleInstitutionName.bind(this);
        this.handleclassname = this.handleclassname.bind(this);
        this.handlesection = this.handlesection.bind(this);
        this.handleRegister = this.handleRegister.bind(this);


    }

    // Events Handling Functions
    handleTeachername = () => {
		this.setState({
			name: document.getElementById('Studentname').value,
	  });
	}

	handlefathername = () => {
		this.setState({
			fathername: document.getElementById('fathername').value,
	  });
	}

	handleemail (){
		this.setState({
			email:document.getElementById('email').value,
	  });
	}

	handlepassword () {
		this.setState({
			password: document.getElementById('password').value,
	  });
	}

	handleInstitutionName () {
		this.setState({
			InstitutionName: document.getElementById('InstitutionName').value,
	  });
	}

	handleclassname() {
		this.setState({
			classname: document.getElementById('classname').value,
	  });
    }

    handlesection() {
		this.setState({
			section: document.getElementById('section').value,
	  });
    }

    handleRegister(event) {
    this.state = { name: '', fathername: '', email: '', password: '', InstitutionName: '', classname: '',
        section:'',
        }
        event.preventDefault();
        console.log("m here");
        console.log(this.refs.Studentname);
        axios.post("http://localhost:3001/api/account/TeacherRegistration",
            this.setState({
                name:this.handleTeachername(),
                fathername:this.handlefathername(),
                email:this.handleemail(),
                password:this.handlepassword(),
                InstitutionName:this.handleInstitutionName(),
                classname:this.classname(),
                section: this.handlesection()

            }) ).then(res => {
                console.log(res);
                console.log(res.data);
            })
            console.log("hello now m here");
    }

    render() {
        const { classes } = this.props;
        const  {
			name,
            fathername,
            email,
            password,
            InstitutionName,
            classname,
            section
			} = this.state;
        return(
            <div>
				<CssBaseline />
                <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                Teacher Registration
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">name</InputLabel>
                        <Input name="name" type="name" id="name" value = {this.name} onChange = {this.handleTeachername} autoComplete="name" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="country">fathername</InputLabel>
                        <Input id="fathername" type = "name" name="fathername" value = {this.fathername} onChange = {this.handlefathername} autoComplete="country" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="city">email</InputLabel>
                        <Input id="email" type = "name" name="email" value = {this.email} onChange = {this.handleemail} autoComplete="classname" autoFocus />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="AdminName">password</InputLabel>
                        <Input id="password" type = "password" name="password" value = {this.password} onChange = {this.handlepassword} autoComplete="current-password" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">InstitutionName</InputLabel>
                        <Input
                            name="InstitutionName"
                            type="name"
                            id="InstitutionName"
                            value = {this.InstitutionName}
                            onChange = {this.handleInstitutionName}
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">classname</InputLabel>
                        <Input
                            name="classname"
                            type="classname"
                            id="classname"
                            value = {this.classname}
                            onChange = {this.handleclassname}
                            autoComplete="classname"
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">section</InputLabel>
                        <Input
                            name="section"
                            type="name"
                            id="section"
                            value = {this.section}
                            onChange = {this.handlesection}
                            autoComplete="Section"
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleRegister}
                        className={classes.submit}
                    >
                        Registration Form
                    </Button>
                </form>
            </Paper>
        </main>
    </div>// /dwdn
        );
    }

}
// Registration.propTypes = {
//     	classes: PropTypes.object
//     };


export default withRouter(withStyles(styles)(TeacherRegister));