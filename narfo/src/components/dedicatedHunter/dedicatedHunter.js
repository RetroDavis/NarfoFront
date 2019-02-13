import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class DedicatedHunter extends Component {
   state = {};
    constructor()
    {
        super();
        this.state = {
            CurrentPage : 0,
            CurentDedicatedStatus : "",
            PracticalAssignment : "",
            TheoreticalAssessment : "",
            CurrentOption : ""
           
        }
        this.NextPage = this.NextPage.bind(this);
        
        
    }
    handleCurentDedicatedStatus  = event => {
      this.setState({
      CurentDedicatedStatus  : event.target.value
      })}
      
      handlePracticalAssignment  = event => {
        this.setState({
          PracticalAssignment  : event.target.value
        })}
        
      handleTheoreticalAssessment  = event => {
        this.setState({
          TheoreticalAssessment  : event.target.value
        })}


  NextPage()
  {
      const newPage =1 + this.state.CurrentPage;
      this.setState({CurrentPage  : newPage});
     console.log(newPage);
  }
  render(){ 
    return (
<div>
{(this.state.CurrentPage === 0 ) && <div className="container mt-3 shadow">

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
  {(this.state.CurrentPage === 1 ) && <div className="container mt-3 shadow">

  <div className="row mb-3">
      <div className="col mt-3">
          <h3 className="text-center">Dedicated Status Application</h3>
       </div>
       </div>
       
     <div className="row mb-4">

      <div className="col">

      <div className="row mb-5">
      <div className="col">
     <p className="text-left ml-3">Do you currently hold a dedicated hunter status with any other accreddited association </p>
      <div className="row form-check-inline mb-3">
   <div className="col"> <label className="form-check-label"><input type="radio"  onChange={this.handleCurentDedicatedStatus} className="form-check-input" value="Yes" name="CurentDedicatedStatus" />Yes </label></div>
 <label className="form-check-label"><input  onChange={this.handleCurentDedicatedStatus} type="radio" className="form-check-input" name="CurentDedicatedStatus" value="No" />No </label>
      </div>
  {this.state.CurentDedicatedStatus === "Yes" && <div className="row   ml-lg-3 mr-lg-3">
  <div className="form-group mr-2">
  <label for="usr" className="">Association Name </label>
  <input type="text" id="usr" className="form-control border-success text-success mr-lg-3 "  />
</div>
<div className="form-group mr-2">
  <label for="usr" className="">Association FAR number</label>
  <input type="text" id="usr" className="form-control border-success text-success mr-lg-3 "  />
</div>
<div className="form-group mr-2">
  <label for="usr" className="">Dedicated Status Number </label>
  <input type="text" id="usr" className="form-control border-success text-success mr-lg-3 "  />
</div>

<div className="form-group mr-2">
  <label for="usr" className="">Expiry Date of Membership</label>
  <input type="Date" id="usr" className="form-control border-success text-success mr-lg-3 "  />
</div>


<div className="form-group mr-2">
  <label for="usr" className="">How long have you been a member of that association <span className="text-danger">*</span> </label>
  <input type="number" id="usr" className="form-control border-success text-success mr-lg-3 "  />
</div>
    

  </div>}

     </div>
       </div>
    
       
      <div className="row  mb-5">
      <div className="col">
     <p className="text-left ml-3">Have you completed the NARFO practical assessment <span className="text-danger">*</span> </p>
      <div className="row form-check-inline">
   <div className="col"> <label className="form-check-label"><input type="radio" className="form-check-input" name="optradio" />Yes </label></div>
 <label className="form-check-label"><input type="radio" className="form-check-input" name="optradio" />No </label>
      </div>
     </div>
       </div>


  
       <div className="row  mb-5">
       <div className="col">
      <p className="text-left ml-3">Have you completed the NARFO Theoretical Assessment  <span className="text-danger">*</span> </p>
       <div className="row form-check-inline">
    <div className="col"> <label className="form-check-label"><input type="radio" className="form-check-input" name="optradio" />Yes </label></div>
  <label className="form-check-label"><input type="radio" className="form-check-input"   name="optradio" />No </label>
       </div>
      </div>
        </div>


        <div className="row  mb-5">
        <div className="col">
       <p className="text-left ml-3">Have you attended any hunting related activities, either on your own or any activity of NARFO or any other association?  <span className="text-danger">*</span> </p>
        <div className="row form-check-inline">
     <div className="col"> <label className="form-check-label"><input type="radio" className="form-check-input" name="optradio" />Yes </label></div>
   <label className="form-check-label"><input type="radio" className="form-check-input" name="optradio" />No </label>
        </div>
       </div>
         </div>     


      
         <div className="row  mb-5">
         <div className="col">
        <p className="text-left ml-3">Are you or have you been registered as a Proffesional Hunter  <span className="text-danger">*</span> </p>
         <div className="row form-check-inline">
      <div className="col"> <label className="form-check-label"><input type="radio" className="form-check-input" value="Yes" name="optradio" />Yes </label></div>
    <label className="form-check-label"><input type="radio" className="form-check-input"  value="No" name="optradio" />No </label>
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