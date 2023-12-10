import { createSlice } from '@reduxjs/toolkit';
import { getUsers, signIn } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isIdetify: false,
    isLoggedIn: false,
    token: '',
    user: '',
    email: '',
    type: '',
    UID: '',
    company: '',
    usersArray: [],
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        if (action.payload.uid) {
          //тут додати перевiрку нового користувача
          state.isLoggedIn = true;
          state.UID = action.payload.uid;
          state.user = action.payload.displayName || action.payload.email;
          state.email = action.payload.email;

          if (state.usersArray.find(user => user.user === action.payload.uid)) {
            state.isIdetify = true;
            state.type = state.usersArray.find(
              user => user.user === action.payload.uid
            ).type;
            state.company = state.usersArray.find(
              user => user.user === action.payload.uid
            ).company;
          }
        }
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.usersArray = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
