import { CharacterModel } from '../../models';

const initialState: CharacterModel[] = []

export const charactersReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case 'characters/loadAllCharacters': {
      return action.payload
    }
    default:
      return state
  }
}