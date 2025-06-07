import { configureStore } from '@reduxjs/toolkit';
import generalSlice from './slices/generalSlice';
import searchSlice from './slices/searhSlice';
import chatSlice from './slices/chatSlice';

const store = configureStore({
  reducer: {
    generalSlice: generalSlice,
    searchSlice: searchSlice,
    chatSlice: chatSlice,
  },
});

export default store;
