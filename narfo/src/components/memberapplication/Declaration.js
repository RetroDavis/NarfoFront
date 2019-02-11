import React, { Component } from 'react'
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Fab from '@material-ui/core/Fab';
import NavigateNext from '@material-ui/icons/NavigateNext';
import ArrowBack from '@material-ui/icons/NavigateBefore';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

 class Declaration extends Component {
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
        this.props.onMemberDetailsChange(changeEvent.target.value,'FCA');
      };

    handleStorageOptionChange = changeEvent => {
        this.props.onMemberDetailsChange(changeEvent.target.value,'Storage');
    };

    handleGuiltyOptionChange = changeEvent => {
        this.props.onMemberDetailsChange(changeEvent.target.value,'Guilty');
      };

    handleChange = name => event => {
        this.props.onMemberDetailsChange(event.target.checked,name);;
      };

    render() {
    return (
      <div>
        <h1>Membership Application</h1>
        <h2>Declaration</h2>
        <form onSubmit={this.handleSubmit}>
            <label>
                Are you well acquainted with the current 
                Firearms Control Act<br/>
                <Radio
                    checked={this.props.memDetails.FCA === "Yes"}
                    onChange={this.handleFCAOptionChange}
                    value="Yes"
                    name="radio-button-demo"
                    aria-label="Yes"
                />Yes 
                <Radio
                    checked={this.props.memDetails.FCA === "No"}
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
                    checked={this.props.memDetails.Storage === "Yes"}
                    onChange={this.handleStorageOptionChange}
                    value="Yes"
                    name="radio-button-demo"
                    aria-label="Yes"
                />
                Yes
                <Radio
                    checked={this.props.memDetails.Storage === "No"}
                    onChange={this.handleStorageOptionChange}
                    value="No"
                    name="radio-button-demo"
                    aria-label="No"
                />
                No
            </label><br/>
            <label>
                Have you ever been found guilty of any firearm related 
                offence where your finger prints taken<br/>
                <Radio
                    checked={this.props.memDetails.Guilty === "Yes"}
                    onChange={this.handleGuiltyOptionChange}
                    value="Yes"
                    name="radio-button-demo"
                    aria-label="Yes"
                />
                Yes
                <Radio
                    checked={this.props.memDetails.Guilty === "No"}
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
                    checked={this.props.memDetails.CoC}
                    onChange={this.handleChange('CoC')}
                    value="CoC"
                />
                    Yes
            </label><br/>
            <label>
                I hereby declare that I fully understand and abide by 
                the disciplinary code Disciplinary Code<br/>
                <Checkbox
                    checked={this.props.memDetails.DC}
                    onChange={this.handleChange('DC')}
                    value="DC"
                />
                Yes
            </label><br/>
            <label>
                I hereby declare that all information in this document 
                is true<br/>
                <Checkbox
                    checked={this.props.memDetails.DocTrue}
                    onChange={this.handleChange('DocTrue')}
                    value="DocTrue"
                />
                Yes
            </label><br/>
            <label>
                I hereby accept the Electronic Communication Policy<br/>
                <Checkbox
                    checked={this.props.memDetails.Electronic}
                    onChange={this.handleChange('Electronic')}
                    value="Electronic"
                />
                Yes    
            </label><br/>
            
                <Link to="/LoginDetails">
                        <Fab color="primary" aria-label="Add" type="Submit">
                            <ArrowBack></ArrowBack>
                        </Fab>
                 </Link>
                 <Link to="/SalesDetails">
                        <Fab color="primary" aria-label="Add" type="Submit">
                           <NavigateNext></NavigateNext>
                        </Fab>
                 </Link>
               
      </form>
      </div>
    )
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Declaration);