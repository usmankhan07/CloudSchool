import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Profile from './Profile.js';
import InstitutionsTable from './Institutions.js';
import TeacherTable from './Teacher.js';
import StudentTable from './Student.js';
import Courses from './Courses.js';
import Sections from './Sections.js';
import Button from '@material-ui/core/Button';
import library_books from '@material-ui/icons/LibraryBooks';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Class from '@material-ui/icons/Class';


const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		
	},
	menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		
	},
	drawerPaper: {
		width: drawerWidth,
		color:555555,
	},
	nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	toolbar: theme.mixins.toolbar,

});

class TeacherDashboard extends React.Component {
	constructor(props) {
		super(props);
    this.state = {selectedItem:''};
    this.handleDrawer=this.handleDrawer.bind(this);
		this.showMe=this.showMe.bind(this);
		this.handleNewform = this.handleNewform.bind(this);
	}
	state = {
    open: true,
  };

  handleDrawer(selectedItem){
    this.setState({selectedItem:selectedItem})
	}
	handleClick = () => {
    this.setState(state => ({ open: !state.open }));
	};
	
	handleNewform() {
		
			this.props.history.push('/');
	}

  showMe(){
    if(this.state.selectedItem==='Profile'){
      return (<div><Profile/></div>)
    }
    
    else if(this.state.selectedItem==='Students'){
      return (<div><StudentTable/></div>)
    }
    
    else if(this.state.selectedItem==='Courses'){
      return (<div><Courses/></div>)
    }
    
    else if (this.state.selectedItem==='Reports') {
      return (<div>Reports</div>)
		} 
		else if (this.state.selectedItem==='Logout') {
      return (<div> {this.handleNewform()} </div>)
		} 
		
    
  }
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar} >
					<Toolbar>
						<Typography variant="h6" color="inherit" noWrap>
							Teacher Dashboard
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.toolbar} />
					<List>
						{['Profile', 'Teachers', 'Students'].map((text, index) =>
							<ListItem onClick={() => this.handleDrawer(text)} button key={text}>
								<ListItemIcon>
									{index === 1? <AccountBalance/>: <AccountCircle/>}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						)}
					</List>
					<Divider />
					<List>
						{['Courses', 'Reports', 'Logout'].map((text, index) =>
							<ListItem onClick={() => this.handleDrawer(text)} button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						)}
					</List>
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.showMe()}
				</main>
			</div>
		);
	}
}

TeacherDashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeacherDashboard);
