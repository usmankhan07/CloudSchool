import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import usman from '../../images/usman.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  row: {
    display: 'theme.flex',
    justifyContent: 'theme.center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 500,
  },
});


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectId: '',
        };

        this.getSelectedId = this.getSelectedId.bind(this);
    
    }
    
    getSelectedId(id) {
        this.setState({selectId:id});
    }
    render() {
        const {classes} = this.props;
        return(
            <div>
                
                <div>
                 <Avatar
                    alt="Adelle Charles"
                    src = {usman}
                    className={classNames(classes.avatar, classes.bigAvatar)}/>    
                  <main>
                  <Paper  className={classes.root} elevation={1}>
                  <Typography variant="h5" component="h3">
                            <p>
                                Name: Usman Khan
                                <br></br>
                                Father Name: Pervaiz Khan
                                
                            </p>
                        </Typography>
                        <Typography component="p">
                                Class: 10
                                <br></br>
                                Section: B
                                <br></br>
                                Course: Software Engineering
                                
                        </Typography>
                    </Paper>
                  </main>
                </div>
                <div>
                    <button>
                        Choose Profile
                    </button>
                </div>
            </div>
            
        );
    }
        
    
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Profile);