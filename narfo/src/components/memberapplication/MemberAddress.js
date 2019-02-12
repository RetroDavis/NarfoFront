import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import NavigateNext from "@material-ui/icons/NavigateNext";
import ArrowBack from '@material-ui/icons/NavigateBefore';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
class MemberAddress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ResidentialAd: "",
      City: "",
      Province: "",
      Country: "",
<<<<<<< origin/lindaniValid

      PostalCode: ""
=======
      PostalCode: "",
      gotoNextPage: false,

      //Error Text
      ResidentialAdError: "",
      CityError: "",
      ProvinceError: "",
      CountryError: "",
      PostalCodeError: ""
>>>>>>> local
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



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
          PostalCodeError: '',
        });
    } else{  
       console.log(err)
        this.handleChange()
    }
  };

  handleChange = name => event => {

    this.props.onMemberDetailsChange(event.target.value,name);
  };


  submitValidResults = () => {
    if(false) {
        return <Link to="/LoginDetails">
                <Fab color="primary" aria-label="Add" type="Submit" onSubmit={this.handleSubmit}>
                  <NavigateNext />
                </Fab>
              </Link>
      }else{
          //Validate again 
          return <Fab color="primary" aria-label="Add" type="Submit"  onSubmit={this.handleSubmit}>
              <NavigateNext> </NavigateNext>
          </Fab>
      }          
  }

  render() {
  
d
    return (
      <div>
        <h1>Membership Application</h1>
        <h2>Member Address</h2>
        <form className="MemberRegister" onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-Address"
            label="Address"
<<<<<<< origin/lindaniValid

            value={this.props.memDetails.ResidentialAd}
            onChange={this.handleChange("ResidentialAd")}

=======
            value={this.state.ResidentialAd}
            onChange={this.handleChange("Residence")}
            helperText = {this.state.ResidentialAdError} //residential adrress error-text
>>>>>>> local
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-City"
            label="City"
<<<<<<< origin/lindaniValid
            value={this.props.memDetails.City}
            onChange={this.handleChange("City")}

=======
            value={this.state.City}
            onChange={this.handleChange("City")} 
            helperText ={this.state.CityError} //City error-text
>>>>>>> local
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-Province"
            label="Province"
            value={this.props.memDetails.Province}
            onChange={this.handleChange("Province")}
<<<<<<< origin/lindaniValid

=======
            helperText = {this.state.ProvinceError} //province error-text
>>>>>>> local
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-Country"
            label="Country"
            value={this.props.memDetails.Country}
            onChange={this.handleChange("Country")}
            helperText = {this.state.CountryError} // Country error-text
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-PostalCode"
            label="Postal Code"
            value={this.props.memDetails.PostalCode}
            onChange={this.handleChange("PostalCode")}
<<<<<<< origin/lindaniValid

=======
            helperText = {this.state.PostalCodeError}  //postal code error
>>>>>>> local
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
const mapStateToProps = state => {
  return {
      currPage: state.currentPage,
      memDetails: state.signupDetails
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onPageChange: (pageName) => dispatch({type: 'UPDATE_CURRENT_PAGE', currPage:pageName}),
      onMemberDetailsChange: (value,vname) => dispatch({type: 'UPDATE_MEMBER_DETAILS', varValue:value, varName:vname})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberAddress);

