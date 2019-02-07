import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainHome from '../homePage/MainHome';

const styles = theme => ({
  root: {
    height: '100vh',
  },
});

class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <MainHome/>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
