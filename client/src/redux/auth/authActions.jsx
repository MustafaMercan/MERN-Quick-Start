import { LOGIN_SUCCESS, LOGOUT } from './authActionTypes';

// Kullanıcı giriş işlemi
export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

// Kullanıcı çıkış işlemi
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
