
import { configureStore } from '@reduxjs/toolkit'
import { currentFilmReducer } from './slices/currentFilmSlice';
import { filmsReducer } from './slices/filmSlice';
import { peoplesReducer } from './slices/peopleSlice'
import { planetsReducer } from './slices/planetSlice';
import { userReducer } from './slices/userSlice';

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
