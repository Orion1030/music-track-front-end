import { createSlice, configureStore, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Credentials } from '~/types';
import { loginUser } from '~/api/auth.api';
import { ResponseStatus } from '~/types';
import { message } from 'antd';

interface MyStore {
  trackMetadata: any;
  isAuthenticated: boolean
}
const initialState: MyStore = {
  trackMetadata: undefined,
  isAuthenticated: false
};
const myStore = createSlice({
  name: 'store',
  initialState,
  reducers: {
    logout: (state) =>{
      state.isAuthenticated = false
    },
    setTrackMetadata: (state, action: PayloadAction<any>) => {
      state.trackMetadata = action.payload;
    },
    clearTrackMetadata: (state) => {
      state.trackMetadata = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        message.success('Login successful');
      })
      .addCase(loginUser.rejected, (state) => {
        state.isAuthenticated = false;
        message.error('Login failed');
      });
    }
});
export const { setTrackMetadata, clearTrackMetadata, logout } = myStore.actions;

export const store = configureStore({
  reducer: {
    store: myStore.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
