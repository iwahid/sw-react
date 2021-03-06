// Firebase App (the core Firebase SDK) is always required and must be listed first
import { db } from '../../firebaseService'
import { store } from '../../../store/store';
import { PlanetModel } from '../../../models';
import { mapPlanetDtoToPlanetModel } from '../../mappers';

const { dispatch } = store

/**
 *  Downloads all planets and saves to the store using a subscription
 * 
 * @returns An unsubscribe function that needs to be called to unsubscribe from receiving new data
 */
export const loadAllPlanet = (): (() => void) => (
  db.firestore().collection("planets")
    .onSnapshot((querySnapshot) => {

      const planets: PlanetModel[] = []

      querySnapshot.forEach((doc) => {
        const mapped: PlanetModel = mapPlanetDtoToPlanetModel(doc.data().fields, doc.data().pk)
        planets.push(mapped);
      });

      dispatch({
        type: 'planets/loadAllPlanets',
        payload: planets
      })
    })
  /* TODO: Handle possible errors while receiving data */
)