import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContactsAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContactsAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
