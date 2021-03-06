import { ExtendedFilmModel } from "../../models/extendedFilmModel";

const initialState: ExtendedFilmModel = {
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
  imageBackground: '',
  imagePoster: '',
  docId: 0,
}

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