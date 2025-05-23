
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullname: '',
  email: '',
  phone: '',
  profSummary: '',
  skills: '',
  experience: '',
  education: '',  
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setfullname(state,action) {
        state.fullname=action.payload;
    },
    setemail(state,action) {
        state.email=action.payload;
    },
    setphone(state,action) {
        state.phone=action.payload;
    },
    setprofSummary(state,action) {
        state.profSummary=action.payload;
    },
    setskills(state,action) {
        state.skills=action.payload;
    },

     
  },
});

export const {
 fullName,
 email,
 phone,
 profSummary,
 skills,
}=resumeSlice.action

export default resumeSlice.reducer;
