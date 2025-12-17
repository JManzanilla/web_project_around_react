// utils/token.js

const TOKEN_KEY = "jwt";

// setToken acepta el token como argumento y lo agrega a
// localStorage con la clave TOKEN_KEY.
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

// getToken recupera y devuelve el valor asociado a
// TOKEN_KEY desde localStorage.
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
