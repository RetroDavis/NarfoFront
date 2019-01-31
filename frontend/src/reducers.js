import {ADD_MEMBER} from './actions';


const text= (state = '', action) => {
    if (action.type === ADD_MEMBER) {
      return action.text
    } else {
      return state
    }
}

export default text;