import { CharacterModel } from '../../models/characterModel';

const initialState: CharacterModel[] = []

export const peoplesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'peoples/loadAllPeoples': {
      return action.payload
    }
    /* FIXME: заменить редьюсер для обновления фильма (после редактирования) */
    case 'peoples/updatePeople': {
      const updatingPeople: CharacterModel | undefined = state.find(people => people.name === action.name)
      if (updatingPeople)
        updatingPeople.name = 'name'
      return { ...state, updatingPeople }
    }
    default:
      return state
  }
}