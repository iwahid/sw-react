import { FilmModel } from '../../models/filmModel';

const initialState: FilmModel = {
  characters: [],
  created: '',
  director: '',
  edited: '',
  episodeId: 0,
  openingCrawl: '',
  planets: [],
  producer: '',
  releaseDate: '',
  species: [],
  starships: [],
  title: '',
  vehicles: [],
  docId: 0,
}

/* FIXME: Type actions */

export const currentFilmReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case 'currentFilm/setCurrentFilm': {
      return {...action.payload} 
    }
    case 'currentFilm/loadCharactersToCurrentFilm': {
      return {...state, characters: [...action.payload]}
    }
    case 'currentFilm/loadPlanetsToCurrentFilm': {
      return {...state, planets: [...action.payload]}
    }
    case 'currentFilm/loadSpeciesToCurrentFilm': {
      return {...state, species: [...action.payload]}
    }
    case 'currentFilm/loadStarshipsToCurrentFilm': {
      return {...state, starships: [...action.payload]}
    }
    case 'currentFilm/loadVehiclesToCurrentFilm': {
      return {...state, vehicles: [...action.payload]}
    }
    case 'currentFilm/loadTransportToCurrentFilm': {
      return {...state, species: [...action.payload]}
    }
    default:
      return state
  }
}