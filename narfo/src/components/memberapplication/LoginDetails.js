import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from '@material-ui/core/Fab';
import NavigateNext from '@material-ui/icons/NavigateNext';
import ArrowBack from '@material-ui/icons/NavigateBefore';
import { Link } from "react-router-dom";

export default class MemberUserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      UserName: "",
      PassWord: "",
      PassWordConfirm: "",
      Declaration: "",
      Delaraction_Acceptance: false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
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

  handleOption = ChangeEvent => {
    this.setState({
      Delaraction_Acceptance: ChangeEvent.target.value
    });
  };

  render() {
    const { Email } = this.state;
    const { UserName } = this.state;
    const { PassWord } = this.state;
    const { PassWordConfirm } = this.state;
    const { Declaration } = this.state;
    const { Delaraction_Acceptance } = this.state;

    return (
      <div>
         <h1>Membership Application</h1>
        <h2>Login Details</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-Email"
            label="Email"
            value={this.state.Email}
            onChange={this.handleChange("Residence")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-UserName"
            label="UserName"
            value={this.state.ResidentialAd}
            onChange={this.handleChange("UserName")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-PassWord"
            label="PassWord"
            value={this.state.ResidentialAd}
            onChange={this.handleChange("PassWord")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-PassWordConfirm"
            label="PassWordConfirm"
            value={this.state.ResidentialAd}
            onChange={this.handleChange("PassWordConfirm")}
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <p>
            I hereby declare that the information furnished above and the
            confirmation questions below is true and correct to the best of my
            knowledge and I undertake to inform the NARFO of any changes in
            herein by either updating my profile or electronically or by email
            informing the NARFO of changes. In the event that the information is
            found to be false or misleading or misrepresenting, I am aware that
            my membership may be cancelled.
          </p>{" "}
          <br />
          <label>
            I Accept:
            <Checkbox
              checked={this.state.Delaraction_Acceptance}
              onChange={this.handleChange("Declaration_acceptance")}
              value="Declaration"
            />
          </label><br/>
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
