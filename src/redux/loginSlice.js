import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userToken: null,
    userProfil: null,
  },
  reducers: {
    //****connecter l'utilisateur****//
    loginUser: (state, action) => {
      state.userToken = action.payload; //***Stoker les informations avec dispatch***//
    },
    //***Action pour deconecter l'utilisateur****//
    logoutUser: (state) => {
      state.userToken = null; //***** Remet a zéro les information user*****//
      state.userProfil = null;
    },
    //**** stoker les données utilisateur*****//
    infoUser: (state, action) => {
      state.userProfil = action.payload; //***** Stocker les informations avec dispatch*****//
    },

    infoUserName: (state, action) => {
      console.log("voici le payload info user Name :", action.payload);
      state.userProfil.userName = action.payload;
    },
  },
});

export const { loginUser, logoutUser, infoUser, infoUserName } =
  loginSlice.actions;

export default loginSlice;
