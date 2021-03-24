import { UserModel } from '../../models';

const initialState: UserModel = {
  email: '',
  password: ''
}

export const userReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    /* TODO: Add registration */
    case 'user/registered': {
      return action.payload
    }
    case 'user/auth': {
      return action.payload
    }
    case 'user/logout': {
      return action.payload
    }
    default:
      return state
  }
}