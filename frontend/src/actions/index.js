import uuidv4 from 'uuid/v4';
import { ADD_MEMBER } from './types';

export const addMember = ({ title, url }) => ({
  type: ADD_MEMBER,
  payload: {
    id: uuidv4(),
    firstname,
    lastname,
    username,
    password
  }
});

