import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getGreetingMessage = createAsyncThunk('getGreetingMessage', async () => {
  const result = await axios.get('http://localhost:3000/api/v1/messages');
  return result.data;
});

const messageSlice = createSlice({
  name: 'message',
  initialState: { value: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreetingMessage.fulfilled, (state, action) => {
        state.value = action.payload.message.content;
      });
  },
});

export default messageSlice.reducer;
export { getGreetingMessage };
