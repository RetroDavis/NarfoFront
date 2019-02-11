import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MainActivities from "../loggeddInUser/activitiesPage/MainActivities";

class MembersArea extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/Activities`}>ToActivities</Link>
        <h1>
          This is the Members Area Page {`${this.props.match.url}/Activities`}
        </h1>
      </div>
    );
  }
}

export default MembersArea;
