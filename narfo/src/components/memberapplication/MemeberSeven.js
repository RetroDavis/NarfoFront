import React, { Component } from 'react'
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Fab from '@material-ui/core/Fab';
import NavigateNext from '@material-ui/icons/NavigateNext';
import InputLabel from '@material-ui/core/InputLabel';

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
            Electronic: false
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()   
        console.log(this.state.Guilty)       
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
       <h2>Membership Details</h2>
       
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

        <label>
            Are you well acquainted with the use and storage of your 
            Firearm<br/>
            
                
                <Radio
                    checked={this.state.Storage === "Yes"}
                    onChange={this.handleStorageOptionChange}
                    value="Yes"
                    name="radio-button-demo"
                    aria-label="Yes"
                />Yes
                    
                
                <Radio
                    checked={this.state.Storage === "No"}
                    onChange={this.handleStorageOptionChange}
                    value="No"
                    name="radio-button-demo"
                    aria-label="No"
                />No
        </label><br/>
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
        <label>
          I hereby accept the Electronic Communication Policy
         <br/>
            <Checkbox
                checked={this.state.Electronic}
                onChange={this.handleChange('Electronic')}
                value="Electronic"
            />
            Yes
            
        </label><br/>

    <Fab color="primary" aria-label="Add" type="Submit" >
        <NavigateNext></NavigateNext>
    
    </Fab>
      </form>
      </div>
    )
  }
}
