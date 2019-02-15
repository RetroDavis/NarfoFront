import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from "@material-ui/core/Fab";
import NavigateNext from "@material-ui/icons/NavigateNext";
import ArrowBack from "@material-ui/icons/NavigateBefore";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LoginDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = name => event => {
    this.props.onMemberDetailsChange(event.target.value, name);
  };

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userData = this.state;
    console.log(userData);
  };

  handleOption = name => event => {
    this.props.onMemberDetailsChange(event.target.checked, name);
  };

  render() {
    return (
      <div>
        <h1>Membership Application</h1>
        <h2>Login Details</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-Email"
            label="Email"
            value={this.props.memDetails.Email}
            onChange={this.handleChange("Email")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-Username"
            label="Username"
            value={this.props.memDetails.Username}
            onChange={this.handleChange("Username")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-Password"
            label="Password"
            value={this.props.memDetails.Password}
            onChange={this.handleChange("Password")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-PasswordConfirm"
            label="PasswordConfirm"
            value={this.props.memDetails.PasswordConfirm}
            onChange={this.handleChange("PasswordConfirm")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <p>
            I hereby declare that the information furnished above and the
            confirmation questions below is true and correct to the best of my
            knowledge and I undertake to inform the NARFO of any changes in
            herein by either updating my profile or electronically or by Email
            informing the NARFO of changes. In the event that the information is
            found to be false or misleading or misrepresenting, I am aware that
            my membership may be cancelled.
          </p>{" "}
          <br />
          <label>
            I Accept:
            <Checkbox
              checked={this.props.memDetails.Delaraction_Acceptance}
              onChange={this.handleOption("Delaraction_Acceptance")}
              value="Delaraction_Acceptance"
            />
          </label>
          <br />
          <Link to="/MemberAddress">
            <Fab color="primary" aria-label="Add" type="Submit">
              <ArrowBack />
            </Fab>
          </Link>
          <Link to="/Declaration">
            <Fab color="primary" aria-label="Add" type="Submit">
              <NavigateNext />
            </Fab>
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currPage: state.currentPage,
    memDetails: state.signupDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPageChange: pageName =>
      dispatch({ type: "UPDATE_CURRENT_PAGE", currPage: pageName }),
    onMemberDetailsChange: (value, vname) =>
      dispatch({
        type: "UPDATE_MEMBER_DETAILS",
        varValue: value,
        varName: vname
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDetails);
