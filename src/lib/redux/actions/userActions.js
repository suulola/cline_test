import { GOOGLE_LOGIN } from "../../constants/constant";

export const googleLogin = (googleResponse) => async (dispatch) => {
  if (typeof googleResponse === "undefined") {
    googleResponse = [];
  }
  return dispatch({ type: GOOGLE_LOGIN, payload: googleResponse });
};
