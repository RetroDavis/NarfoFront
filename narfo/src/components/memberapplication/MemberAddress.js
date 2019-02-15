import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigateNext from "@material-ui/icons/NavigateNext";
import ArrowBack from "@material-ui/icons/NavigateBefore";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class MemberAddress extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = event => {
    event.preventDefault();
    const userData = this.state;
    console.log(userData);
  };

  handleChange = name => event => {
    this.props.onMemberDetailsChange(event.target.value, name);
  };

  render() {
    return (
      <div>
        <h1>Membership Application</h1>
        <h2>Member Address</h2>
        <form className="MemberRegister" onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-Address"
            label="Address"
            value={this.props.memDetails.PhysicalAddress}
            onChange={this.handleChange("PhysicalAddress")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-Suburb"
            label="Suburb"
            value={this.props.memDetails.Suburb}
            onChange={this.handleChange("Suburb")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-City"
            label="City"
            value={this.props.memDetails.City}
            onChange={this.handleChange("City")}

            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-Province"
            label="Province"
            value={this.props.memDetails.Province}
            onChange={this.handleChange("Province")}

            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-PostalCode"
            label="Postal Code"
            value={this.props.memDetails.PostalCode}
            onChange={this.handleChange("PostalCode")}

            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <Link to="/MemberDetails">
            <Fab color="primary" aria-label="Add" type="Submit">
              <ArrowBack />
            </Fab>
          </Link>
          <Link to="/LoginDetails">
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
)(MemberAddress);
