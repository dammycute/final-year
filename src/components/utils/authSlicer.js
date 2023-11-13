import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const authReducer = authSlice.reducer;
export const { register, login, logout } = authSlice.actions 


