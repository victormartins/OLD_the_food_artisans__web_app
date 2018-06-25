import React from 'react';
import PropTypes from 'prop-types';
import ButtonMakeReservation from './ButtonMakeReservation'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function ServiceBox(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.cover}
          title={props.name}
        />
        <CardContent>
          <Typography variant="title">{props.name}</Typography>
          <Typography variant="subheading" color="textSecondary"> {props.description} </Typography>
        </CardContent>
        <CardActions>
          <ButtonMakeReservation url={props.url}/>
        </CardActions>
      </Card>
    </div>
  );
}

ServiceBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceBox);
