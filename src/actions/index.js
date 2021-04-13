export const FETCH_DATA = 'fetch_data';
export const ADD_MEMBER = 'add_member';

// default function to display redux action format
export function setUsers(users) {
    // action object format being return to a reducer
    return {
        type: FETCH_DATA,
        payload: users
    }
}

export function addMember(user) {
    // action object format being return to a reducer
    return {
        type: ADD_MEMBER,
        payload: user,
    }
}
