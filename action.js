// Register action
export const REGISTER = "REGISTER";

export const register = (email, password) => {
  return async (dispatch) => {
    const response = await axios.post("/api/register", {
      email,
      password,
    });

    const token = response.data.token;

    // Save the token to local storage
    localStorage.setItem("token", token);

    // Dispatch the register action
    dispatch({
      type: REGISTER,
      payload: {
        email,
        token,
      },
    });
  };
};

// Login action
export const LOGIN = "LOGIN";

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await axios.post("/api/login", {
      email,
      password,
    });

    const token = response.data.token;

    // Save the token to local storage
    localStorage.setItem("token", token);

    // Dispatch the login action
    dispatch({
      type: LOGIN,
      payload: {
        email,
        token,
      },
    });
  };
};

// Logout action
export const LOGOUT = "LOGOUT";

export const logout = () => {
  return async (dispatch) => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Dispatch the logout action
    dispatch({
      type: LOGOUT,
    });
  };
};
