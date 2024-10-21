import { Credentials } from '~/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiHost } from '~/constants';

export const loginUser = createAsyncThunk<any, Credentials>(
  'auth/login',
  async (data) => {
    const auth = btoa(`${data.name}:${data.pwd}`)
    localStorage.setItem('auth', auth)
    const headers = {
      'Authorization':  `Basic ${auth}`,
      'Access-Control-Allow-Origin':'*'
    };
    const response = await axios.post(`${apiHost}/auth/login`, null, { headers } )
    return response
  }
);
