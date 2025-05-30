
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
    setphoneNo(state,action) {
        state.phone=action.payload;
    },
    setprofSummary(state,action) {
        state.profSummary=action.payload;
    },
    setexperience(state,action) {
        state.experience=action.payload;
    },
    seteducation(state,action) {
        state.education=action.payload;
    },

     
  },
});

export const {
 fullName,
 email,
 phoneNo,
 profSummary,
 skills,
 experience,
 education
}=resumeSlice.action

export default resumeSlice.reducer;
