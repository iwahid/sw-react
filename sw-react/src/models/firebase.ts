import firebase from 'firebase';

/**
 * Interface for create request to firebase
 */
export type MainRequest = firebase.firestore.QuerySnapshot<firebase.firestore.DocumentSnapshot>;