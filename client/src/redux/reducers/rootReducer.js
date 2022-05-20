import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { pointsReducer } from "./pointsReducer";
import { usersReducer } from "./usersReducer";


export const rootReducer = combineReducers({
  users: usersReducer,
  cards: cardsReducer,
  points: pointsReducer,

})
