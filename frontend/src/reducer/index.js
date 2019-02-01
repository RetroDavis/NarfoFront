import { ADD_MEMBER } from '../actions/types';
export default function membersReducer(state = [], action) {
  switch (action.type) {
    case ADD_MEMBER:
      return [...state, action.payload];
        default:
      return state;
  }
}
