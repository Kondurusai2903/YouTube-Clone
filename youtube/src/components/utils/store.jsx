import { configureStore } from '@reduxjs/toolkit';
import generalSlice from './slices/generalSlice';
const store = configureStore({
  reducer: {
    generalSlice: generalSlice,
  },
});

export default store;
