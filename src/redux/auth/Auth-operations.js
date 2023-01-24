import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (event) {
    // return thunkAPI.rejectWithValue(event.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (event) {
    // return thunkAPI.rejectWithValue(event.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (event) {
    // return thunkAPI.rejectWithValue(event.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const PersistedToken = state.auth.token;

    if (PersistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(PersistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {}
  }
);
