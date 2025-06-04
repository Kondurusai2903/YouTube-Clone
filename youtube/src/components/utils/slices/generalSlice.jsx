import { createSlice } from '@reduxjs/toolkit';

const generalSlice = createSlice({
  name: 'generalSlice',
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export const { toggleMenu } = generalSlice.actions;
export default generalSlice.reducer;
