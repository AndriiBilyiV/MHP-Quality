import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers, idetifyUser, userSignIn } from 'components/fareBaseInit';

export const getUsers = createAsyncThunk('auth/getUsers', async () => {
  const response = await getAllUsers();
  return response;
});

export const signIn = createAsyncThunk('auth/signIn', async () => {
  try {
    const response = await userSignIn();
    const result = {
      uid: response.uid,
      displayName: response.displayName,
      email: response.email,
    };
    return result;
  } catch (err) {
    console.log(err);
  }
});
export const identifyMe = createAsyncThunk('auth/identifyMe', async data => {
    try {
    idetifyUser(data);
  } catch (err) {
    console.log(err);
  }
});
