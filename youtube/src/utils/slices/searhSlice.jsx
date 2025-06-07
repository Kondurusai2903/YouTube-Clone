import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    searchDataCache: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      searchDataCache = { ...state, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
