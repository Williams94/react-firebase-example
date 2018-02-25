import * as firebase from "firebase";

export default () => {
  const config = {
    apiKey: "AIzaSyD6H8FnFKWxKKfYW0GR9l5Fxgwj9MIkQ4g",
    authDomain: "beezer-test-fb095.firebaseapp.com",
    databaseURL: "https://beezer-test-fb095.firebaseio.com",
    projectId: "beezer-test-fb095",
    storageBucket: "beezer-test-fb095.appspot.com",
    messagingSenderId: "97896488228"
  };
  firebase.initializeApp(config);
};
