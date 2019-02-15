import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";

import Fab from "@material-ui/core/Fab";
import NavigateNext from "@material-ui/icons/NavigateNext";
import ArrowBack from "@material-ui/icons/NavigateBefore";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import axios from "axios";

class SalesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelWidth: 0,
      isLoaded: false,
      UserID: ""
      
    };
  }

  handleOptionChange = event => {
    this.setState({ CurrentMember_Associaton: event.target.value });
  };

  handleChange = name => event => {
    this.props.onMemberDetailsChange(event.target.value, name);
  };

  handlePolicyOption = name => event => {
    this.props.onMemberDetailsChange(event.target.checked, name);
  };

  componentDidMount() {
    fetch("https://localhost:44327/api/salesReps/get/all/sales")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          CallResult: json.members
        });
      });

    fetch("https://localhost:44327/api/Branches")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          Store_list: json.branchName
        });
      });
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://localhost:44327/api/Member/post/set",
        this.props.memDetails
      )
      .then(res => {
        console.log(this.props.memDetails.Email);
      })
      .catch(function(error) {});

    fetch("https://localhost:44327/api/Member/get/Last/MemNum")
      .then(res => res.json())
      .then(data => {
        this.setState({
          UserID: data.members.memberNumber
        });
        // debugger;
        var value = this.state.UserID;
        var _th = this.props.memDetails;

        this.props.onMemberDetailsChange(this.state.UserID, "MemNo");
      });
  };

  render() {
    let { isLoaded, items } = this.state;

    return (
      <div>
        <h1>Membership Application</h1>
        <h2>Sales decleration</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <FormControl variant="outlined">
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-Sales-native-simple"
            >
              Sales Reps
            </InputLabel>
            <Select
              native
              value={this.props.memDetails.Sales_Representitive}
              onChange={this.handleChange("Sales_Representitive")}
              input={
                <OutlinedInput
                  name="Sales_Representitive"
                  labelWidth={this.state.labelWidth}
                  id="outlined-Sales-native-simple"
                />
              }
            >
              {this.state.CallResult.map((name, index) => (
                <option value={name.firstname}>{name.firstname}</option>
              ))}
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl variant="outlined">
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-Store-native-simple"
            >
              Stores
            </InputLabel>
            <Select
              native
              value={this.props.memDetails.Store}
              onChange={this.handleChange("Store")}
              input={
                <OutlinedInput
                  name="Store"
                  labelWidth={this.state.labelWidth}
                  id="outlined-Store-native-simple"
                />
              }
            >
              {this.state.Store_list.map((name, index) => (
                <option value={name.branch1}>{name.branch1}</option>
              ))}
            </Select>
          </FormControl>{" "}
          <br />
          <label>
            Are you affiliated with another association
            <br />
            <Radio
              checked={this.props.memDetails.CurrentMember_Associaton === "Yes"}
              onChange={this.handleChange("CurrentMember_Associaton")}
              value="Yes"
              name="radio-button-Yes"
              aria-label="Yes"
            />
            Yes
            <Radio
              checked={this.props.memDetails.CurrentMember_Associaton === "No"}
              onChange={this.handleChange("CurrentMember_Associaton")}
              value="No"
              name="radio-button-No"
              aria-label="No"
            />
            No
          </label>
          <br />
          <label>
            I Hereby Accept the electronic communication policy:
            <Checkbox
              checked={this.props.memDetails.communication_Policy}
              onChange={this.handlePolicyOption("communication_Policy")}
              value="communication_Policy"
            />
          </label>
          <br />
          {/* <Link to="/MemberDone"> */}
          <Button
            variant="contained"
            color="primary"
            onClick={this.SearchMember}
          >
            Submit
          </Button>
          {/* </Link> */}
          <br />
          <br />
          <Link to="/Declaration">
            <Fab color="primary" aria-label="Add" type="Submit">
              <ArrowBack />
            </Fab>
          </Link>
          {/* <Link to="/MemberDone"> */}
          <Fab color="primary" aria-label="Add" type="Submit">
            <NavigateNext />
          </Fab>
          {/* </form></Link> */}
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
)(SalesDetails);

