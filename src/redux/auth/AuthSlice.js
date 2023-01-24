import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
} from 'redux/auth/Auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    // [register.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [logIn.fulfilled](state, action) {
    //   console.log(action);
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [logOut.fulfilled](state, action) {
    //   state.user = { name: '', email: '' };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [fetchCurrentUser.pending](state, action) {
    //   state.isFetchingCurrentUser = true;
    // },
    // [fetchCurrentUser.fulfilled](state, action) {
    //   console.log(action);
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isFetchingCurrentUser = false;
    // },
    // [fetchCurrentUser.rejected](state, action) {
    //   state.isFetchingCurrentUser = false;
    // },

    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
      });
  },
});

export const authReducer = authSlice.reducer;
