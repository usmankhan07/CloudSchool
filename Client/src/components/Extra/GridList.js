import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../images/software-engineer.jpg';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
  }
});

function Courses(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
                  <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Software Engineering"
                    className={classes.media}
                    height="140"
                    src = {img}
                    title="SoftWare Engineering"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Software Engineering
                  </Typography>
                  <Typography component="p">
                    Software engineering is the application of engineering to the development of software
                    in a systematic method
                  </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Button size="small" color="primary">
                    Teacher
                  </Button>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
                  <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Software Engineering"
                    className={classes.media}
                    height="140"
                    src = {img}
                    title="SoftWare Engineering"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Software Engineering
                  </Typography>
                  <Typography component="p">
                    Software engineering is the application of engineering to the development of software
                    in a systematic method
                  </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Button size="small" color="primary">
                    Teacher
                  </Button>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}

Courses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Courses);

