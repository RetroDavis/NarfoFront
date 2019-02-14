import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class DedicatedHunter extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      CurrentPage: 0,
      CurentDedicatedStatus: "",
      PracticalAssignment: "",
      TheoreticalAssessment: "",
      CurrentOption: "",
      AttendedHunting: "",
      RegisteredPH: "",
      AssociationName: "",
      AssociationFAR: "",
      DedicatedStatusNo: "",
      ExpiryDateOfMembership: "",
      MembershipDuration: "",
      HuntedRelatedActivities: "",
      RegistrationNo: "",
      Association: "",
      Province: "",
      ExpiryDateOfPermit: "",
      FirearmsControlAct: "",
      StorageOfFirearm: "",
      HuntingOrdinances: "",
      FoundGuilty: "",
      DeclareInformation: "",
      CodesOfConduct: "",
      DedicatedStatusDeclaration: "",
      Motivation: "",
      Name1: "",
      Tel1: "",
      Name2: "",
      Tel2: "",
      error: ""
    };
    this.NextPage = this.NextPage.bind(this);
    this.NextPage1 = this.NextPage1.bind(this);
  }

  NextPage1() {
    var next = false;
    const findValues = {
      CurentDedicatedStatus: this.state.CurentDedicatedStatus,
      AttendedHunting: this.state.AttendedHunting,
      RegisteredPH: this.state.RegisteredPH
    };
    console.log(findValues);
    this.setState({ error: "" });
    if (
      this.state.CurentDedicatedStatus === "" ||
      this.state.AttendedHunting === "" ||
      this.state.RegisteredPH === ""
    ) {
      this.setState({ error: "Please fill in all inputs" });
    } else {
      next = true;
    }

    if (next && this.state.CurentDedicatedStatus === "No") {
      if (
        this.state.PracticalAssignment === "" ||
        this.state.TheoreticalAssessment === ""
      ) {
        this.setState({ error: "Please fill in all inputs" });
        next = false;
      } else if (this.state.PracticalAssignment === "No") {
        this.setState({
          error: "Please Complete Practical Assignment first to apply"
        });
        next = false;
      } else if (this.state.TheoreticalAssessment === "No") {
        this.setState({
          error: "Please Complete Theoretical Assignment first to apply"
        });
        next = false;
      }
    } else if (next && this.state.CurentDedicatedStatus === "Yes") {
    }

    if (next) {
      const newPage = 1 + this.state.CurrentPage;
      this.setState({ CurrentPage: newPage });
    }
  }

  handleName1 = event => {
    this.setState({
      Name1: event.target.value
    });
  };
  handleTel1 = event => {
    this.setState({
      Tel1: event.target.value
    });
  };

  handleName2 = event => {
    this.setState({
      Name2: event.target.value
    });
  };
  handleTel2 = event => {
    this.setState({
      Tel2: event.target.value
    });
  };

  handleMotivation = event => {
    this.setState({
      Motivation: event.target.value
    });
  };

  handleDedicatedStatusDeclaration = event => {
    this.setState({
      DedicatedStatusDeclaration: event.target.value
    });
  };

  handleCodesOfConduct = event => {
    this.setState({
      CodesOfConduct: event.target.value
    });
  };

  handleDeclareInformation = event => {
    this.setState({
      DeclareInformation: event.target.value
    });
  };

  handleFoundGuilty = event => {
    this.setState({
      FoundGuilty: event.target.value
    });
  };

  handleHuntingOrdinances = event => {
    this.setState({
      HuntingOrdinances: event.target.value
    });
  };

  handleStorageOfFirearm = event => {
    this.setState({
      StorageOfFirearm: event.target.value
    });
  };

  handleFirearmsControlAct = event => {
    this.setState({
      FirearmsControlAct: event.target.value
    });
  };

  handleExpiryDateOfPermite = event => {
    this.setState({
      ExpiryDateOfPermit: event.target.value
    });
  };

  handleProvince = event => {
    this.setState({
      Province: event.target.value
    });
  };

  handleAssociation = event => {
    this.setState({
      Association: event.target.value
    });
  };

  handleRegistrationNo = event => {
    this.setState({
      RegistrationNo: event.target.value
    });
  };

  handleHuntedRelatedActivities = event => {
    this.setState({
      HuntedRelatedActivities: event.target.value
    });
  };

  handleMembershipDuration = event => {
    this.setState({
      MembershipDuration: event.target.value
    });
  };

  handleExpiryDateOfMembership = event => {
    this.setState({
      ExpiryDateOfMembership: event.target.value
    });
  };
  handleDedicatedStatusNo = event => {
    this.setState({
      DedicatedStatusNo: event.target.value
    });
  };

  handleAssociationFAR = event => {
    this.setState({
      AssociationFAR: event.target.value
    });
  };

  handleAssociationName = event => {
    this.setState({
      AssociationName: event.target.value
    });
  };

  handleCurentDedicatedStatus = event => {
    this.setState({
      CurentDedicatedStatus: event.target.value
    });
  };

  handlePracticalAssignment = event => {
    this.setState({
      PracticalAssignment: event.target.value
    });
  };

  handleTheoreticalAssessment = event => {
    this.setState({
      TheoreticalAssessment: event.target.value
    });
  };

  handleAttendedHunting = event => {
    this.setState({
      AttendedHunting: event.target.value
    });
  };
  handleregisteredPH = event => {
    this.setState({
      RegisteredPH: event.target.value
    });
  };

  NextPage() {
    const newPage = 1 + this.state.CurrentPage;
    this.setState({ CurrentPage: newPage });
    console.log(newPage);
  }
  render() {
    return (
      <div>
        {this.state.CurrentPage === 1 && (
          <div className="container mt-3 shadow">
            <div className="row">
              <div className="col mt-3">
                <h3 className="text-center">Dedicated Status Application</h3>
              </div>
            </div>

            <div className="row">
              <div className="col mt-3 mb-5">
                To apply for Dedicated Hunter Status, you first need to complete
                the online and practical assessment. Read through the NARFO
                Dedicated Status (D) found in the download section first. Then
                go to the
                <span className="font-weight-bold">
                  Learning Management System (LMS)
                </span>
                section in your members profile and start the Dedicated Hunter
                course. Once the online course is complete, you can print your
                completion certificate. Do the practical assessment as well and
                then submit the results in the activity section. On completion
                of the theory and practical assessment, you can use this section
                to apply for your dedicated status
              </div>
            </div>

            <div className="row mb-5">
              <div className="col text-left">
                <a href="www" className="text-success">
                  NARFO Declaration of Dedicated Status (PDF)
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col mb-5">
                <button
                  className="btn btn-dark  btn-block"
                  onClick={this.NextPage}
                >
                  APPLY
                </button>
              </div>
            </div>
          </div>
        )}
        {this.state.CurrentPage === 0 && (
          <div className="container mt-3 shadow">
            <div className="row mb-3">
              <div className="col mt-3">
                <h3 className="text-center">Dedicated Status Application</h3>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="row mb-5">
                  <div className="col">
                    <p className="text-left ml-3">
                      Do you currently hold a dedicated hunter status with any
                      other accreddited association
                    </p>
                    <div className="row form-check-inline mb-3">
                      <div className="col">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            onChange={this.handleCurentDedicatedStatus}
                            className="form-check-input"
                            value="Yes"
                            name="CurentDedicatedStatus"
                          />
                          Yes
                        </label>
                      </div>
                      <label className="form-check-label">
                        <input
                          onChange={this.handleCurentDedicatedStatus}
                          type="radio"
                          className="form-check-input"
                          name="CurentDedicatedStatus"
                          value="No"
                        />
                        No
                      </label>
                    </div>
                    {this.state.CurentDedicatedStatus === "Yes" && (
                      <div className="row   ml-lg-3 mr-lg-3">
                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Association Name
                          </label>
                          <input
                            type="text"
                            className="form-control border-success text-success mr-lg-3 "
                            onChange={this.handleAssociationName}
                          />
                        </div>
                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Association FAR number
                          </label>
                          <input
                            type="text"
                            onChange={this.handleAssociationFAR}
                            className="form-control border-success text-success mr-lg-3 "
                          />
                        </div>
                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Dedicated Status Number
                          </label>
                          <input
                            type="text"
                            onChange={this.handleDedicatedStatusNo}
                            className="form-control border-success text-success mr-lg-3 "
                          />
                        </div>

                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Expiry Date of Membership
                          </label>
                          <input
                            type="Date"
                            onChange={this.handleExpiryDateOfMembership}
                            className="form-control border-success text-success mr-lg-3 "
                          />
                        </div>

                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            How long have you been a member of that association
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control border-success text-success mr-lg-3 "
                            onChange={this.handleMembershipDuration}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {this.state.CurentDedicatedStatus === "No" && (
                  <div>
                    <div className="row  mb-5">
                      <div className="col">
                        <p className="text-left ml-3">
                          Have you completed the NARFO practical assessment
                          <span className="text-danger">*</span>
                        </p>
                        <div className="row form-check-inline">
                          <div className="col">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="PracticalAssignment"
                                value="Yes"
                                onChange={this.handlePracticalAssignment}
                              />
                              Yes
                            </label>
                          </div>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="PracticalAssignment"
                              value="No"
                              onChange={this.handlePracticalAssignment}
                            />
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row  mb-5">
                      <div className="col">
                        <p className="text-left ml-3">
                          Have you completed the NARFO Theoretical Assessment
                          <span className="text-danger">*</span>
                        </p>
                        <div className="row form-check-inline">
                          <div className="col">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="TheoreticalAssessment"
                                value="Yes"
                                onChange={this.handleTheoreticalAssessment}
                              />
                              Yes
                            </label>
                          </div>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="TheoreticalAssessment"
                              value="No"
                              onChange={this.handleTheoreticalAssessment}
                            />
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="row  mb-5">
                  <div className="col">
                    <p className="text-left ml-3">
                      Have you attended any hunting related activities, either
                      on your own or any activity of NARFO or any other
                      association? <span className="text-danger">*</span>
                    </p>
                    <div className="row form-check-inline">
                      <div className="col">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            onChange={this.handleAttendedHunting}
                            className="form-check-input"
                            value="Yes"
                            name="attendedHunting"
                          />
                          Yes
                        </label>
                      </div>
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          onChange={this.handleAttendedHunting}
                          value="No"
                          name="attendedHunting"
                        />
                        No
                      </label>
                    </div>
                    <div className="row   ml-lg-3 mr-lg-3">
                      {this.state.AttendedHunting === "Yes" && (
                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Please provide the details
                            <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control border-success text-success mr-lg-3"
                            cols="38"
                            onChange={this.handleHuntedRelatedActivities}
                          />
                        </div>
                      )}
                      {this.state.AttendedHunting === "No" && (
                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Please motivate and elaborate
                            <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control border-success text-success mr-lg-3"
                            cols="38"
                            onChange={this.handleHuntedRelatedActivities}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row  mb-5">
                  <div className="col">
                    <p className="text-left ml-3">
                      Are you or have you been registered as a Proffesional
                      Hunter <span className="text-danger">*</span>
                    </p>
                    <div className="row form-check-inline mb-3">
                      <div className="col">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            className="form-check-input"
                            onChange={this.handleregisteredPH}
                            value="Yes"
                            name="RegisteredPH"
                          />
                          Yes
                        </label>
                      </div>
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          onChange={this.handleregisteredPH}
                          value="No"
                          name="RegisteredPH"
                        />
                        No
                      </label>
                    </div>
                    {this.state.RegisteredPH === "Yes" && (
                      <div className="row   ml-lg-3 mr-lg-3">
                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Registration No
                          </label>
                          <input
                            type="text"
                            className="form-control border-success text-success mr-lg-3 "
                            onChange={this.handleRegistrationNo}
                          />
                        </div>
                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Association
                          </label>
                          <input
                            type="text"
                            className="form-control border-success text-success mr-lg-3 "
                            onChange={this.handleAssociation}
                          />
                        </div>
                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Province in which you may opperate
                          </label>
                          <input
                            type="text"
                            className="form-control border-success text-success mr-lg-3 "
                            onChange={this.handleProvince}
                          />
                        </div>

                        <div className="form-group mr-2">
                          <label for="usr" className="">
                            Expiry date of your permit
                          </label>
                          <input
                            type="Date"
                            className="form-control border-success text-success mr-lg-3 "
                            onChange={this.handleExpiryDateOfPermite}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col  text-danger text-center">
                {this.state.error}
              </div>
            </div>

            <div className="row">
              <div className="col mb-5">
                <button
                  className="btn btn-dark  btn-block"
                  onClick={this.NextPage1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {this.state.CurrentPage === 2 && (
          <div className="container mt-3 shadow">
            <div className="row mb-3">
              <div className="col mt-3">
                <h3 className="text-center">Dedicated Status Declaration</h3>
              </div>
            </div>

            <div className="row  mb-5">
              <div className="col">
                <p className="text-left ml-3">
                  Are you well acquainted with the current Firearms Control Act
                  <span className="text-danger">*</span>
                </p>
                <div className="row form-check-inline">
                  <div className="col">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="FirearmsControlAct"
                        value="Yes"
                        onChange={this.handleFirearmsControlAct}
                      />
                      Yes
                    </label>
                  </div>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="FirearmsControlAct"
                      value="No"
                      onChange={this.handleFirearmsControlAct}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row  mb-5">
              <div className="col">
                <p className="text-left ml-3">
                  Are you well acquainted with the use and storage of your
                  Firearm
                  <span className="text-danger">*</span>
                </p>
                <div className="row form-check-inline">
                  <div className="col">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="StorageOfFirearm"
                        value="Yes"
                        onChange={this.handleStorageOfFirearm}
                      />
                      Yes
                    </label>
                  </div>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="StorageOfFirearm"
                      value="No"
                      onChange={this.handleStorageOfFirearm}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row  mb-5">
              <div className="col">
                <p className="text-left ml-3">
                  Are you well acquainted with the hunting ordinances and
                  proclamations for the provinces you intend to hunt in
                  <span className="text-danger">*</span>
                </p>
                <div className="row form-check-inline">
                  <div className="col">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="HuntingOrdinances"
                        value="Yes"
                        onChange={this.handleHuntingOrdinances}
                      />
                      Yes
                    </label>
                  </div>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="HuntingOrdinances"
                      value="No"
                      onChange={this.handleHuntingOrdinances}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row  mb-5">
              <div className="col">
                <p className="text-left ml-3">
                  Have you ever been found guilty of any offence related to
                  hunting where your finger prints was taken
                  <span className="text-danger">*</span>
                </p>
                <div className="row form-check-inline">
                  <div className="col">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="FoundGuilty"
                        value="Yes"
                        onChange={this.handleFoundGuilty}
                      />
                      Yes
                    </label>
                  </div>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="FoundGuilty"
                      value="No"
                      onChange={this.handleFoundGuilty}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row  mb-5">
              <div className="col">
                <p className="text-left ml-3">
                  I hereby declare that all information in this document is true
                  <span className="text-danger">*</span>
                </p>
                <div className="row form-check-inline">
                  <div className="col">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="DeclareInformation"
                        value="Yes"
                        onChange={this.handleDeclareInformation}
                      />
                      Yes
                    </label>
                  </div>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="DeclareInformation"
                      value="No"
                      onChange={this.handleDeclareInformation}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row  mb-5">
              <div className="col">
                <p className="text-left ml-3">
                  I hereby declare that I fully understand and abide by the
                  codes of conduct as set out by the NARFO
                  <span className="text-danger">*</span>
                </p>
                <div className="row form-check-inline">
                  <div className="col">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="CodesOfConduct"
                        value="Yes"
                        onChange={this.handleCodesOfConduct}
                      />
                      Yes
                    </label>
                  </div>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="CodesOfConduct"
                      value="No"
                      onChange={this.handleCodesOfConduct}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row  mb-5">
              <div className="col">
                <p className="text-left ml-3">
                  I hereby declare that I fully understand and abide by the
                  Dedicated Status Declaration
                  <span className="text-danger">*</span>
                </p>
                <div className="row form-check-inline">
                  <div className="col">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="DedicatedStatusDeclaration"
                        value="Yes"
                        onChange={this.handleDedicatedStatusDeclaration}
                      />
                      Yes
                    </label>
                  </div>
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="DedicatedStatusDeclaration"
                      value="No"
                      onChange={this.handleDedicatedStatusDeclaration}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col mt-3 mb-5 mr-3 ml-3 text-left  text-danger">
                <span className="font-weight-bold">PLEASE NOTE: </span>
                Your motivation should be related to hunting and or hunting
                activities. Your application will not be considered if you
                merely want more firearms. Becoming a dedicated hunter means
                that you actively want to participate in hunting activities and
                also need to prove that you have done so to keep your status,
                failing which, you may lose your status
              </div>
            </div>
            <div className="row   ml-lg-3 mr-lg-3">
              <div className="form-group mr-2">
                <label for="usr" className="">
                  Motivate why you are applying for a dedicated hunter status
                  <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control border-success text-success mr-lg-3"
                  cols="68"
                  rows="8"
                  onChange={this.handleMotivation}
                />
              </div>
            </div>
            <div className="row   ml-lg-3 mr-lg-3">
              <p className="text-left ">
                Contact details of two fellow hunters with whom you have hunted
                or contact details of a farm which you have hunted on
              </p>
            </div>
            <div className="row   ml-lg-3 mr-lg-3">
              <div className="form-group mr-2">
                <label for="usr" className="">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control border-success text-success mr-lg-3 "
                  onChange={this.handleName1}
                />
              </div>
              <div className="form-group mr-2">
                <label for="usr" className="">
                  Tel number
                </label>
                <input
                  type="text"
                  className="form-control border-success text-success mr-lg-3 "
                  onChange={this.handleTel1}
                />
              </div>
              <div className="form-group mr-2">
                <label for="usr" className="">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control border-success text-success mr-lg-3 "
                  onChange={this.handleName2}
                />
              </div>

              <div className="form-group mr-2">
                <label for="usr" className="">
                  Tel number
                </label>
                <input
                  type="text"
                  className="form-control border-success text-success mr-lg-3 "
                  onChange={this.handleTel2}
                />
              </div>
            </div>

            <div className="row">
              <div className="col mb-5">
                <button
                  className="btn btn-dark  btn-block"
                  onClick={this.NextPage}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default DedicatedHunter;
