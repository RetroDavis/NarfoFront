import {ADMIN_LOGIN,MEMBER_LOGIN} from '../constants/users.constants';
const initialState = {
    users: []
 };

export function users(state=initialState,action)
{
    switch(action.type)
    {
      case  ADMIN_LOGIN:
     return [...state,
        {type:action.type , user : action.user}];
     case MEMBER_LOGIN:
     return Object.assign({}, state, {
        users: state.users.concat(action.user)
      });
     default:
     return state
    }  
    
}