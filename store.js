import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resumeslice';

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export default store;
