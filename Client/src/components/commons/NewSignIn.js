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
import ButtonAppBar from './Navbar';


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









class NewSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            AdminName: '',
            Adminpassword: '',
            Adminemail: ''
        }
        this.handleAdminName = this.handleAdminName.bind(this);
		this.handleAdminemail = this.handleAdminemail.bind(this);
        this.handleAdminpassword = this.handleAdminpassword.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);


    }

	handleAdminpassword () {
		this.setState({
			Adminpassword: document.getElementById('Adminpassword').value,
	  });
	}

	handleAdminemail () {
		this.setState({
			Adminemail: document.getElementById('Adminemail').value,
	  });
	}

	handleAdminName() {
		this.setState({
			AdminName: document.getElementById('AdminName').value,
	  });
    }

    handleSignIn(event) {
        this.state = { AdminName: '',Adminpassword: '',
            Adminemail: ''
        }
        event.preventDefault();
        console.log("m here");
        console.log(this.refs.AdminName);
        axios.post("http://localhost:3001/api/account/AdminSigIn",
            this.setState({
                AdminName:this.handleAdminName(),
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
			AdminName,
			Adminpassword,
			Adminemail,
			} = this.state;
        return(
            <div>
                <ButtonAppBar/>
				<CssBaseline />
                <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                Admin SignIn
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="AdminName">AdminName</InputLabel>
                        <Input id="AdminName" type = "name" name="AdmiNname" value = {this.AdminName} onChange = {this.handleAdminName} autoComplete="classname" autoFocus />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Adminemail</InputLabel>
                        <Input
                            name="Adminemail"
                            type="email"
                            id="Adminemail"
                            value = {this.Adminemail}
                            onChange = {this.handleAdminemail}
                            autoComplete="Adminemail"
                        />
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

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSignIn}
                        className={classes.submit}
                    >
                        SignIn
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


export default withRouter(withStyles(styles)(NewSignIn));