// import React, { useState } from 'react';
// import locations from './locations.json';
// import { useGlobalState } from '../../globalstate';

// export const Upload: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const { state, dispatch } = useGlobalState();

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     dispatch({ type: 'SET_STATE', payload: e.target.value });
//   };

//   const handleLgaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     dispatch({ type: 'SET_LGA', payload: e.target.value });
//   };

//   const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     dispatch({ type: 'SET_WARD', payload: e.target.value });
//   };

//   const handlePollingUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     dispatch({ type: 'SET_POLLING_UNIT', payload: e.target.value });
//   };

//   const selectedState = locations.states.find(s => s.name === state.state);
//   const selectedLga = selectedState?.lgas.find(l => l.name === state.lga);
//   const selectedWard = selectedLga?.wards.find(w => w.name === state.ward);

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Upload Election Results</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
//           Upload File
//         </label>
//         <input
//           type="file"
//           id="file"
//           className="w-full p-2 border rounded"
//           onChange={handleFileChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
//           State
//         </label>
//         <select
//           id="state"
//           className="w-full p-2 border rounded"
//           value={state.state}
//           onChange={handleStateChange}
//         >
//           <option value="">Select State</option>
//           {locations.states.map((state) => (
//             <option key={state.name} value={state.name}>
//               {state.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       {state.state && (
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lga">
//             Local Government Area
//           </label>
//           <select
//             id="lga"
//             className="w-full p-2 border rounded"
//             value={state.lga}
//             onChange={handleLgaChange}
//           >
//             <option value="">Select LGA</option>
//             {selectedState?.lgas.map((lga) => (
//               <option key={lga.name} value={lga.name}>
//                 {lga.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       {state.lga && (
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ward">
//             Ward
//           </label>
//           <select
//             id="ward"
//             className="w-full p-2 border rounded"
//             value={state.ward}
//             onChange={handleWardChange}
//           >
//             <option value="">Select Ward</option>
//             {selectedLga?.wards.map((ward) => (
//               <option key={ward.name} value={ward.name}>
//                 {ward.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       {state.ward && (
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pollingUnit">
//             Polling Unit
//           </label>
//           <select
//             id="pollingUnit"
//             className="w-full p-2 border rounded"
//             value={state.pollingUnit}
//             onChange={handlePollingUnitChange}
//           >
//             <option value="">Select Polling Unit</option>
//             {selectedWard?.pollingUnits.map((pollingUnit) => (
//               <option key={pollingUnit} value={pollingUnit}>
//                 {pollingUnit}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       <button
//         className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
//         onClick={() => alert('Results submitted successfully!')}
//       >
//         Submit Results
//       </button>
//       {file && (
//         <div className="mt-4 p-4 bg-gray-100 border rounded">
//           <p className="text-gray-700">File uploaded: {file.name}</p>
//         </div>
//       )}
//     </div>
//   );
// };



import React from 'react';
// import { Upload } from './upload2';
import { GlobalStateProvider } from '../../globalstate2';
import { Up } from './up';

export const UploadApp: React.FC = () => {
  return (
    <GlobalStateProvider>
      {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Upload />
      </div> */}
      <div>
        <Up />
      </div>
    </GlobalStateProvider>
  );
};


