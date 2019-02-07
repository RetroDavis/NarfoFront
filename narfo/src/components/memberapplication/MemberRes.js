import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import NavigateNext from '@material-ui/icons/NavigateNext';

export default class MemberRes extends Component {

    constructor(props){
    super(props)
    this.state = {
        ResidentialAd : '',
        City : '',
        Province : '',
        Country : '',
        PostalCode : ''
    }

    }

    handleInputChange = (event) =>{
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)

        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>{

        event.preventDefault()
        const userData = this.state;
        console.log(userData)
    }

    handleChange = name => event => {
        this.setState({
            [name] : event.target.value,
        });
    };



  render() {
      const {ResidentialAd} = this.state
      const {City} = this.state
      const {Province} = this.state
      const {Country} = this.state
      const {PostalCode} = this.state

    return (
      <div>
        <p> Address is : {ResidentialAd}</p>
        <p> City is : {City}</p>
        <p> Province is : {Province}</p>
        <p> Country is : {Country}</p>
        <p> PostalCode is : {PostalCode}</p>

        <form className= "MemberRegister" onSubmit = {this.handleSubmit}>

         <TextField
          id="outlined-Address"
          label="Address"
          value={this.state.ResidentialAd}
          onChange={this.handleChange('Residence')}
          margin="normal"
          variant="outlined"
        /> <br/>


        <TextField
          id="outlined-City"
          label="City"
          value={this.state.City}
          onChange={this.handleChange('City')}
          margin="normal"
          variant="outlined"
        /> <br/>

        <TextField
          id="outlined-Province"
          label="Province"
          value={this.state.Province}
          onChange={this.handleChange('Province')}
          margin="normal"
          variant="outlined"
        /> <br/>

        <TextField
          id="outlined-Country"
          label="Country"
          value={this.state.Country}
          onChange={this.handleChange('Country')}
          margin="normal"
          variant="outlined"
        /> <br/>   

        <TextField
          id="outlined-PostalCode"
          label="Postal Code"
          value={this.state.PostalCode}
          onChange={this.handleChange('PostalCode')}
          margin="normal"
          variant="outlined"
        /> <br/>

        <Fab color="primary" aria-label="Add" type="Submit" >
        <NavigateNext></NavigateNext>
        </Fab>
        
        </form>
      </div>
    )
  }
}
