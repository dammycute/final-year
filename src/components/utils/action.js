import axios from "axios";

export const register = async (email, password, firstname, lastname) => {
  const response = await axios.post("https://pm-api.cyclic.app/user/register/", {
    email: email,
    firstname: firstname,
    lastname: lastname,
    designation: designation,
    password: password,
  });

  // const response = {
  //   email: "damilola@gmail.com",
  //   token:"Bearer gfyuygdifygsyfgwygrfrhvyfirgyhsfgh",
  //   user_id:12653765,
  // }

  const token = response.data.token;
  const user = response.data._id;


  // Save the token to local storage
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", user);

  return {
    type: "REGISTER",
    payload: {
      token,
      user
    },
  };
};

export const login = async (email, password) => {
  const response = await axios.post("https://pm-api.cyclic.app/user/login/", {
    email: email ,
    password: password,
  });

  // const response = {
  //   email: "damilola@gmail.com",
  //   token:"Bearer gfyuygdifygsyfgwygrfrhvyfirgyhsfgh",
  //   user_id:12653765,
  // }

  const token = response.data.token;
  const user = response.data._id;

  // Save the token to local storage
  localStorage.setItem("token", `Bearer ${token}`);
  localStorage.setItem("user_id", user);

  return {
    type: "LOGIN",
    payload: {
      email,
      token,
      // user_id: response.id
      user
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
