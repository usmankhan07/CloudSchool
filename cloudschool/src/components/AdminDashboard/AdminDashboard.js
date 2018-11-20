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
import SignIn from '../commons/SignIn.js';
import InstitutionsTable from './Institutions.js';
import TeacherTable from './Teacher.js';
import StudentTable from './Student.js';


const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	toolbar: theme.mixins.toolbar,
});

class AdminDashboard extends React.Component {
	constructor(props) {
		super(props);
    this.state = {selectedItem:''};
    this.handleDrawer=this.handleDrawer.bind(this);
    this.showMe=this.showMe.bind(this);
  }
  handleDrawer(selectedItem){
    this.setState({selectedItem:selectedItem})
  }
  showMe(){
    if(this.state.selectedItem==='Profile'){
      return (<div><Profile/></div>)
    }
    else if(this.state.selectedItem==='Institutions'){
      return (<div><InstitutionsTable/></div>)
    }
    
    else if(this.state.selectedItem==='Teachers'){
      return (<div><TeacherTable/></div>)
    }
    
    else if(this.state.selectedItem==='Students'){
      return (<div><StudentTable/></div>)
    }
    
    else if(this.state.selectedItem==='Courses'){
      return (<div>Courses</div>)
    }
    
    else if(this.state.selectedItem==='Sections'){
      return (<div>Sections</div>)
    }
    
    else {
      return (<div>Reports</div>)
    }
    
  }
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" color="inherit" noWrap>
							Clipped drawer
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
						{['Profile', 'Institutions', 'Teachers', 'Students'].map((text, index) =>
							<ListItem onClick={() => this.handleDrawer(text)} button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						)}
					</List>
					<Divider />
					<List>
						{['Courses', 'Sections', 'Reports'].map((text, index) =>
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

AdminDashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDashboard);
