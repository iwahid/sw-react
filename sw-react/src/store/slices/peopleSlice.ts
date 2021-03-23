import { CharacterModel } from '../../models/characterModel';

const initialState: CharacterModel[] = []

export const peoplesReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case 'peoples/loadAllPeoples': {
      return action.payload
    }
    default:
      return state
  }
}