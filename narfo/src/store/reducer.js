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
        case 'UPDATE_CURRENT_PAGE':
            return{
                ...state,
                currentPage: action.currPage,
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
