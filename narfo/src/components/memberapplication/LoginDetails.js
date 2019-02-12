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
      Delaraction_Acceptance: false,

      //Error labels
      EmailError: "",
      UserNameError: "",
      PassWordError: "",
      PassWordConfirmError: "",
      DeclarationError: "",
      Delaraction_AcceptanceError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  //Clear errors everytime you render new input validation
  clearErroText = () =>{
    this.setState({
        Email: "",
        UserName: "",
        PassWord: "",
        PassWordConfirm: "",
        Declaration: "",
        Delaraction_Acceptance: false,
        helperText: '' 
    });
}

checkForErrors = () =>{
  this.gotoNextPage=false;
  this.clearErroText();
  let isError = false;
  const errors = {};
  
  if(this.state.Email.length < 5){
      isError = true;
      errors.EmailError = "invalid email. correct email required"
  }
  
  if(this.state.UserName.length < 3){
      isError = true;
      errors.UserNameError = "invalid username, should be atleast 3 characters"    
  }

  if(this.state.PassWord.length < 6){
    isError = true;
    errors.PassWordError = "invalid input, should be atleast 6 characters"    
}


if(this.state.PassWordConfirm.length < 6){
  isError = (this.PassWord!==this.PassWordConfirm)? true:false
  errors.PassWordConfirmError = "invalid input, password does not match"    
}
  
  if(this.state.Declaration===""){
      isError = true;
      errors.DeclarationError = "declaration required"    
  }

  if(this.state.Delaraction_Acceptance=== ""){
      isError = true;
      errors.Delaraction_AcceptanceError = "acceptance required"    
  }

  if(isError){
      this.setState({
          ...this.setState,
          ...errors
      });
  }
  return isError;
}


handleSubmit = event => {
  event.preventDefault();
  const userData = this.state;
  console.log(userData);
  const err = this.checkForErrors();
  this.gotoNextPage = err;
  console.log(err)
  if(err){
      //clear form
      this.setState({
        Email: "",
      UserName: "",
      PassWord: "",
      PassWordConfirm: "",
      Declaration: "",
      Delaraction_Acceptance: false
      });
  } else{  
     console.log(err)
      this.handleChange()
  }
};

  handleOption = ChangeEvent => {
    this.setState({
      Delaraction_Acceptance: ChangeEvent.target.value
    });
  };

  submitValidResults = () => {
    if(false) {
        return  <Link to="/Declaration">
                  <Fab color="primary" aria-label="Add" type="Submit">
                    <NavigateNext />
                  </Fab>
                </Link>
      }else{
          //Validate again 
          return <Fab color="primary" aria-label="Add" type="Submit"  >
              <NavigateNext> </NavigateNext>
          </Fab>
      }          
  }


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
            helperText = {this.state.EmailError} //email text error
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-UserName"
            label="UserName"
            value={this.state.UserName}
            onChange={this.handleChange("UserName")}
            helperText = {this.state.UserNameError} //username text required
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-PassWord"
            label="PassWord"
            value={this.state.PassWord}
            onChange={this.handleChange("PassWord")}
            helperText = {this.state.UserNameError} //email text
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-PassWordConfirm"
            label="PassWordConfirm"
            value={this.state.PassWordConfirm}
            onChange={this.handleChange("PassWordConfirm")}
            helperText = {this.state.PassWordConfirmError} //password confirmation error text
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
              //helperText = {this.state.DeclarationError} //email text
            />
          </label>
          {this.state.DeclarationError}
          <br/>
          <Link to="/MemberAddress">
            <Fab color="primary" aria-label="Add" type="Submit">
              <ArrowBack />
            </Fab>
          </Link>
          {this.submitValidResults()}
        </form>
      </div>
    );
  }
}
