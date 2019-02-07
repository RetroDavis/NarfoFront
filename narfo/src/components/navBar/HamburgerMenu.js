import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CustomList from './CustomList';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class HamburgerMenu extends React.Component {

  state = {
    HamburgerToggled: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      HamburgerToggled: open,
    });
  };

  render() {
    const headings = ['About', 'Hunting', 'Sport Shooting', 'Firearm Owners'];//for later automation of expansion tabs (Dont forget about idea to automate this after design has been approved)
    //This is the current headings and sub categories for the menu panel, this changes so often ive just decided to leave it here till it gets finalised
    // const aboutHeadings =["About NARFO", "Objectives", "Codes of Conduct", "Wildman Outlets", "Contact"];
    // const huntingHeadings = ["NARFO Hunting", "Hunting Today", "Occasional Hunter", "Dedicated Hunter Status", "Hunter Theoretical Assessment", "Hunter Practical Assessment", "Dedicated Hunter Application"];
    // const sportShootingHeadings =["Occasional Sport Shooter", "Dedicated Sport Shooter Status", "Sport Shooting Rules", "Sport Shooter Theoretical Assessment", "Dedicated Sport Shooter Application"];
    // const firarmOwnerHeadings=["License Application Process","Self Defense","Motivations","Crimeline"];
    const {classes} = this.props;

    const sideList = (
      <div className={classes.list}>
        <CustomList  heading="Home" listOfButtons={headings}></CustomList>
        {/* <CustomList heading="About" listOfButtons={aboutHeadings} expanded={true}></CustomList>
        <CustomList heading="Hunting" listOfButtons={huntingHeadings}></CustomList>
        <CustomList heading="Sport Shooting" listOfButtons={sportShootingHeadings}></CustomList>
        <CustomList heading="Firearm Owners" listOfButtons={firarmOwnerHeadings}></CustomList> */}
      </div>
    );

    return (
      <div>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={this.state.HamburgerToggled}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

HamburgerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HamburgerMenu);