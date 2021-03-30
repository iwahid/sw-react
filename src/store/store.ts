import { configureStore } from '@reduxjs/toolkit'
import {
  userReducer,
  filmsReducer,
  charactersReducer,
  planetsReducer,
  currentFilmReducer,
} from './reducers';

/* FIXME: Add typing for state */
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    planets: planetsReducer,
    films: filmsReducer,
    user: userReducer,
    currentFilm: currentFilmReducer
  }
})