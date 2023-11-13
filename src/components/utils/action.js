import axios from "axios";

export const register = async (email, password) => {
  const response = await axios.post("/api/register", {
    email,
    password,
  });

  const token = response.token;
  const user_id = response.id;

  // Save the token to local storage
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", user_id);

  return {
    type: "REGISTER",
    payload: {
      user,
      token,
    },
  };
};

export const login = async (email, password) => {
  const response = await axios.post("/api/login", {
    email,
    password,
  });

  const token = response.token;

  // Save the token to local storage
  localStorage.setItem("token", token);

  return {
    type: "LOGIN",
    payload: {
      email,
      token,
    },
  };
};

export const logout = async () => {
  // Remove the token from local storage
  localStorage.removeItem("token");

  return {
    type: "LOGOUT",
  };
};
