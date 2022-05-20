import {
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
      
      default: {
        return state
      }
  }
}
