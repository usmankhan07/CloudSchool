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
import RenderPropsMenu from './menurole';


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









class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            Institutionname: '',
            country: '',
            city: '',
            AdminName: '',
            Adminpassword: '',
            Adminemail: ''
        }
        this.handleInstitutionname = this.handleInstitutionname.bind(this);
		this.handlecountry = this.handlecountry.bind(this);
		this.handlecity = this.handlecity.bind(this);
		this.handleAdminName = this.handleAdminName.bind(this);
		this.handleAdminemail = this.handleAdminemail.bind(this);
        this.handleAdminpassword = this.handleAdminpassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

    }

    handleInstitutionname = (event) => {
		this.setState({
			Institutionname: event.target.value,
	  });
	}

	handlecountry = (event) => {
		this.setState({
			country: event.target.value,
	  });
	}

	handlecity (event){
		this.setState({
			city: event.target.value,
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

	handleAdminName(event) {
		this.setState({
			AdminName: event.target.value,
	  });
    }

    handleRegister(event) {
        this.state = { Institutionname: '', country: '', city: '', AdminName: '',Adminpassword: '',
            Adminemail: ''
        }
        console.log(this.refs.Institutionname);
        axios.post("/api/account/InstitutionRegistration",
            this.setState({
                Institutionname:this.handleInstitutionname,
                country:this.handlecountry(),
                city:this.handlecity(),
                AdminName:this.AdminName(),
                Adminpassword:this.handleAdminpassword(),
                Adminemail:this.handleAdminemail()
            }) ).then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const { classes } = this.props;
        const  {
			Institutionname,
			country,
			city,
			AdminName,
			Adminpassword,
			Adminemail,
			} = this.state;
        return(
            <div>
				<CssBaseline />
                <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                Institution Registration Form
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Institutionname</InputLabel>
                        <Input name="Institutionname" type="name" id="Institutionname" value = {this.Institutionname} onChange = {this.handleInstitutionname} autoComplete="name" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="country">country</InputLabel>
                        <Input id="country" type = "name" name="country" value = {this.country} onChange = {this.handlecountry} autoComplete="country" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="city">city</InputLabel>
                        <Input id="classname" name="city" value = {this.city} onChange = {this.handlecity} autoComplete="classname" autoFocus />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="AdminName">AdminName</InputLabel>
                        <Input id="classname" name="adminname" value = {this.AdminName} onChange = {this.handleAdminName} autoComplete="classname" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Adminpassword</InputLabel>
                        <Input
                            name="adminpassword"
                            type="password"
                            id="Adminpassword"
                            value = {this.Adminpassword}
                            onChange = {this.handleAdminpassword}
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Adminemail</InputLabel>
                        <Input
                            name="adminemail"
                            type="email"
                            id="Adminemail"
                            value = {this.Adminemail}
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
                        onClick={this.handleInstitutionRegistration}
                        className={classes.submit}
                    >
                        Registration Form
                    </Button>
                </form>
            </Paper>
        </main>
    </div>
        );
    }

}
// Registration.propTypes = {
//     	classes: PropTypes.object
//     };


export default withRouter(withStyles(styles)(Register));