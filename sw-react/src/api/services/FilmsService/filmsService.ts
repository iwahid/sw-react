// Firebase App (the core Firebase SDK) is always required and must be listed first
import { db } from '../../firebaseService'
import { store } from '../../../store/store';

import { mapFilmDtoToFilmModel } from '../../mappers/filmMapper';
import { mapPlanetDtoToPlanetModel } from "../../mappers/planetMapper";
import { mapSpecieDtoToSpecieModel } from "../../mappers/specieMapper";
import { mapStarshipDtoToStarshipMode } from '../../mappers/starshipMapper';
import { mapVehicleDtoToVehicleModel } from "../../mappers/vehicleMapper";
import { mapCharacterDtoToCharacterModel } from '../../mappers/characterMapper';

import { FilmModel } from '../../../models/filmModel';
import { PlanetModel } from '../../../models/planetModel';
import { CharacterModel } from '../../../models/characterModel';
import { SpecieModel } from '../../../models/specieModel';
import { StarshipModel } from '../../../models/starshipModel';
import { VehicleModel } from '../../../models/vehicleModel';

const { dispatch } = store

/* Получение всех фильмов */
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

      console.log("Getting planets list: ", films);
    })

/* Функция чанкования массива, для обхода ограничения от firebase  */
export const arrayСhunking = (fullListArray: number[]) => {
  /* NOTE: ограничение от firebase */
  const chankSize = 10;
  const chanksArray: number[][] = [];

  for (let i = 0; i < Math.ceil(fullListArray.length / chankSize); i++) {
    chanksArray[i] = fullListArray.slice((i * chankSize), (i * chankSize) + chankSize);
  }

  return [...chanksArray]
}



export const loadExtraDataToCurrentFilm = <T, F>(
  idList: number[],
  link: string,
  mapperFunc: (fields: F, pk: number) => T,
  actionCreate: (array: T[]) => { type: string, payload: T[] })
  : void => {

  const result: T[] = []
  const chanksArray = arrayСhunking(idList)

  /* NOTE: Получаю связанные данные просто через get, а не подпиской. Поскольку их актуальность не критична */
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
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
}


const actionCharacters = (characters: CharacterModel[]) => ({
  type: 'currentFilm/loadCharactersToCurrentFilm',
  payload: characters
})

const actionPlanets = (planets: PlanetModel[]) => ({
  type: 'currentFilm/loadPlanetsToCurrentFilm',
  payload: planets
})

const actionSpecies = (species: SpecieModel[]) => ({
  type: 'currentFilm/loadSpeciesToCurrentFilm',
  payload: species
})

const actionStarships = (starships: StarshipModel[]) => ({
  type: 'currentFilm/loadStarshipsToCurrentFilm',
  payload: starships
})

const actionVehicles = (vehicles: VehicleModel[]) => ({
  type: 'currentFilm/loadVehiclesToCurrentFilm',
  payload: vehicles
})

/* Обновляет все связанные данные для текущего выбранного фильма */
/* FIXME: зачем мне здесь явно указывать типы данных при вызове функции */
/* FIXME: почему я могу вызвать эту функцию без явного указания используемых типов? Хотя они описаны при её объявлении */
export const updateCurrentFilm = (film: FilmModel) => {
  loadExtraDataToCurrentFilm(film.planets, 'planets', mapPlanetDtoToPlanetModel, actionPlanets)
  loadExtraDataToCurrentFilm(film.characters, 'people', mapCharacterDtoToCharacterModel, actionCharacters)
  loadExtraDataToCurrentFilm(film.species, 'species', mapSpecieDtoToSpecieModel, actionSpecies)
  loadExtraDataToCurrentFilm(film.starships, 'starships', mapStarshipDtoToStarshipMode, actionStarships)
  loadExtraDataToCurrentFilm(film.vehicles, 'vehicles', mapVehicleDtoToVehicleModel, actionVehicles)
}