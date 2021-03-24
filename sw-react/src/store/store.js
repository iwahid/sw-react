
import { configureStore } from '@reduxjs/toolkit'
import {
  userReducer,
  filmsReducer,
  peoplesReducer,
  planetsReducer,
  currentFilmReducer,
} from './slices';

/* FIXME: Add typing for state */
export const store = configureStore({
  reducer: {
    peoples: peoplesReducer,
    planets: planetsReducer,
    films: filmsReducer,
    user: userReducer,
    currentFilm: currentFilmReducer
  }
})