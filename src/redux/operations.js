import { async } from '@firebase/util';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllAreas,
  getAllCrashPoints,
  getAllDepartments,
  getAllPositions,
  getAllUsers,
  idetifyUser,
  setCrashPoint,
  userSignIn,
  userSignOut,
} from 'components/firebase';

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
export const signOut = createAsyncThunk('auth/signOut', async () => {
  try {
    const response = await userSignOut();
    return response;
  } catch (err) {
    console.log(err);
  }
});
export const identifyMe = createAsyncThunk('auth/identifyMe', async data => {
  try {
    const result = await idetifyUser(data);
    return result;
  } catch (err) {
    console.log(err);
  }
});
export const getDepartments = createAsyncThunk(
  'company/getDepartments',
  async company => {
    try {
      const departmens = await getAllDepartments(company);
      return departmens;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getPositions = createAsyncThunk(
  'company/getPositions',
  async company => {
    try {
      const positions = await getAllPositions(company);
      return positions;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getAreas = createAsyncThunk('company/getAreas', async company => {
  try {
    const areas = await getAllAreas(company);
    return areas;
  } catch (err) {
    console.log(err);
  }
});

export const getCrashPoints = createAsyncThunk(
  'company/getCrashPoint',
  async company => {
    try {
      const points = await getAllCrashPoints(company);
      return points;
    } catch (err) {
      console.log(err);
    }
  }
);

export const setNewPoint = createAsyncThunk(
  'company/setNewPoint',
  async data => {
    try {
      await setCrashPoint(data);
      const points = await getAllCrashPoints(data.company);
      return points;
    } catch (err) {
      console.log(err);
    }
  }
);
