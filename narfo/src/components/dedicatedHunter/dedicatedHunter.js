import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class DedicatedHunter extends Component {
   state = {};
    constructor()
    {
        super();
        this.state = {
            CurrentPage : 0
        }
        this.NextPage = this.NextPage.bind(this);
    }
  
      
  NextPage()
  {
      const newPage =1 + this.state.CurrentPage;
      this.setState({CurrentPage  : newPage})
     console.log(newPage);
  }
  render() {
    return (
<div>
{(this.state.CurrentPage === 1 ) && <div className="container mt-3 shadow">

    <div className="row">
        <div className="col mt-3">
            <h3 className="text-center">Dedicated Status Application</h3>
         </div>
         </div>

        <div className="row">
              <div className="col mt-3 mb-5">
            To apply for Dedicated Hunter Status, you first need to complete the online and practical assessment.
            Read through the NARFO Dedicated Status (D) found in the download section first.
            Then go to the <span className="font-weight-bold">Learning Management System (LMS)</span> section in your members profile and start the Dedicated Hunter course.
            Once the online course is complete, you can print your completion certificate.
            Do the practical assessment as well and then submit the results in the activity section.
            On completion of the theory and practical assessment, you can use this section to apply for your dedicated status
              </div>
        </div>

        <div className="row mb-5">
                <div className="col text-left">
                <a href="www" className="text-success">NARFO Declaration of Dedicated Status (PDF)</a>
                </div>
        </div>


        <div className="row">
                <div className="col mb-5">
                <button className="btn btn-dark  btn-block" onClick={this.NextPage}>
                    APPLY
                </button>
                </div>
        </div>
   
  </div>}
  {(this.state.CurrentPage === 0 ) && <div className="container mt-3 shadow">

  <div className="row mb-3">
      <div className="col mt-3">
          <h3 className="text-center">Dedicated Status Application</h3>
       </div>
       </div>
     <div className="row mb-4">

      <div className="col">
      <div className="row mb-2">
      <div className="col shadow">
     <p className="text-left ml-3">Do you currently hold a dedicated hunter status with any other accreddited association </p>
      <div className="row form-check-inline text-left">
    <label class="form-check-label"><input type="radio" class="form-check-input custom-radio bg-secondary" name="optradio" /> Yes</label>
    <label class="form-check-label"><input type="radio" class="form-check-input custom-radio bg-secondary" name="optradio" /> No</label>
       
 
      </div>
     </div>
       </div>
       </div>



      </div>       
      

      <div className="row mb-2">
        <div className="col  text-danger text-center"> </div>
      </div>


      <div className="row">
              <div className="col mb-5">
              <button className="btn btn-dark  btn-block" onClick={this.NextPage}>
                 Next
              </button>
              </div>
      </div>
 
</div>}


  </div>
  
);
  }
}

export default DedicatedHunter;