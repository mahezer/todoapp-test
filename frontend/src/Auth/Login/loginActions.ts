import { createAsyncThunk } from '@reduxjs/toolkit';
import { postLogin } from '../common/authAPI';

export const sendRequest = createAsyncThunk(
  'auth/postLogin',
  async (formData: any) => {
    const response: any = await postLogin(formData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);