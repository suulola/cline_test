import { GOOGLE_LOGIN, EMAIL_PASSWORD_LOGIN } from "../../constants/constant";

const initialState = {
  isLoggedIn: false,
  userData: null,
};

const authenticationReducer = async (state = initialState, action) => {
  console.log('janfdsjnfa');

  switch (action.type) {
    case GOOGLE_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    case EMAIL_PASSWORD_LOGIN:
      console.log({
        ...state,
        isLoggedIn: true,
        userData: { profileObj: { name: action.payload.email } },
      })
      return {
        ...state,
        isLoggedIn: true,
        userData: { profileObj: { name: action.payload.email } },
      };
    default:
      return state;
  }
};


export default authenticationReducer;
