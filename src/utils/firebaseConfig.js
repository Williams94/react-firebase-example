import * as firebase from "firebase";

export default () => {
  const config = {
    apiKey: "AIzaSyD6H8FnFKWxKKfYW0GR9l5Fxgwj9MIkQ4g",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "97896488228"
  };
  firebase.initializeApp(config);
};
