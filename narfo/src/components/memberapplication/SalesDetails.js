import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Fab from '@material-ui/core/Fab';
import NavigateNext from '@material-ui/icons/NavigateNext';
import ArrowBack from '@material-ui/icons/NavigateBefore';
import { Link } from "react-router-dom";

export default class MemberPage5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Accept_Electronic_Comms: false,
      Sales_Representitive: "",
      Sales_list: "",
      Store: "",
      Store_list: "",
      CurrentMember_Associaton: false,
      communication_Policy: false,
      labelWidth: 0,
      gotoNextPage: false,

      //Clear Error text
      Accept_Electronic_CommsError: '',
      Sales_RepresentitiveError: "",
      Sales_listError: "",
      StoreError: "",
      Store_listError: "",
      CurrentMember_AssociatonError: false,
      communication_PolicyError: false,
      labelWidthError: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionChange = event => {
    this.setState({ CurrentMember_Associaton: event.target.value });
  };

    //Clear errors everytime you render new input validation
    clearErroText = () =>{
      this.setState({
        Accept_Electronic_CommsError: '',
        Sales_RepresentitiveError: "",
        Sales_listError: "",
        StoreError: "",
        Store_listError: "",
        CurrentMember_AssociatonError: false,
        communication_PolicyError: false,
        labelWidthError: 0,
         helperText: ''
      });
  }

  checkForErrors = () =>{
    this.gotoNextPage=false;
    this.clearErroText();
    let isError = false;
    const errors = {};

    if(this.state.Sales_Representitive=== ""){
        isError = true;
        errors.Sales_RepresentitiveError = "invalid option selection"    
    }

    if(this.state.Store=== ""){
      isError = true;
      errors.StoreError = "invalid option selection"    
    }

    if(this.state.CurrentMember_Associaton=== ""){
      isError = true;
      errors.CurrentMember_AssociatonError = "invalid option selection"    
  }

  if(this.state.Accept_Electronic_Comms=== ""){
    isError = true;
    errors.Accept_Electronic_CommsError = "invalid option selection"  
  }

  
  if(this.state.Accept_Electronic_Comms=== ""){
    isError = true;
    errors.Accept_Electronic_CommsError = "invalid option selection"  
  }
  
    if(isError){
        this.setState({
            ...this.setState,
            ...errors
        });
    }
    
    return isError;
}

handleSubmit = (event) => {
  event.preventDefault()
  const userdata = this.state;
  const err = this.checkForErrors();
  this.state.gotoNextPage = err;
  console.log(userdata)
  console.log(err)
  if(err){
      //clear form
      this.setState({
        Accept_Electronic_Comms: false,
        Sales_Representitive: "",
        Sales_list: "",
        Store: "",
        Store_list: "",
        CurrentMember_Associaton: false,
        communication_Policy: false,
        labelWidth: 0
        
      });
  } else{
      console.log(userdata)
      this.handleChange()
  }
}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitValidResults = () => {
    if(this.state.gotoNextPage) {
        return <Link to="/MemberDone">
             <Fab color="primary" aria-label="Add" type="Submit">
                 <NavigateNext/>> 
             </Fab>
         </Link>;
      }else{
          //Validate again 
          this.gotoNextPage = false
          return <Fab color="primary" aria-label="Add" type="Submit">
              <NavigateNext> </NavigateNext>
          </Fab>
      }          
  }

  render() {
    const { Accept_Electronic_Comms } = this.state;
    const { Sales_Representitive } = this.state;
    const { Sales_list } = ["hello", "goodbye"];
    const { Store } = this.state;
    const { CurrentMember_Associaton } = this.state;

    // let Sales_list = this.props.state.Sales_list;
    // let optionItems = Sales_list.map((planet) =>
    //         <option key={planet.name}>{planet.name}</option>
    // );
    return (
      <div>
         <h1>Membership Application</h1>
        <h2>Sales decleration</h2><br/>
        <form onSubmit={this.handelSubmit}>
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
              value={this.state.Sales_Representitive}
              onChange={this.handleChange("Sales_Representitive")}
              input={
                <OutlinedInput
                  name="Sales_Representitive"
                  labelWidth={this.state.labelWidth}
                  id="outlined-Sales-native-simple"
                />
              }
            >
              <option value="Sales" />
              <option value={"cello"}>cello</option>
              <option value={"Ntumi"}>Ntumi</option>
              <option value={"Micky"}>Micky</option>
              <option value={"MVP"}>MVP</option>
              <option value={"Thandi"}>Thandi</option>
            </Select>
          </FormControl>
          <br />
          {this.state.Sales_RepresentitiveError}
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
              value={this.state.Store}
              onChange={this.handleChange("Store")}
              input={
                <OutlinedInput
                  name="Store"
                  labelWidth={this.state.labelWidth}
                  id="outlined-Store-native-simple"
                />
              }
            >
              <option value="Store" />
              <option value={"Gauteng"}>Gauteng</option>
              <option value={"Limpopo"}>Limpopo</option>
              <option value={"CapeTown"}>CapeTown</option>
              <option value={"durbs"}>durbs</option>
              <option value={"EP"}>EP</option>
            </Select>
          </FormControl>{" "}
          <br />
          {this.state.StoreError}
          <br/>
          <label>
            Are you affiliated with another association
            <br />
            <Radio
              checked={this.state.CurrentMember_Associaton === "Yes"}
              onChange={this.handleOptionChange}
              value="Yes"
              name="radio-button-demo"
              aria-label="Yes"
            />
            Male
            <Radio
              checked={this.state.CurrentMember_Associaton === "No"}
              onChange={this.handleOptionChange}
              value="No"
              name="radio-button-demo"
              aria-label="No"
            />
            Female
          </label>
          <br />
          {this.state.CurrentMember_AssociatonError}
          <br/>
          <label>
            I Hereby Accept the electronic communication policy:
            <br/>
            <Checkbox
              checked={this.state.communication_Policy}
              onChange={this.handleChange("communication_policy")}
              value="Yes"
            />
          </label>
          <br/>
          {this.state.Accept_Electronic_CommsError}
          <br/>
          <Link to="/Declaration">
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
