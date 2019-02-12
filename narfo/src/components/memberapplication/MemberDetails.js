import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import Fab from '@material-ui/core/Fab';
import NavigateNext from '@material-ui/icons/NavigateNext';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link } from "react-router-dom";
import axios from 'axios';
// TODO import NumberFormat from 'react-number-format';

const styles = theme => ({
    root: {
      height: '100vh',
    },
    linkRight: {
        textDecoration: 'none',
        color: 'black',
        fontWeight : 410,
      },
  });
  
  class MemberApplication extends Component {
      
      constructor(props) {
          super(props);
        this.state = {
            FullName: '',
            Surname: '',
            IDNum: '',
            Cell: '',
            Occupation: '',
            Ethnicity: '',
            Gender: '',
            LabelWidth: 0,
            gotoNextPage: false,
            
            //Create Error variables for storing error messages
            FullNameError: '',
            SurnameError: '',
            IDNumError: '',
            CellError: '',
            OccupationError: '',
            EthnicityError: '',
            GenderError: ''
  
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    
    handleOptionChange = changeEvent => {
        this.setState({
            Gender: changeEvent.target.value
        });
    };
    
     //Clear errors everytime you render new input validation
   clearErroText = () =>{
        this.setState({
            FullNameError: '',
            SurnameError: '',
            IDNumError: '',
            CellError: '',
            OccupationError: '',
            EthnicityError: '',
            GenderError: '',
           helperText: ''
        });
    }
    
    checkForErrors = () =>{
        this.gotoNextPage=false;
        this.clearErroText();
        let isError = false;
        const errors = {};
        
        if(this.state.FullName.length < 5){
            isError = true;
            errors.FullNameError = "invalid input, should be atleast 5 characters"
        }
        
        if(this.state.Surname.length < 5){
            isError = true;
            errors.SurnameError = "invalid input, should be atleast 5 characters"    
        }

        if((this.state.IDNum.length !== 13)){
            isError = isNaN(this.IDNum)? true:false;
            errors.IDNumError = "invalid length input, enter correct ID"    
        }
        
        if((this.state.Cell.length !== 10) ){
            isError = isNaN(this.Cell)? true:false;
            errors.CellError = "invalid input, 10 digits required"    
        }
        
        if(this.state.Occupation.length < 3){
            isError = true;
            errors.OccupationError = "invalid input, occupation is required"    
        }
        
        if(this.state.Ethnicity===""){
            isError = true;
            errors.EthnicityError = "ethnicity required. choose an option above"    
        }

        if(this.state.Gender=== ""){
            isError = true;
            errors.GenderError = "invalid option selection"    
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
                FullName: '',
                Surname: '',
                IDNum: '',
                Cell: '',
                Occupation: '',
                Ethnicity: '',
                Gender: '',
                LabelWidth: 0
            });
        } else{
            console.log(userdata)
            this.handleChange()
        }
    }

    submitValidResults = () => {
      if(this.state.gotoNextPage) {
          return <Link to="/MemberAddress">
               <Fab color="primary" aria-label="Add" type="Submit">
                   <NavigateNext> </NavigateNext>
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
            return (
                <div>
                <h1>Membership Application</h1>
                <h2>Membership Details</h2>
                <form className='Register' onSubmit={this.handleSubmit}>
                    
                     <TextField
                        id="outlined-name"
                        label="Full Name"
                        value={this.state.FullName}
                        onChange={this.handleChange('FullName')}
                        helperText = {this.state.FullNameError} //invalid fullname error text
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="outlined-name"
                        label="Surname"
                        value={this.state.Surname}
                        onChange={this.handleChange('Surname')}
                        helperText = {this.state.SurnameError} //invalid surname  error text
                        margin="normal"
                        variant="outlined"
                    /><br/>
                    <TextField
                        id="outlined-name"
                        label="ID Number"
                        value={this.state.IDNum}
                        onChange={this.handleChange('IDNum')}
                        helperText = {this.state.IDNumError} // invalid IDNo text error
                        margin="normal"
                        variant="outlined"
                    /><br/>
                    <TextField
                        id="outlined-name"
                        label="Cell"
                        value={this.state.Cell}
                        onChange={this.handleChange('Cell')}
                        helperText = {this.state.CellError} //invalid cellphone number text error
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="outlined-name"
                        label="Occupation"
                        value={this.state.Occupation}
                        onChange={this.handleChange('Occupation')}
                        helperText = {this.state.OccupationError} //Invalid occupation text error
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <br/>
                    <FormControl variant="outlined" >
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-Ethnicity-native-simple"
                        >
                        Ethnicity
                        </InputLabel>
                            <Select
                                native
                                value={this.state.Ethnicity}
                                onChange={this.handleChange('Ethnicity')}
                                input={
                                    <OutlinedInput
                                        name="Ethnicity"
                                        labelWidth={this.state.LabelWidth}
                                        id="outlined-Ethnicity-native-simple"
                                    />  
                                }
                            >
                                <option value="Ethnicity" />
                                <option value={"Black"}>Black</option>
                                <option defaultValue value={"White"}>White</option>
                                <option value={"Coloured"}>Coloured</option>
                                <option value={"Indian"}>Indian</option>
                                <option value={"Other"}>Other</option>
                            </Select>
                    </FormControl>
                    <br/>
                    {this.state.EthnicityError} 
                    <br/>
                    Gender
                    <br/>
                    <Radio
                        id="radio-button-male" 
                        checked={this.state.Gender === "Male"}
                        onChange={this.handleOptionChange}
                        value="Male"
                        name="radio-button-male"
                        aria-label="Male"
                    /> 
                    Male
                    <Radio 
                        id ="radio-button-female"
                        checked={this.state.Gender === "Female"}
                        onChange={this.handleOptionChange}
                        value="Female"
                        name="radio-button-female"
                        aria-label="Female" 
                    />
                    Female
                    <br/>
                    {this.state.GenderError} 
                    <br />
                    {this.submitValidResults()}
                    </form> 
            </div>
        )
    }
}

MemberApplication.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(MemberApplication);
