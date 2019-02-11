const initialState = {
    currentPage:'/Home',
    signupDetails : {
        FullName: '',
        Surname: '',
        IDNum: '',
        Cell: '',
        Occupation: '',
        Ethnicity: '',
        Gender: '',
        ResidentialAd: "",
        City: "",
        Province: "",
        Country: "",
        PostalCode: "",
        FCA: '',
        Storage : '',
        Guilty : '',
        CoC: false,
        DC: false,
        DocTrue: false,
        Electronic: false,
        Accept_Electronic_Comms: false,
        Sales_Representitive: "",
        Sales_list: "",
        Store: "",
        Store_list: "",
        CurrentMember_Associaton: false,
        communication_Policy: false,
    },
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'UPDATE_CURRENT_PAGE':
            return{
                ...state,
                currentPage: action.currPage,
        }
        case 'UPDATE_MEMBER_DETAILS':
            const newMemberDetails ={
                ...state.signupDetails,
                [action.varName]:action.varValue,
            }
            return{
                ...state, 
                signupDetails:newMemberDetails,
        }
        default:
        return state
    }
};

export default reducer;
