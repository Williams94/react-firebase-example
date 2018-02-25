import axios from 'axios';
// import getUsersRequest from '../../services/users';

export const GET_USERS_START = "GET_USERS_START";
export const getUsersStart = () => {
  return {type: GET_USERS_START}
};

export const GET_USERS_RESULTS = "GET_USERS_RESULTS";
export const getUsersResults = (data) => {
  return {type: GET_USERS_RESULTS, data}
};

export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const getUsersError = (data) => {
  return {type: GET_USERS_ERROR, data}
};

export const GET_USERS = "GET_USERS";
export const getUsers = () => {
  return dispatch => {
    dispatch(getUsersStart());
    axios.get(`https://beezer-test-fb095.firebaseio.com/users.json`)
      .then(res => dispatch(getUsersResults(JSON.stringify(res.data))))
      .catch(err => dispatch(getUsersError(JSON.stringify(err))))
  }
};
