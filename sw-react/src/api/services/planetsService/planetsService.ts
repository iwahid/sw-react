// Firebase App (the core Firebase SDK) is always required and must be listed first
import { db } from '../../firebaseService'
import { store } from '../../../store/store';
import { PlanetModel } from '../../../models/planetModel';
import { mapPlanetDtoToPlanetModel } from '../../mappers/planetMapper';

const { dispatch } = store

/* FIXME: Add typing for return values */

export const loadAllPlanet = () => (
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