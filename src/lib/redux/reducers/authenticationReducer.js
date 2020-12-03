import { GOOGLE_LOGIN, LOGIN_AUTHENTICATION } from "../../constants/constant";

const initialState = {
  isLoggedIn: false,
  userData: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTHENTICATION:
      return {
        isLoggedIn: true,
        userData: action.payload,
      };
    case GOOGLE_LOGIN:
      return {
        isLoggedIn: true,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
