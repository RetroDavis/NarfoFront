import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigateNext from "@material-ui/icons/NavigateNext";
import ArrowBack from '@material-ui/icons/NavigateBefore';
import { Link } from "react-router-dom";

export default class MemberRes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResidentialAd: "",
      City: "",
      Province: "",
      Country: "",
      PostalCode: "",
      ResidentialAdError: "", //setting the error labels
      CityError: "",
      ProvinceError: "",
      CountryError: "",
      PostalCodeError: ""
    };
  }

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    const err = this.validate(); //validate the form before submitting it
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {};
    if(this.state.ResidentialAd.length < 2){
        isError = true;
        errors.ResidentialAdError = "minimum of 2 characters for address";
    }
    if(this.state.City.length < 2){
        isError = true;
        errors.CityError = "minimum of 2 characters for city";
    }

    if(this.state.Province.length < 2){
        isError = true;
        errors.ProvinceError= "invalid province";
    }
   
    if(this.state.Country.value===''){
        isError = true;
        errors.CountryError = "country name required";
    }

    if(this.state.PostalCode.length<5){
        isError = true;
        errors.PostalCodeError = "invalid postal code";
    }
  
    if(isError){
        this.setState({
            ...this.state,
            ...errors
        });
    };

    return isError;
}

  handleSubmit = event => {
    event.preventDefault();
    const userData = this.state;
    console.log(userData);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { ResidentialAd } = this.state;
    const { City } = this.state;
    const { Province } = this.state;
    const { Country } = this.state;
    const { PostalCode } = this.state;

    return (
      <div>
        <h1>Membership Application</h1>
        <h2>Member Address</h2>
        <form className="MemberRegister" onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-Address"
            label="Address"
            value={this.state.ResidentialAd}
            onChange={this.handleChange("Residence")}
            helperText={this.state.ResidentialAdError} 
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-City"
            label="City"
            value={this.state.City}
            onChange={this.handleChange("City")}
            helperText={this.state.CityError} 
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-Province"
            label="Province"
            value={this.state.Province}
            onChange={this.handleChange("Province")}
            helperText={this.state.ProvinceError} 
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-Country"
            label="Country"
            value={this.state.Country}
            onChange={this.handleChange("Country")}
            helperText={this.state.CountryError} 
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            id="outlined-PostalCode"
            label="Postal Code"
            value={this.state.PostalCode}
            onChange={this.handleChange("PostalCode")}
            helperText={this.state.PostalCodeError} 
            margin="normal"
            variant="outlined"
          />{" "}
          <br />
          <Link to="/MemberDetails">
            <Fab color="primary" aria-label="Add" type="Submit">
              <ArrowBack />
            </Fab>
          </Link>
         
            <Fab color="primary" aria-label="Add" type="Submit">
              <NavigateNext />
            </Fab>
         
        </form>
      </div>
    );
  }
}
