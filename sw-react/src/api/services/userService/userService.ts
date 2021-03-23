import { db } from "../../firebaseService";
import {store} from '../../../store/store';

const {dispatch} = store

interface IuserCredentials {
  email: string,
  password: string
}

export function userRegister(userCredentials: IuserCredentials) {
  db.auth().createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
    .then((responseUserCredential) => {
      const {user} = responseUserCredential;

      console.log("USER REGISTERED: ", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('USER REGISTERED ERROR: ', errorCode)
      console.log('USER REGISTERED ERROR: ', errorMessage)
    });
}

export function userLogin(userCredentials: IuserCredentials) {
  db.auth().signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
    .then((responseUserCredential) => {
      const user = responseUserCredential.user ? responseUserCredential.user : { email: '' };
      dispatch({ type: 'user/auth', payload: { email: user.email } })
      console.log("USER LOGGED", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('USER LOGGED ERROR. errorCode   : ', errorCode)
      console.log('USER LOGGED ERROR. errorMessage: ', errorMessage)
    });
}

export function userLogout() {
  db.auth().signOut()
    .then((responseUserCredential) => {
      dispatch({ type: 'user/logout', payload: { email: '' } })
      console.log("USER LOGOUT")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('USER LOGOUT ERROR. errorCode   : ', errorCode)
      console.log('USER LOGOUT ERROR. errorMessage: ', errorMessage)
    });

}