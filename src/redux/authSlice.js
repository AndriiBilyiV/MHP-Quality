import { createSlice } from '@reduxjs/toolkit';
import { getUsers, signIn } from './operations';

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
      .addCase(getUsers.fulfilled, (state, action) => {
        state.usersArray = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
