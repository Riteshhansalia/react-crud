import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pet: {},
};

const petslice = createSlice({
  name: 'pet',
  initialState,
  reducers: {},
});

export default petslice.reducer;
