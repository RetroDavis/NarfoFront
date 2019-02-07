import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainLogin  from '../loginPage/MainLogin';

const styles = theme => ({
  root: {
    // width: '100%',
    // height: '100%',
    // flex:1,
    height: '100vh',
  },
});

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MainLogin></MainLogin>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
