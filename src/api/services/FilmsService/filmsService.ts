// Firebase App (the core Firebase SDK) is always required and must be listed first
import { db } from '../../firebaseService'
import { store } from '../../../store/store';
import {
  mapFilmDtoToFilmModel,
  mapPlanetDtoToPlanetModel,
  mapSpecieDtoToSpecieModel,
  mapStarshipDtoToStarshipMode,
  mapVehicleDtoToVehicleModel,
  mapCharacterDtoToCharacterModel,
} from '../../mappers';
import {
  FilmModel,
  SpecieModel,
  PlanetModel,
  VehicleModel,
  StarshipModel,
  CharacterModel,
} from '../../../models';

const { dispatch } = store

/* FIXME: Add typing for return values */
/** Downloads all films and saves to the store using a subscription */
export const loadAllFilms = () =>
  db.firestore().collection("films")
    .onSnapshot((querySnapshot) => {

      const films: FilmModel[] = []

      querySnapshot.forEach((doc) => {
        const mapped = mapFilmDtoToFilmModel(doc.data().fields, doc.data().pk)
        films.push(mapped);
      });

      dispatch({
        type: 'films/loadAllFilms',
        payload: films
      })
    })

/**
 * Chunk array function to bypass firebase limitation
 * 
 * @param fullListArray Array with id, by which you need to get the entire list of data from firebase 
 * @returns A two-dimensional array containing arrays with a limited number of id's inside each
 */
const arrayСhunking = (fullListArray: number[]): number[][] => {
  /* NOTE: Firebase limitation */
  const chunkSize = 10;
  const chunksArray: number[][] = [];

  for (let i = 0; i < Math.ceil(fullListArray.length / chunkSize); i++) {
    chunksArray[i] = fullListArray.slice((i * chunkSize), (i * chunkSize) + chunkSize);
  }

  return [...chunksArray]
}

/**
 * Loads and stores additional related data for the movie
 * 
 * @param idList List of all id by which to find data on firebase
 * @param link The path by which you need to access data in the database
 * @param mapperFunc The mapper function, with which will need to transform the data, before saving to the storage
 * @param actionCreate A function that creates the required action to save data to the storage
 */
export const loadExtraDataToCurrentFilm = <T, F>(
  idList: number[],
  link: string,
  mapperFunc: (fields: F, pk: number) => T,
  actionCreate: (array: T[]) => { type: string, payload: T[] })
  : void => {

  const result: T[] = []
  const chanksArray = arrayСhunking(idList)

  /* NOTE: I get related data simply through the get method, not by subscription. 
  Since their relevance is not critical */
  for (let i = 0; i < chanksArray.length; i++) {
    db.firestore().collection(link).where('pk', "in", chanksArray[i])
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const mapped: T = mapperFunc(doc.data().fields, doc.data().pk)
          result.push(mapped)
        });
        dispatch(actionCreate(result))
      })
    /* TODO: Handle possible errors while receiving data */
  }
}

/**
 * Function for creating actions
 * 
 * @param characters Array of processed data, for saving to storage
 * @returns Action
 */
const actionCharacters = (characters: CharacterModel[]) => ({
  type: 'currentFilm/loadCharactersToCurrentFilm',
  payload: characters
})

/**
 * Function for creating actions
 * 
 * @param planets Array of processed data, for saving to storage
 * @returns Action
 */
const actionPlanets = (planets: PlanetModel[]) => ({
  type: 'currentFilm/loadPlanetsToCurrentFilm',
  payload: planets
})

/**
 * Function for creating actions
 * 
 * @param species Array of processed data, for saving to storage
 * @returns Action
 */
const actionSpecies = (species: SpecieModel[]) => ({
  type: 'currentFilm/loadSpeciesToCurrentFilm',
  payload: species
})

/**
 * Function for creating actions
 * 
 * @param starships Array of processed data, for saving to storage
 * @returns Action
 */
const actionStarships = (starships: StarshipModel[]) => ({
  type: 'currentFilm/loadStarshipsToCurrentFilm',
  payload: starships
})

/**
 * Function for creating actions
 * 
 * @param vehicles Array of processed data, for saving to storage
 * @returns Action
 */
const actionVehicles = (vehicles: VehicleModel[]) => ({
  type: 'currentFilm/loadVehiclesToCurrentFilm',
  payload: vehicles
})

/* NOTE: Updates the movie piece by piece. to be able to easily reconfigure the application:
 load individual pieces of data when opening individual tabs */
/** Refreshes all related data for the selected movie */
export const updateCurrentFilm = (film: FilmModel): void => {
  loadExtraDataToCurrentFilm(film.planets, 'planets', mapPlanetDtoToPlanetModel, actionPlanets)
  loadExtraDataToCurrentFilm(film.characters, 'people', mapCharacterDtoToCharacterModel, actionCharacters)
  loadExtraDataToCurrentFilm(film.species, 'species', mapSpecieDtoToSpecieModel, actionSpecies)
  loadExtraDataToCurrentFilm(film.starships, 'starships', mapStarshipDtoToStarshipMode, actionStarships)
  loadExtraDataToCurrentFilm(film.vehicles, 'vehicles', mapVehicleDtoToVehicleModel, actionVehicles)
}