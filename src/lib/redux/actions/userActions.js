import { GOOGLE_LOGIN, EMAIL_PASSWORD_LOGIN } from "../../constants/constant";

export const googleLogin = (googleResponse) => async (dispatch) => {
  if (typeof googleResponse === "undefined") {
    googleResponse = [];
  }
  return dispatch({ type: GOOGLE_LOGIN, payload: googleResponse });
};

export const emailPasswordLogin = (data) => async(dispatch) => {
  return dispatch({type: EMAIL_PASSWORD_LOGIN, payload: data})
}