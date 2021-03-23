import firebase from "firebase";

/* Тестовый */
/* const firebaseConfig = {
  apiKey: "AIzaSyCI8XzHFhP4e_4AKzRw--CXvHEB6lqVYD8",
  authDomain: "sw-react-cb36e.firebaseapp.com",
  projectId: "sw-react-cb36e",
  storageBucket: "sw-react-cb36e.appspot.com",
  messagingSenderId: "461994476995",
  appId: "1:461994476995:web:64807893fd73e54eace976"
} */

/* Фильмы */
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