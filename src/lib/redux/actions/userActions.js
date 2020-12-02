// import { userConstants, urlConstants } from '../../lib/constants/index';

// const login = (email, password) => async (dispatch) => {
//   await fetch(urlConstants.LOGIN, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       if (response.status === '00') {
//         dispatch({
//           type: userConstants.LOGIN_SUCCESS,
//           user: response.data.user,
//           status: response.status,
//           token: response.data.accessToken,
//           firstTimeLogin: response.data.firstTimeLogin,
//           message: response.statusMessage,
//         });
//       } else {
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('firstName');
//         localStorage.removeItem('lastName');

//         dispatch({
//           type: userConstants.LOGIN_FAILURE,
//           status: response.status,
//           message: response.statusMessage,
//         });
//       }
//     })
//     .catch((error) => {
//       dispatch({
//         type: userConstants.LOGIN_FAILURE,
//         status: '01',
//         message: 'Unable to login. Try again',
//       });
//     });
// };

// const resetPassword = (email) => async (dispatch) => {
//   const url = `${urlConstants.BASEURL}user/send_password_reset_email?prefix_url=${urlConstants.FRONTENDURL}change-password&email=${email}`;

//   await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//       Accept: 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       let type;

//       if (response.status === '00') {
//         type = userConstants.RESET_PASSWORD_SUCCESS;
//       } else {
//         type = userConstants.RESET_PASSWORD_FAILURE;
//       }

//       dispatch({
//         type: type,
//         status: response.status,
//         message: response.statusMessage,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: userConstants.RESET_PASSWORD_FAILURE,
//         status: false,
//         message: 'Unable to reset password. Try again',
//       });
//     });
// };

// const setNewPassword = (old_password, new_password) => async (dispatch) => {
//   const accessToken = JSON.parse(localStorage.getItem('greenpole_redux_state'));

//   await fetch(urlConstants.SET_NEW_PASSWORD, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${accessToken.auth.token}`,
//       'Content-Type': 'application/json;charset=utf-8',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({ old_password, new_password }),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       if (response.status === '00') {
//         dispatch({
//           type: userConstants.SET_NEW_PASSWORD_SUCCESS,
//           status: response.status,
//           message: 'Password successfully changed.',
//         });
//       } else {
//         dispatch({
//           type: userConstants.SET_NEW_PASSWORD_FAILURE,
//           status: response.status,
//           message: response.statusMessage,
//         });
//       }
//     })
//     .catch((error) => {
//       dispatch({
//         type: userConstants.SET_NEW_PASSWORD_FAILURE,
//         status: '01',
//         message: 'Unable to set new password. Try again',
//       });
//     });
// };

// const changePassword = (password, token) => async (dispatch) => {
//   const accessToken = JSON.parse(localStorage.getItem('accessToken'));
//   await fetch(urlConstants.CHANGE_PASSWORD, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       'Content-Type': 'application/json;charset=utf-8',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({ password, token }),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       if (response.status === '00') {
//         dispatch({
//           type: userConstants.CHANGE_PASSWORD_SUCCESS,
//           status: response.status,
//           message: 'Password successfully changed.',
//         });
//       } else {
//         dispatch({
//           type: userConstants.CHANGE_PASSWORD_FAILURE,
//           status: response.status,
//           message: response.statusMessage,
//         });
//       }
//     })
//     .catch((error) => {
//       dispatch({
//         type: userConstants.CHANGE_PASSWORD_FAILURE,
//         status: '01',
//         message: 'Unable to change password. Try again',
//       });
//     });
// };

// const updateProfile = (profileData) => async (dispatch) => {
//   const accessToken = JSON.parse(localStorage.getItem('greenpole_redux_state'));
//   await fetch(urlConstants.UPDATE_PROFILE, {
//     method: 'PATCH',
//     headers: {
//       Authorization: `Bearer ${accessToken.auth.token}`,
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(profileData),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       if (response.status === '00') {
//         dispatch({
//           type: userConstants.UPDATE_PROFILE_SUCCESS,
//           status: response.status,
//           message: 'Your profile has been successfully updated',
//         });
//       } else {
//         dispatch({
//           type: userConstants.UPDATE_PROFILE_FAILURE,
//           status: response.status,
//           message: response.statusMessage,
//         });
//       }
//     })
//     .catch((error) => {
//       dispatch({
//         type: userConstants.UPDATE_PROFILE_FAILURE,
//         status: '01',
//         message: 'Unable to update profile. Try again',
//       });
//     });
// };
// export const userActions = {
//   login,
//   resetPassword,
//   setNewPassword,
//   changePassword,
//   updateProfile,
// };
