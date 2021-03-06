import { FilmModel } from '../../models';

const initialState: FilmModel[] = []

export const filmsReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case 'films/loadAllFilms': {
      return action.payload
    }
    default:
      return state
  }
}