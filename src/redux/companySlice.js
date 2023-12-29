import { createSlice } from '@reduxjs/toolkit';
import {
  getAreas,
  getCrashPoints,
  getDepartments,
  getPositions,
  setNewPoint,
} from './operations';

const companySlice = createSlice({
  name: 'company',
  initialState: {
    departments: [],
    positions: [],
    areas: [],
    crashPoints: [],
  },
  extraReducers(builder) {
    builder
      .addCase(getDepartments.fulfilled, (state, action) => {
        state.departments = action.payload;
      })
      .addCase(getPositions.fulfilled, (state, action) => {
        state.positions = action.payload;
      })
      .addCase(getAreas.fulfilled, (state, action) => {
        state.areas = action.payload;
      })
      .addCase(getCrashPoints.fulfilled, (state, action) => {
        state.crashPoints = action.payload;
      })
      .addCase(setNewPoint.fulfilled, (state, action) => {
        state.crashPoints = action.payload;
      });
  },
});

export const companyReducer = companySlice.reducer;
