export const BASE_URL = "https://se-register-api.en.tripleten-services.com/v1";

/**
 * Registra un nuevo usuario
 * POST /signup
 * Body: { email, password }
 * Response: { data: { email, _id } }
 */
export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    // Manejo de errores específicos
    if (res.status === 400) {
      return Promise.reject(
        "Uno o más campos se rellenaron de forma incorrecta"
      );
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

/**
 * Autoriza un usuario y retorna un JWT
 * POST /signin
 * Body: { email, password }
 * Response: { token }
 */
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    // Manejo de errores específicos
    if (res.status === 400) {
      return Promise.reject("Uno o más campos no fueron proporcionados");
    }
    if (res.status === 401) {
      return Promise.reject(
        "No se ha encontrado un usuario con ese correo electrónico"
      );
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

/**
 * Verifica la validez del token y obtiene el email del usuario
 * GET /users/me
 * Headers: Authorization: Bearer {token}
 * Response: { data: { email, _id } }
 */
export const checkToken = (token) => {
  if (!token) {
    return Promise.reject("Token no proporcionado");
  }

  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    // Manejo de errores específicos
    if (res.status === 400) {
      return Promise.reject("Token no proporcionado o formato incorrecto");
    }
    if (res.status === 401) {
      return Promise.reject("El token provisto es inválido");
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};
