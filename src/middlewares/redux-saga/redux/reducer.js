import { LOGIN, LOGIN_SUCCESS, FETCH_USER, LOGIN_USER_SUCCESS } from "./constants";

const initialState = {
  users: [],
  userLogined: {},
}

const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        usersLogined: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        usersLogined: action.payload
      }
    case FETCH_USER:
      return {
        ...state,
        usersLogined: action.payload
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        usersLogined: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;