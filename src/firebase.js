import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyC9nuzXwBQgZkvBw-LmiUu4LbqRr47RUD8",
  authDomain: "covacap-27141.firebaseapp.com",
  databaseURL: "https://covacap-27141.firebaseio.com",
  projectId: "covacap-27141",
  storageBucket: "",
  messagingSenderId: "897508988810"
};
firebase.initializeApp(config);
export default firebase;
export const database = firebase.database();
// adding for login
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
