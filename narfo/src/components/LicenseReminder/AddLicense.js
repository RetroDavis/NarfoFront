import "date-fns";
import React, { Component } from "react";
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

/*
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    grid: {
        width: '60%',
      },
  });
*/
export default class AddLicense extends Component {
  state = {
    LicenseName: "",
    Description: "",
    ReminderType: "",
    ExpiryDate: "",
    selectedDate: new Date("2014-08-18T21:11:54"),
   
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleClick = () => {
    console.log(this.state.LicenseName);
    console.log(this.state.Description);
    console.log(this.state.ReminderType);
    console.log(this.state.ExpiryDate);
  };
  handleSubmit = (e) => {
      var _th = this;
     e.preventDefault();
    debugger;
    
   // var postBoday = JSON.stringify({ "LicenseName": _th.state.LicenseName,"Description": _th.state.Description, "ReminderType": _th.state.ReminderType, "ExpiryDate": _th.state.ExpiryDate, "ExpiryDate": _th.state.ExpiryDate});
    fetch("https://localhost:44327/api/license/newReminder", {
      method: "POST",
      body: JSON.stringify({ "LicenseName": _th.state.LicenseName,"Description": _th.state.Description, "ReminderType": _th.state.ReminderType, "ExpiryDate": _th.state.ExpiryDate}     
      ),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  }
/*

axios.post('https://localhost:44327/api/Member/post/login', user)
.then(res => {
if(this.state.isChecked){
localStorage.setItem('tokenKey', res.data.token);
console.log("local: " + res.data.token);
this.props.history.push("/");
}else{
sessionStorage.setItem('tokenKey',res.data.token);
console.log("session: " + res.data.token);
// _this.props.history.push('/');
}
// valid= true;
})
*/

/*
  function register(user) {
    console.log(JSON.stringify(user));
    const requestOptions = {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'
    },
    body: JSON.stringify({
    FirstName: user.firstName,
    LastName: user.lastName,
    Username: user.username,
    Password: user.password
    })
    };
    
    return fetch(`${URL}/users/register`, requestOptions).then(
        function(handleResponse){
            console.log(handleResponse);
        }
    );
    }

*/




  render() {
    //   const { selectedDate } = this.state;
    // const { classes } = this.props;
    return (
      <div>
        <h1>Add license</h1>
        <TextField
          id="outlined-name"
          label="License Name"
          className=""
          value={this.state.LicenseName}
          onChange={this.handleChange("LicenseName")}
          margin="normal"
          variant="outlined"
        />
        <br />

        <TextField
          id="outlined-name"
          label="Description"
          className=""
          value={this.state.Description}
          onChange={this.handleChange("Description")}
          margin="normal"
          variant="outlined"
        />
        <br />

        <TextField
          id="outlined-name"
          label="Reminder Type"
          className=""
          value={this.state.ReminderType}
          onChange={this.handleChange("ReminderType")}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue={this.state.ExpiryDate}
          onChange={this.handleChange("ExpiryDate")}
          className={this.state.ExpiryDate}
          InputLabelProps={{
            shrink: true
          }}
        />

        <Fab
          size="small"
          color="secondary"
          aria-label="Add"
          className=""
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}
