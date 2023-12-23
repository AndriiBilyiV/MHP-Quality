import { createSlice } from '@reduxjs/toolkit';
import { getUsers, identifyMe, signIn, signOut } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isIdentify: false,
    isLoggedIn: false,
    token: '',
    user: '',
    email: '',
    position: '',
    positionDisplay: '',
    UID: '',
    company: '',
    isAdmin: '',
    usersArray: [],
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        if (action.payload.uid) {
          state.isLoggedIn = true;
          state.UID = action.payload.uid;
          state.user = action.payload.displayName || action.payload.email;
          state.email = action.payload.email;
          if (state.usersArray !== null) {
            if (
              state.usersArray.find(user => user.user === action.payload.uid)
            ) {
              state.isIdentify = true;
              state.position = state.usersArray.find(
                user => user.user === action.payload.uid
              ).position;
              state.positionDisplay = state.usersArray.find(
                user => user.user === action.payload.uid
              ).positionDisplay;
              state.company = state.usersArray.find(
                user => user.user === action.payload.uid
              ).company;
              state.isAdmin = state.usersArray.find(
                user => user.user === action.payload.uid
              ).isAdmin;
              // state.usersArray = [];
            }
          }
        }
      })
      .addCase(identifyMe.fulfilled, (state, action) => {
        if (state.usersArray !== null) {
          state.isIdentify = true;
          state.position = action.payload.position;
          state.positionDisplay = action.payload.positionDisplay;
          state.company = action.payload.company;
        }
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.isIdentify = false;
        state.isAdmin = false;
        state.isLoggedIn = false;
        state.user = '';
        state.UID = '';
        state.company = '';
        state.position = '';
        state.positionDisplay = '';
        state.email = '';
        // state.usersArray = [];
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.usersArray = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
