const initialState = {
  currentPage: "/Home",
  signupDetails: {
    MemNo: "",
    Firstname: "",
    Surname: "",
    IDNo: "",
    Email: "",
    Title: "Mr",
    Username: "",
    Password: "",
    PasswordConfirm: "",
    Delaraction_Acceptance: false,
    CellNo: "",
    Occupation: "",
    EthniSuburb: "",
    Sex: "",
    PhysicalAddress: "",
    Suburb: "",
    City: "",
    Province: "",
    PostalCode: "",
    Ethinicity: "",
    CoC: false,
    DC: false,
    DocTrue: false,
    Accept_Electronic_Comms: false,
    Sales_Representitive: "",
    Store: "",
    Store_list: [],
    CallResult: [],
    MemberNumb: null,
    CurrentMember_Associaton: false,
    communication_Policy: false,
    UserID: "",
    Electronic_Comms: false,
    Use_Storage: false,
    Criminal: false,
    FireArms_Control: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currPage
      };
    case "UPDATE_MEMBER_DETAILS":
      const newMemberDetails = {
        ...state.signupDetails,
        [action.varName]: action.varValue
      };
      return {
        ...state,
        signupDetails: newMemberDetails
      };
    default:
      return state;
  }
};

export default reducer;
