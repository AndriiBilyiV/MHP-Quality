import { createSlice } from '@reduxjs/toolkit';
import { getAreas, getDepartments, getPositions } from './operations';

const companySlice = createSlice({
  name: 'company',
  initialState: {
    departments: [],
    positions: [],
    areas: [],
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
      });
  },
});

export const companyReducer = companySlice.reducer;
