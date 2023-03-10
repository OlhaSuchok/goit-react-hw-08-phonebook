import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.set(data.token);
      toast.success('Вітаю! Ви успішно зареєструвалися у PHONEBOOCK!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return data;
    } catch (error) {
      toast.error(
        'Невірний формат електронної пошти або паролю, спробуйте ще.',
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      token.set(data.token);
      toast.success('Вітаю! Ви успішно увійшли до PHONEBOOCK!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return data;
    } catch (error) {
      toast.error('Пошта або пароль введені невірно.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
