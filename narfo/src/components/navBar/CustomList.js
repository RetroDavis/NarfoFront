import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowBack from '@material-ui/icons/ArrowBackIos';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
    button: {
        margin: "0px",
    },
    link:{
        textDecoration: 'none',
        color: 'black',
        fontWeight : theme.typography.fontWeightRegular,
    },
        list:{
        margin:0,
        backgroundColor:'#d0d0d0',
    },
  });

class CustomList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <List className={classes.list}>
            <ListItem button className={classes.button} ><ArrowBack/>{this.props.heading}</ListItem>
            {this.props.listOfButtons.map((text, index) => (
                <Link className={classes.link}  to={`/${this.props.heading}/${text}`}>
                    <ListItem button className={classes.button} >{text}</ListItem>
                </Link>
            ))}
        </List>
      </div>
    )
  }
}

CustomList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomList);
  