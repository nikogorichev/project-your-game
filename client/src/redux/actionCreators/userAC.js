import { LOGIN_USER, LOGOUT_USER } from "../actionTypes/userAT";

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
export const logoutUserAC = (payload) => {
  return {
    type: LOGOUT_USER,
    payload
  }
}

