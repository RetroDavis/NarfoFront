import {MEMBER_LOGIN,ADMIN_LOGIN} from '../constants/users.constants';



export const LogMember = function LogMember(user)
{
 return   dispatch => dispatch({type:MEMBER_LOGIN,user}); 
}

export const LogAdmin = function LogAdmin(user)
{
    return dispatch => dispatch({type:ADMIN_LOGIN,user});
}