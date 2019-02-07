import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainRegister  from '../registerPage/MainRegister';
import MemberApplication from '../memberapplication/MemberApplication';
const styles = theme => ({
  root: {
    height: '100vh',
  },
});

class Register extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
      <MemberApplication></MemberApplication>
      </div>
    )
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
