import { PlanetModel } from '../../models';

const initialState: PlanetModel[] = []

export const planetsReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case 'planets/loadAllPlanets': {
      return action.payload
    }
    default:
      return state
  }
}