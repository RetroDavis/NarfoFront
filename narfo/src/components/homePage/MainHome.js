import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Welcome to NARFO
        </Typography>
        <Typography component="p">
          Like Guns? Us too!!, Like Shooting Shit? US Tooo!!, Dont know how to do it legally? US TOOOOOO!!!!
        </Typography>
        <Typography component="p">
          JK, We'll show you how to do all of that and keep you up to date with everything gun related.
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);