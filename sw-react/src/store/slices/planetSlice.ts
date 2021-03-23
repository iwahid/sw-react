import { PlanetModel } from '../../models/planetModel';

const initialState: PlanetModel[] = []

export const planetsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'planets/loadAllPlanets': {
      return action.payload
    }
    default:
      return state
  }
}