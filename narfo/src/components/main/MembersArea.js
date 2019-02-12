import React, { Component } from "react";
import { Link } from "react-router-dom";

class MembersArea extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/Activities`}>ToActivities</Link>
        <h1>This is the Members Area Page</h1>
      </div>
    );
  }
}

export default MembersArea;
