import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import Fab from "@material-ui/core/Fab";
import NavigateNext from "@material-ui/icons/NavigateNext";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    height: "100vh"
  },
  linkRight: {
    textDecoration: "none",
    color: "black",
    fontWeight: 410
  }
});

class MemberApplication extends Component {
  handleChange = name => event => {
    this.props.onMemberDetailsChange(event.target.value, name);
  };

  handleOnClick = () => {
    this.props.onPageChange("/MembershipDetails");
  };

  handleOptionChange = changeEvent => {
    this.props.onMemberDetailsChange(changeEvent.target.value, "Sex");
  };

  render() {
    return (
      <div>
        <h1>Membership Application {this.props.memDetails.FullName}</h1>
        <h2>Membership Details</h2>
        <form className="Register" onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-name"
            label="Full Name"
            value={this.props.memDetails.Firstname}
            onChange={this.handleChange("Firstname")}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-name"
            label="Surname"
            value={this.props.memDetails.Surname}
            onChange={this.handleChange("Surname")}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-name"
            label="ID Number"
            value={this.props.memDetails.IDNo}
            onChange={this.handleChange("IDNo")}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-name"
            label="CellNo"
            value={this.props.memDetails.CellNo}
            onChange={this.handleChange("CellNo")}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-name"
            label="Occupation"
            value={this.props.memDetails.Occupation}
            onChange={this.handleChange("Occupation")}
            margin="normal"
            variant="outlined"
          />
          <br />
          <FormControl variant="outlined">
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-Ethinicity-native-simple"
            >
              Ethinicity
            </InputLabel>
            <Select
              native
              value={this.props.memDetails.Ethinicity}
              onChange={this.handleChange("Ethinicity")}
              input={
                <OutlinedInput
                  name="Ethinicity"
                  labelWidth={0}
                  id="outlined-Ethinicity-native-simple"
                />
              }
            >
              <option value="Ethinicity" />
              <option value={"Black"}>Black</option>
              <option value={"White"}>White</option>
              <option value={"Coloured"}>Coloured</option>
              <option value={"Indian"}>Indian</option>
              <option value={"Other"}>Other</option>
            </Select>
          </FormControl>
          <br />
          Sex
          <br />
          <Radio
            id="radio-button-male"
            checked={this.props.memDetails.Sex === "Male"}
            onChange={this.handleOptionChange}
            value="Male"
            name="radio-button-male"
            aria-label="Male"
          />
          Male
          <Radio
            id="radio-button-female"
            checked={this.props.memDetails.Sex === "Female"}
            onChange={this.handleOptionChange}
            value="Female"
            name="radio-button-female"
            aria-label="Female"
          />
          Female
          <br />
          <Link to="/MemberAddress">
            <Fab
              color="primary"
              aria-label="Add"
              type="Submit"
              onClick={this.handleOnClick}
            >
              <NavigateNext />
            </Fab>
          </Link>
        </form>
      </div>
    );
  }
}

MemberApplication.propTypes = {
  classes: PropTypes.object.isRequired
};

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
)(withStyles(styles)(MemberApplication));
