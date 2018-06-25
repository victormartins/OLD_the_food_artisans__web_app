import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = { };

function TopMenuBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="inherit"> <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <Avatar
             alt="The Food Artisans Logo"
             src="https://fakeimg.pl/100x100/000/ffff00/?text=Logo&font=lobster"
             sizes="100x100"
             className={classNames(classes.avatar)}
           />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          The Food Artisans
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

TopMenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TopMenuBar);
