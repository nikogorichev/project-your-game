import { LOGIN_USER } from "../actionTypes/userAT";

import { REG_USER } from "../actionTypes/userAT";

export const loginUserAC = (payload) => {
  return {
    type: LOGIN_USER,
    payload
  }
}

export const regUserAC = (payload) => {
  return {
    type: REG_USER,
    payload
  }
}
