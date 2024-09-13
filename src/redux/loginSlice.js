import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
  },
  reducers: {
    //****connecter l'utilisateur****//
    loginUser: (state, action) => {
      state.user = action.payload; //***Stoker les informations avec dispatch***//
    },
    //***Action pour deconecter l'utilisateur****//
    logoutUser: (state) => {
      state.user = null; //***** Remet a zéro les information user*****//
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice;
