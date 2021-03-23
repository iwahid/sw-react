import firebase from 'firebase';

/**
 * Interface for film domain model
 */
export type MainRequest = firebase.firestore.QuerySnapshot<firebase.firestore.DocumentSnapshot>;