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
    openCloseMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});
export const { toggleMenu, openCloseMenu } = generalSlice.actions;
export default generalSlice.reducer;
