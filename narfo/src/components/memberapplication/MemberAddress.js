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
      gotoNextPage: false,

      //Error Text
      ResidentialAdError: "",
      CityError: "",
      ProvinceError: "",
      CountryError: "",
      PostalCodeError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
        ResidentialAdError: '',
        CityError: '',
        ProvinceError: '',
        CountryError: '',
        PostalCodeError: '',
        helperText: '' 
    });
}

checkForErrors = () =>{
    this.clearErroText();
    let isError = false;
    const errors = {};
    
    if(this.state.ResidentialAd.length < 5){
        isError = true;
        errors.ResidentialAdError = "invalid input, correct address required"
    }
    
    if(this.state.City.length < 3){
        isError = true;
        errors.CityError = "invalid input, correct city required"    
    }

    if(this.state.Province.length < 5){
      isError = true;
      errors.ProvinceError = "invalid input, correct province required"    
    }

    if((this.state.Country.length <3)){
        isError = true;
        errors.CountryError = "invalid input. correct country required"    
    }
    
    if((this.state.PostalCode.length !== 4) ){
        isError = isNaN(this.PostalCode)? true:false;
        errors.PostalCodeError = "invalid input, 4 digits required"    
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
          ResidentialAdError: '',
          CityError: '',
          ProvinceError: '',
          CountryError: '',
          PostalCodeError: ''
        });
    } else{  
       console.log(err)
        this.handleChange()
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };


  submitValidResults = () => {
    if(this.gotoNextPage) {
        return <Link to="/LoginDetails">
                <Fab color="primary" aria-label="Add" type="Submit" >
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
            helperText = {this.state.ResidentialAdError} //residential adrress error-text
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-Address"
            label="Address"
            value={this.state.ResidentialAd}
            onChange={this.handleChange("Address")} 
            helperText ={this.state.ResidentialAdError} //address error-text
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-City"
            label="City"
            value={this.state.City}
            onChange={this.handleChange("City")} 
            helperText ={this.state.CityError} //City error-text
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-Province"
            label="Province"
            value={this.state.Province}
            onChange={this.handleChange("Province")}
            helperText = {this.state.ProvinceError} //province error-text
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-Country"
            label="Country"
            value={this.state.Country}
            onChange={this.handleChange("Country")}
            helperText = {this.state.CountryError} // Country error-text
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-PostalCode"
            label="Postal Code"
            value={this.state.PostalCode}
            onChange={this.handleChange("PostalCode")}
            helperText = {this.state.PostalCodeError}  //postal code error
            margin="normal"
            variant="outlined"
          />
          <br />
          <Link to="/MemberDetails">
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
