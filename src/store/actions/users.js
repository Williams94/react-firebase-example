import firebaseConfig from '../../utils/firebaseConfig';
import * as firebase from 'firebase';

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
    firebaseConfig();
    const ref = firebase.database().ref('/users');
    ref.on('value', function (snapshot) {
      console.log(snapshot.val());
      dispatch(getUsersResults(JSON.stringify(snapshot.val())));
    }, function (errorObject) {
      dispatch(getUsersError(JSON.stringify(errorObject)))
    });
  }
};
