import { LOGIN_AUTHENTICATION } from '../../constants/constant'

const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_AUTHENTICATION:
      return {
        status: action.status,
        message: action.message,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
