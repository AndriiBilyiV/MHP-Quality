import { createSlice } from '@reduxjs/toolkit';
import { getDepartments, getPositions } from './operations';

const companySlice = createSlice({
  name: 'company',
  initialState: {
      departments: [],
      positions: [],
  },
  extraReducers(builder) {
    builder
      .addCase(getDepartments.fulfilled, (state, action) => {
        state.departments = action.payload;
      })
      .addCase(getPositions.fulfilled, (state, action) => {
        state.positions = action.payload;
      });
  },
});

export const companyReducer = companySlice.reducer;
