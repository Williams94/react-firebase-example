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
    const usersRef = firebase.database().ref('/users');
    let count = 0;
    usersRef.on('value', (snapshot) => {
      const obj = snapshot.val();
      const array = Object.keys(obj).map((key) => {
        obj[key].id = key;
        return obj[key];
      });
      array.forEach((user) => {
        const accountsRef = firebase.database().ref(`/accounts/${user.account}`);
        accountsRef.on('value', (snapshot) => {
          user.apps = snapshot.val().apps;
          count++;
          if (count === array.length) {
            dispatch(getUsersResults(JSON.stringify(array)));
          }
        });
      });
    }, (errorObject) => {
      dispatch(getUsersError(JSON.stringify(errorObject)))
    });
  }
};
