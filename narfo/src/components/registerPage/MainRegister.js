 import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flex:6,
    height:'100vh',
  },
});

function MainRegister(props) {
  const {classes} = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is the Registration Page
        </Typography>
        <Typography component="p">
          MAKE AN ACCOUNT HERE
        </Typography>
      </Paper>
    </div>
  );
}

MainRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainRegister);
