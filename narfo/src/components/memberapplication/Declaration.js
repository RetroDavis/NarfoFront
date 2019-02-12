import React, { Component } from 'react'
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Fab from '@material-ui/core/Fab';
import NavigateNext from '@material-ui/icons/NavigateNext';
import ArrowBack from '@material-ui/icons/NavigateBefore';
import { Link } from "react-router-dom";

export default class MemeberSeven extends Component {
    constructor(props){
        super(props);   
        this.state = {
            FCA: '',
            Storage : '',
            Guilty : '',
            CoC: false,
            DC: false,
            DocTrue: false,
            Electronic: false,
            gotoNextPage: false,

            //ErrorText
            FCAError: '',
            StorageError : '',
            GuiltyError : '',
            CoCError: false,
            DCError: false,
            DocTrueError: false,
            ElectronicError: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Clear errors everytime you render new input validation
   clearErroText = () =>{
    this.setState({
            FCAError: '',
            StorageError : '',
            GuiltyError : '',
            CoCError: '',
            DCError: '',
            DocTrueError: '',
            ElectronicError: '' 
    });
}

checkForErrors = () =>{
    this.gotoNextPage=false;
    this.clearErroText();
    let isError = false;
    const errors = {};
    
    if(this.state.FCA=== ""){
        isError = true;
        errors.FCAError = "select one option"    
    }

    if(this.state.Storage=== ""){
        isError = true;
        errors.StorageError = "select one option"    
    }

    if(this.state.Guilty=== ""){
        isError = true;
        errors.GuiltyError = "select one option"    
    }

    if(this.state.CoC=== ""){
        isError = true;
        errors.CoCError = "select one option"    
    }

    if(this.state.DC=== ""){
        isError = true;
        errors.DCError = "select one option"    
    }

    if(this.state.Electronic=== ""){
        isError = true;
        errors.ElecError = "select one option"    
    }

    if(isError){
        this.setState({
            ...this.setState,
            ...errors
        });
    }
    
    return isError;
}

    handleSubmit = (event) =>{
        event.preventDefault();
        const userData = this.state;
        console.log(userData);
        const err = this.checkForErrors();
        this.gotoNextPage = err;
        console.log(err)
        if(err){
            //clear form
            this.setState({
                FCAError: '',
                StorageError : '',
                GuiltyError : '',
                CoCError: '',
                DCError: '',
                DocTrueError: '',
                ElectronicError: '' 
            });
        } else{  
            console.log(err)
            this.handleChange()
        }       
       }

       submitValidResults = () => {
        if(this.gotoNextPage) {
            return <Link to="/SalesDetails">
                        <Fab color="primary" aria-label="Add" type="Submit">
                        <NavigateNext></NavigateNext>
                        </Fab>
                </Link>
          }else{
              //Validate again 
              return <Fab color="primary" aria-label="Add" type="Submit"  >
                  <NavigateNext> </NavigateNext>
              </Fab>
          }          
      }

    handleFCAOptionChange = changeEvent => {
        this.setState({
         FCA : changeEvent.target.value
        });
      };

    handleStorageOptionChange = changeEvent => {
        this.setState({
         Storage : changeEvent.target.value
        });
    };

    handleGuiltyOptionChange = changeEvent => {
            this.setState({
             Guilty : changeEvent.target.value
            });
      };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    render() {
    return (
      <div>
        <h1>Membership Application</h1>
        <h2>Decleration</h2>
        <form onSubmit={this.handleSubmit}>
            <label>
                Are you well acquainted with the current 
                Firearms Control Act<br/>
                <Radio
                    checked={this.state.FCA === "Yes"}
                    onChange={this.handleFCAOptionChange}
                    value="Yes"
                    name="radio-button-demo"
                    aria-label="Yes"
                />Yes 
                <Radio
                    checked={this.state.FCA === "No"}
                    onChange={this.handleFCAOptionChange}
                    value="No"
                    name="radio-button-demo"
                    aria-label="No"
                />No
            </label><br/>
            {this.state.FCAError}
            <br/>
            <label>
                Are you well acquainted with the use and storage of your 
                Firearm<br/> 
                <Radio
                    checked={this.state.Storage === "Yes"}
                    onChange={this.handleStorageOptionChange}
                    value="Yes"
                    name="radio-button-demo"
                    aria-label="Yes"
                />
                Yes
                <Radio
                    checked={this.state.Storage === "No"}
                    onChange={this.handleStorageOptionChange}
                    value="No"
                    name="radio-button-demo"
                    aria-label="No"
                />
                No
            </label>
            <br/>
            {this.state.StorageError} 
            <br/>
            <label>
                Have you ever been found guilty of any firearm related 
                offence where your finger prints taken<br/>
                <Radio
                    checked={this.state.Guilty === "Yes"}
                    onChange={this.handleGuiltyOptionChange}
                    value="Yes"
                    name="radio-button-demo"
                    aria-label="Yes"
                />
                Yes
                <Radio
                    checked={this.state.Guilty === "No"}
                    onChange={this.handleGuiltyOptionChange}
                    value="No"
                    name="radio-button-demo"
                    aria-label="No"
                />
                No
            </label><br/>
            {this.state.GuiltyError} 
            <br/>
            <label>
                I hereby declare that I fully understand and abide by 
                the code of conduct Codes of Conduct<br/>
                <Checkbox
                    checked={this.state.CoC}
                    onChange={this.handleChange('CoC')}
                    value="CoC"
                />
                    Yes
            </label><br/>
            <label>
                I hereby declare that I fully understand and abide by 
                the disciplinary code Disciplinary Code<br/>
                <Checkbox
                    checked={this.state.DC}
                    onChange={this.handleChange('DC')}
                    value="DC"
                />
                Yes
            </label><br/>
            {this.state.DCError} 
            <br/>
            <label>
                I hereby declare that all information in this document 
                is true<br/>
                <Checkbox
                    checked={this.state.DocTrue}
                    onChange={this.handleChange('DocTrue')}
                    value="DocTrue"
                />
                Yes
            </label><br/>
            {this.state.DocTrueError} 
            <br/>
            <label>
                I hereby accept the Electronic Communication Policy<br/>
                <Checkbox
                    checked={this.state.Electronic}
                    onChange={this.handleChange('Electronic')}
                    value="Electronic"
                />
                Yes    
            </label><br/>
            {this.state.ElectronicError} 
            <br/>
                <Link to="/LoginDetails">
                    <Fab color="primary" aria-label="Add" type="Submit">
                        <ArrowBack></ArrowBack>
                    </Fab>
                 </Link>
         {this.submitValidResults()}
      </form>
      </div>
    )
  }
}
