import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { usersReducer } from "./usersReducer";


export const rootReducer = combineReducers({
  users: usersReducer,
  cards: cardsReducer,

})
