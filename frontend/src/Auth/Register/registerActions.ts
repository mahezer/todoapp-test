import { createAsyncThunk } from '@reduxjs/toolkit';
import { postRegister } from '../common/authAPI';

export const sendRequest = createAsyncThunk(
  'auth/postRegister',
  async (formData: any) => {
    const response: any = await postRegister(formData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);