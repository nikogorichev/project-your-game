import {
  LOGOUT_USER,
  LOGIN_USER,
  REG_USER
} from "../actionTypes/userAT"
const initialState = {
  users: {}
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case REG_USER:
      return {
        ...state, users: {id: action.payload.id, name: action.payload.name, score: action.payload.score,}
      }

      
      case LOGIN_USER:
      return {
        ...state, users: {id: action.payload.id, name: action.payload.name, score: action.payload.score,}
      }

      case LOGOUT_USER: {
        return {
          ...state, users: action.payload
        };
      }

      default: {
        return state
      }
  }
}
