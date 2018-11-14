import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import {withstylyes} from '@material-ui/core/styles';

const styles = {
  Card: {padding: 20, marginTop:10, marginBottom:10}
}


const tiers = [
  {
    title: 'Courses',
    description: ['New and Old Courses'],
    buttonText: 'Vew Courses List',
    buttonVariant: 'outlined',
  },
  {
    title: 'Students',
    description: [
      'students',
    ],
    buttonText: 'View Students List',
    buttonVariant: 'contained',
  },
  {
    title: 'Teachers',
    description: [
      'Teachers',
    ],
    buttonText: 'View Teachers List',
    buttonVariant: 'outlined',
  },
];

function Pricing(props) {

  return (
    <React.Fragment>
      
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 4} md={4}>
              <Card style = {styles.Card}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  
                />
                <CardContent>
                  <div >
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {/* ${tier.price} */}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      List
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    
    </React.Fragment>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Pricing);