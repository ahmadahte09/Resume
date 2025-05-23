// resumeslice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  phoneNo: '',
  profSummary: '',
  skill: '',
  experience: '',
  education: '',
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateResume: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetResume: () => ({ ...initialState }),
  },
});

export const { updateField, updateResume, resetResume } = resumeSlice.actions;
export default resumeSlice.reducer;
