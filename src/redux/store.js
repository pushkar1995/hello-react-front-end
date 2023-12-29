import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: { messageReducer },
});
