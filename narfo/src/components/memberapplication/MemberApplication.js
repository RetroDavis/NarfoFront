import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import Fab from '@material-ui/core/Fab';
import NavigateNext from '@material-ui/icons/NavigateNext';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';

export default class MemberApplication extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            FullNameError:"",
            Surname: '',
            SurnameError:"",
            IDNum: '',
            IDNumError:"",
            Cell: '',
            CellError:"",
            Occupation: '',
            OccupationError:"",
            Ethnicity: '',
            EthnicityError:"",
            Gender: '',
            GenderError:"",
            LabelWidth: 0,
            LabelWidthError:"",
        }
    }

    change = e =>{
        this.props.onChange({[e.target.name]:e.target.value});
        this.setState({
            [e.target.name]:e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {};
        if(this.state.FullName.length < 5){
            isError = true;
            //error={true};
            errors.FullNameError = "name should be atleast 5 characters long";
        }
        if(this.state.Surname.length < 3){
            isError = true;
            //error={true};
            errors.SurnameError = "invalid surname";
        }

        if(this.state.IDNum.length !== 13){
            isError = true;
            //error={true};
            errors.IDNumError = "invalid ID number";
        }

        if(this.state.Occupation.length === 0 ){
            isError = true;
            //error={true};
            errors.OccupationError = "Occupation cannot be left empty";
        }

        if(this.state.Ethnicity){
            isError = true;
            //error={true};
            errors.Ethnicity = "Occupation cannot be left empty";
        }

       /* const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 10){
            isError = true;
            //error={true};
            errors.IDNumError = "Name should be atleast 5 characters long";
        }
     if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Requires valid email";
          }
      */

        if(isError){
            this.setState({
                ...this.state,
                ...errors
            });
        };

        return isError;
    }

    handleSubmit = (event) => {
        event.preventDefault()

        //this.props.Onsubmit(this.state);
        const err = this.validate(); //validate the form before submitting it
        //clear the form
       console.log(err);
        const userdata = this.state;
        // axios.post('http://narfo.retrotest.co.za/Member/set', userdata)
        //     .then(res => {
        //         console.log(res.data);

        //     })
        // console.log(userdata)
        if(!err){
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
            
        }
        /*this.props.onChange({
            FullName: '',
            Surname: '',
            IDNum: '',
            Cell: '',
            Occupation: '',
            Ethnicity: '',
            Gender: '',
            LabelWidth: 0
        });
    */}

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

    render() {
        return (
            <div>
                <h1>Membership Application</h1>
                <h2>Membership Details</h2>
                <form className='Register' onSubmit={this.handleSubmit} >
                    <TextField 
                        id="outlined-name"
                        label="Full Name"
                        value={this.state.FullName}
                        onChange={this.handleChange('FullName')}
                       //helperText={this.state.FullNameError} //name length and character validation
                       errorText = "ffefef" 
                       // errorMessages={['this field is required', 'email is not valid']}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="outlined-name"
                        label="Surname"
                        value={this.state.Surname}
                        onChange={this.handleChange('Surname')}
                        errorText={this.state.SurnameError} //surname length and character validation
                        margin="normal"
                        variant="outlined"
                    /><br/>
                    <TextField
                        id="outlined-name"
                        label="ID Number"
                        value={this.state.IDNum}
                        onChange={this.handleChange('IDNum')}
                        errorText={this.state.IDNum} //string length and character validation
                        margin="normal"
                        variant="outlined"
                    /><br/>
                    <TextField
                        id="outlined-name"
                        label="Cell"
                        value={this.state.Cell}
                        onChange={this.handleChange('Cell')}
                        errorText={this.state.CellError} //Check if digits only
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="outlined-name"
                        label="Surname"
                        value={this.state.Occupation}
                        onChange={this.handleChange('Occupation')}
                        errorText={this.state.OccupationError} // character
                        margin="normal"
                        variant="outlined"
                    />
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
                                errorText={this.state.EthnicityError}//check box error
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
                                <option value={"White"}>White</option>
                                <option value={"Coloured"}>Coloured</option>
                                <option value={"Indian"}>Indian</option>
                                <option value={"Other"}>Other</option>
                            </Select>
                             
                    </FormControl>
                    <br/>
                    Gender
                    <br/>
                    <Radio
                        id="radio-button-male"
                        checked={this.state.Gender === "Male"}
                        onChange={this.handleOptionChange}
                        errorText={this.state.GenderError}  //radio button need to be selected
                        value="Male"
                        name="radio-button-male"
                        aria-label="Male"
                    /> 
                    Male
                    <Radio 
                        id ="radio-button-female"
                        checked={this.state.Gender === "Female"}
                        onChange={this.handleOptionChange}
                        errorText={this.state.GenderError}  //radio button need to be selected
                        value="Female"
                        name="radio-button-female"
                        aria-label="Female" 
                    />
                    Female
                    <br />
                    <Fab color="primary" aria-label="Add" type="Submit" >
                        <NavigateNext></NavigateNext>
                    </Fab>
                </form>
            </div>
        );
    }
}
