import { configureStore } from '@reduxjs/toolkit'
import {
  userReducer,
  filmsReducer,
  charactersReducer,
  planetsReducer,
  currentFilmReducer,
} from './reducers';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    planets: planetsReducer,
    films: filmsReducer,
    user: userReducer,
    currentFilm: currentFilmReducer
  }
})

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>