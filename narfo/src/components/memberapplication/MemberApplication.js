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
            fullName: '',
            Surname: '',
            IDNum: '',
            Cell: '',
            Occupation: '',
            Ethnicity: '',
            Gender: '',
            labelWidth: 0
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const userdata = this.state;
        axios.post('http://narfo.retrotest.co.za/Member/set', userdata)
            .then(res => {
                console.log(res.data);

            })
        console.log(userdata)
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

    render() {
        return (
            <div>
                <h1>Membership Application</h1>
                <h2>Membership Details</h2>
                <form className='Register' onSubmit={this.handleSubmit} >
                    <TextField
                        id="outlined-name"
                        label="Full Name"
                        value={this.state.fullName}
                        onChange={this.handleChange('fullName')}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="outlined-name"
                        label="Surname"
                        value={this.state.Surname}
                        onChange={this.handleChange('Surname')}
                        margin="normal"
                        variant="outlined"
                    /><br/>
                    <TextField
                        id="outlined-name"
                        label="ID Number"
                        value={this.state.IDNum}
                        onChange={this.handleChange('IDNum')}
                        margin="normal"
                        variant="outlined"
                    /><br/>
                    <TextField
                        id="outlined-name"
                        label="Cell"
                        value={this.state.Cell}
                        onChange={this.handleChange('Cell')}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="outlined-name"
                        label="Surname"
                        value={this.state.Occupation}
                        onChange={this.handleChange('Occupation')}
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
                                input={
                                    <OutlinedInput
                                        name="Ethnicity"
                                        labelWidth={this.state.labelWidth}
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
                    <br />
                    <Fab color="primary" aria-label="Add" type="Submit" >
                        <NavigateNext></NavigateNext>
                    </Fab>
                </form>
            </div>
        )
    }
}