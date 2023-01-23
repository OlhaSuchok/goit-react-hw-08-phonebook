import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from 'redux/auth/Auth-operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [register.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, actions) {
      console.log(actions);
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, actions) {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },

    // builder
    //   .addCase(fetchContacts.pending, handlePending)
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //   })
    //   .addCase(fetchContacts.rejected, handleRejected)
    //   .addCase(addContact.pending, handlePending)
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.unshift(action.payload);
    //   })
    //   .addCase(addContact.rejected, handleRejected)
    //   .addCase(deleteContact.pending, handlePending)
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = state.items.filter(({ id }) => id !== action.payload.id);
    //   })
    //   .addCase(deleteContact.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
