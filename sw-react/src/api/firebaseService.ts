import firebase from "firebase";

/* FIXME: Config for connecting and initializing the database */
const firebaseConfig = {
  apiKey: "AIzaSyBej9vAIUgq_zn3LfZMByY-_Q-sffq53JQ",
  authDomain: "sw-angular-ac347.firebaseapp.com",
  databaseURL: "https://sw-angular-ac347-default-rtdb.firebaseio.com",
  projectId: "sw-angular-ac347",
  storageBucket: "sw-angular-ac347.appspot.com",
  messagingSenderId: "876984666061",
  appId: "1:876984666061:web:2f0d560ad8b272d71ae684"
};

export const db = firebase.initializeApp(firebaseConfig);