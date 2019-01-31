/*
 * action types
 */

export const ADD_MEMBER = 'ADD_MEMBER'

/*
 * other constants
 */

/*
 * action creators
 */

export function addMember(text) {
  return { type: ADD_MEMBER, text : "Members" }
}
