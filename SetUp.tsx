import React from 'react';
import ResumeForm from './ResumeForm';



const App = () => {
  return(

  <ResumeForm/>

  )}
  
export default App;

   <AND>

  resumeslice.js folder
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
      updateField: (state, action) => {
        const { field, value } = action.payload;
        state[field] = value;
      },
       resetResume: () => initialState,
    },
  });
  
  export const {
    updateField,
    resetResume,
  } = resumeSlice.actions;
  
  export default resumeSlice.reducer;
  