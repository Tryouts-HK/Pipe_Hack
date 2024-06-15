// import React, { useState, createContext, useContext, useEffect } from 'react';
// import { useReducer } from 'react';
// import { motion } from 'framer-motion'; // For animations

// // Election data (replace with your actual data)
// const electionData = {
//   states: [
//     { name: 'Lagos', lgas: [] }, // Replace with actual LGA data for Lagos
//     { name: 'Ogun', lgas: [] }, // Replace with actual LGA data for Ogun
//     // ... other states
//   ],
// };

// // State and reducer for election data and upload status
// const initialState = {
//   selectedState: '',
//   selectedLGA: '',
//   selectedWard: '',
//   selectedPU: '',
//   selectedPosition: '',
//   selectedParty: '',
//   resultsFile: null,
//   uploadStatus: '',
//   uploadMessage: '',
// };

// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'SET_STATE':
//       return { ...state, selectedState: action.payload, selectedLGA: '', selectedWard: '', selectedPU: '' };
//     case 'SET_LGA':
//       return { ...state, selectedLGA: action.payload, selectedWard: '', selectedPU: '' };
//     case 'SET_WARD':
//       return { ...state, selectedWard: action.payload, selectedPU: '' };
//     case 'SET_PU':
//       return { ...state, selectedPU: action.payload };
//     case 'SET_POSITION':
//       return { ...state, selectedPosition: action.payload };
//     case 'SET_PARTY':
//       return { ...state, selectedParty: action.payload };
//     case 'SET_RESULTS_FILE':
//       return { ...state, resultsFile: action.payload };
//     case 'SET_UPLOAD_STATUS':
//       return { ...state, uploadStatus: action.payload };
//     case 'SET_UPLOAD_MESSAGE':
//       return { ...state, uploadMessage: action.payload };
//     default:
//       return state;
//   }
// };

// const ElectionContext = createContext(initialState);

// const ElectionProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     // Update dependent state based on selections (replace with actual logic)
//     const updateLgas = () => {
//       const selectedStateLgas = electionData.states.find(
//         (s) => s.name === state.selectedState
//       )?.lgas;
//       dispatch({ type: 'SET_LGA', payload: selectedStateLgas?.[0] || '' });
//     };

//     const updateWards = () => {
//       // Update wards based on selected LGA (replace with actual logic)
//       dispatch({ type: 'SET_WARD', payload: '' });
//     };

//     const updatePUs = () => {
//       // Update polling units based on selected ward (replace with actual logic)
//       dispatch({ type: 'SET_PU', payload: '' });
//     };

//     updateLgas();
//     updateWards();
//     updatePUs();
//   }, [state.selectedState]); // Update on state change

//   return (
//     <ElectionContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ElectionContext.Provider>
//   );
// };

// const UploadForm = () => {
//   const { state, dispatch } = useContext(ElectionContext);

//   const handleInputChange = (event : any) => {
//     dispatch({ type: event.target.name, payload: event.target.value });
//   };

//   const handleFileChange = (event : any) => {
//     dispatch({ type: 'SET_RESULTS_FILE', payload: event.target.files[0] });
//   };

//   const handleSubmit = (event : any) => {
//     event.preventDefault();
//     // Simulate upload (replace with actual upload logic)
//     dispatch({ type: 'SET_UPLOAD_STATUS', payload: 'uploading' });
//     setTimeout(() => {
//       dispatch({ type: 'SET_UPLOAD_STATUS', payload: 'success' });
//       dispatch({ type: 'SET_UPLOAD_MESSAGE', payload: 'Results uploaded successfully!' });
//     }, 2000); // Simulate upload time
//   };

//   const uploadStatusVariants = {
//     idle: { opacity: 1 },
//     uploading: { opacity: 0.5, scale: 1.1 },
//     success: { opacity: 1, scale
