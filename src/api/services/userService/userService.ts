import { db } from "../../firebaseService";
import { store } from '../../../store/store';
import { UserModel } from '../../../models';

const { dispatch } = store

/** Registers a user using firebase services */
export const userRegister = (userCredentials: UserModel): void => {
  db.auth().createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
    .then((responseUserCredential) => {
      const { user } = responseUserCredential;

      console.log("USER REGISTERED: ", user)
    })
}

/** Authorizes user using firebase services */
export const userLogin = (userCredentials: UserModel): void => {
  db.auth().signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
    .then((responseUserCredential) => {
      const user = responseUserCredential.user ? responseUserCredential.user : { email: '' };
      dispatch({ type: 'user/auth', payload: { email: user.email } })
    })
  /* TODO: Handle possible errors while receiving data in ".catch" method.
     Explicitly notify the user of any problems encountered */
}

/** Log out user using firebase services */
export const userLogout = (): void => {
  db.auth().signOut()
    .then((responseUserCredential) => {
      dispatch({ type: 'user/logout', payload: { email: '' } })
      console.log("USER LOGOUT")
    })
}