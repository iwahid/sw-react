import { db } from "../../firebaseService";
import { store } from '../../../store/store';
import { UserModel } from '../../../models';

const { dispatch } = store

export interface FirebaseAuthResponse {
  type: string,
  message: string
}

/**
 * Registers a user using firebase services
 * 
 * @param userCredentials User data (email, password)
 * @returns Promise containing an registration status
 */
export const userRegister = (userCredentials: UserModel): Promise<FirebaseAuthResponse> =>
  new Promise<FirebaseAuthResponse>((resolve, reject) => {
    db.auth()
      .createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then((responseUserCredential) => {
        const { user } = responseUserCredential;
        resolve({
          type: 'SUCCESS',
          message: `User ${user?.email} has been registered!`,
        })
      })
      .catch((error) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          type: 'ERROR',
          message: `User has not been registered! ${error.message}`,
        })
      })
  })

/**
 * Authorizes user using firebase services
 * 
 * @param userCredentials User data (email, password)
 * @returns Promise containing an authorization status
 */
export const userLogin = (userCredentials: UserModel): Promise<FirebaseAuthResponse> =>
  new Promise<FirebaseAuthResponse>((resolve, reject) => {
    db.auth()
      .signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then((responseUserCredential) => {

        /* I do not use the .then method to deliver a message to the user about successful authorization, 
        because in case of successful authorization, he will be notified explicitly by redirecting to another page */
        const { user } = responseUserCredential;
        dispatch({ type: 'user/auth', payload: { email: user?.email } })
      })
      .catch(error => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          type: 'ERROR',
          message: `Authorization failed! ${error.message}`,
        })
      })
  })

/** Log out user using firebase services */
export const userLogout = (): void => {
  db.auth().signOut()
    .then((responseUserCredential) => {
      dispatch({ type: 'user/logout', payload: { email: '' } })
      console.log("USER LOGOUT")
    })
}