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
      isLoaded: false,
      CallResult: [],
    };
  }

  componentDidMount(){
    fetch('http://localhost:44327/api/salesreps/get/all/sales')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            CallResult: json
        })
    });
  }

  handleOptionChange = event => {
    this.setState({ CurrentMember_Associaton: event.target.value });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = (event) => {
   event.preventDefault()
   console.log(this.state.CallResult);
}

  render() {
    let { isLoaded, items } = this.state;
    const { Accept_Electronic_Comms } = this.state;
    const { Sales_Representitive } = this.state;
    const Sales_list = ["hello", "goodbye"];
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
               {this.state.CallResult.map((name, index) => (
                <option value={name.name}>{name.name}</option>
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
            Yes
            <Radio
              checked={this.state.CurrentMember_Associaton === "No"}
              onChange={this.handleOptionChange}
              value="No"
              name="radio-button-demo"
              aria-label="No"
            />
            No
          </label>
          <br />
          <label>
            I Hereby Accept the electronic communication policy:
            <Checkbox
              checked={this.state.communication_Policy}
              onChange={this.handleChange("communication_Policy")}
              value="communication_Policy"
            />
          </label>
          <br/>
          <Link to="/Declaration">
            <Fab color="primary" aria-label="Add" type="Submit">
              <ArrowBack />
            </Fab>
          </Link>
          <Link to="/MemberDone">
            <Fab color="primary" aria-label="Add" type="Submit">
              <NavigateNext />
            </Fab>
          </Link>
        </form>
      </div>
    );
  }
}
