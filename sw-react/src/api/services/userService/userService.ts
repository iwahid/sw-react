import { db } from "../../firebaseService";
import { store } from '../../../store/store';

const { dispatch } = store

interface IuserCredentials {
  email: string,
  password: string
}

/* FIXME: Add typing for return values */

export function userRegister(userCredentials: IuserCredentials) {
  db.auth().createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
    .then((responseUserCredential) => {
      const { user } = responseUserCredential;

      console.log("USER REGISTERED: ", user)
    })
}

export function userLogin(userCredentials: IuserCredentials) {
  db.auth().signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
    .then((responseUserCredential) => {
      const user = responseUserCredential.user ? responseUserCredential.user : { email: '' };
      dispatch({ type: 'user/auth', payload: { email: user.email } })
    })
  /* TODO: Handle possible errors while receiving data in ".catch" method.
     Explicitly notify the user of any problems encountered */
}

export function userLogout() {
  db.auth().signOut()
    .then((responseUserCredential) => {
      dispatch({ type: 'user/logout', payload: { email: '' } })
      console.log("USER LOGOUT")
    })
}