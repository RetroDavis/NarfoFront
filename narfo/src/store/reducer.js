const initialState = {
    currentPage:'/Home',
    memberDetails : {
        FullName: '',
        Surname: '',
        IDNum: '',
        Cell: '',
        Occupation: '',
        Ethnicity: '',
        Gender: '',
    },
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'SUBMIT_MEMBER_DETAILS':
            return{
                currentPage:'/MemberAddress',
                memberDetails:action.payload,
        }
        case 'UPDATE_FULLNAME':
            const newMemberDetails ={
                ...state.memberDetails,
                FullName:action.fullname,
            }
            return{
                ...state, 
                memberDetails:newMemberDetails
        }
        default:
        return state
    }
};

export default reducer;
