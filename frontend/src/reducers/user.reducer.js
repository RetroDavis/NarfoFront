import {ADMIN_LOGIN,MEMBER_LOGIN} from '../constants/users.constants';
const initialState = {
    type: "Logged",
    user: "globsl"
};

export function users(state=initialState,action)
{
    switch(action.type)
    {
      case  ADMIN_LOGIN:
     return {type:action.type , user : action.user};
     case MEMBER_LOGIN:
     return {type:action.type , user : action.user};
     default:
     return state
    }  
    
}