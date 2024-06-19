// import React, { ChangeEvent, FormEvent } from 'react';
// import { motion } from 'framer-motion'; // For animations
// import electionData from './locations.json'; // Import the updated JSON data
// import { useGlobalState } from '../../globalstate2';

// export const Upload: React.FC = () => {
//   const { state, dispatch } = useGlobalState();

//   const handleInputChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//     dispatch({ type: `SET_${event.target.name.toUpperCase()}` as any, payload: event.target.value });
//   };

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       dispatch({ type: 'SET_RESULTS_FILE', payload: event.target.files[0] });
//     }
//   };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     dispatch({ type: 'SET_UPLOAD_STATUS', payload: 'uploading' });
//     setTimeout(() => {
//       dispatch({ type: 'SET_UPLOAD_STATUS', payload: 'success' });
//       dispatch({ type: 'SET_UPLOAD_MESSAGE', payload: 'Results uploaded successfully!' });
//     }, 2000); // Simulate upload time
//   };

//   const uploadStatusVariants = {
//     idle: { opacity: 1 },
//     uploading: { opacity: 0.5, scale: 1.1 },
//     success: { opacity: 1, scale: 1.2, transition: { duration: 1 } },
//   };

//   const selectedState = electionData.states.find(s => s.name === state.selectedState);
//   const selectedLGA = selectedState?.lgas.find(l => l.name === state.selectedLGA);
//   const selectedWard = selectedLGA?.wards.find(w => w.name === state.selectedWard);

//   return (
//     <motion.div
//       initial="idle"
//       animate={state.uploadStatus}
//       variants={uploadStatusVariants}
//       className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
//     >
//       <h2 className="text-2xl font-bold mb-4">Upload Election Results</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         <div>
//           <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
//             State
//           </label>
//           <select
//             id="state"
//             name="state"
//             value={state.selectedState}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//           >
//             <option value="">Select State</option>
//             {electionData.states.map((state) => (
//               <option key={state.name} value={state.name}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         {state.selectedState && (
//           <div>
//             <label htmlFor="lga" className="block text-gray-700 text-sm font-bold mb-2">
//               Local Government Area
//             </label>
//             <select
//               id="lga"
//               name="lga"
//               value={state.selectedLGA}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <option value="">Select LGA</option>
//               {selectedState?.lgas.map((lga) => (
//                 <option key={lga.name} value={lga.name}>
//                   {lga.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         {state.selectedLGA && (
//           <div>
//             <label htmlFor="ward" className="block text-gray-700 text-sm font-bold mb-2">
//               Ward
//             </label>
//             <select
//               id="ward"
//               name="ward"
//               value={state.selectedWard}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <option value="">Select Ward</option>
//               {selectedLGA?.wards.map((ward) => (
//                 <option key={ward.name} value={ward.name}>
//                   {ward.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         {state.selectedWard && (
//           <div>
//             <label htmlFor="pu" className="block text-gray-700 text-sm font-bold mb-2">
//               Polling Unit
//             </label>
//             <select
//               id="pu"
//               name="pu"
//               value={state.selectedPU}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <option value="">Select Polling Unit</option>
//               {selectedWard?.pollingUnits.map((pu) => (
//                 <option key={pu} value={pu}>
//                   {pu}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         <div>
//           <label htmlFor="position" className="block text-gray-700 text-sm font-bold mb-2">
//             Position
//           </label>
//           <select
//             id="position"
//             name="position"
//             value={state.selectedPosition}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//           >
//             <option value="">Select Position</option>
//             {electionData.positions.map((position) => (
//               <option key={position} value={position}>
//                 {position}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="party" className="block text-gray-700 text-sm font-bold mb-2">
//             Political Party
//           </label>
//           <select
//             id="party"
//             name="party"
//             value={state.selectedParty}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//           >
//             <option value="">Select Party</option>
//             {electionData.parties.map((party) => (
//               <option key={party} value={party}>
//                 {party}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="resultsFile" className="block text-gray-700 text-sm font-bold mb-2">
//             Upload Results File
//           </label>
//           <input
//             id="resultsFile"
//             type="file"
//             onChange={handleFileChange}
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//         >
//           Upload
//         </button>
//       </form>
//       {state.uploadMessage && (
//         <div className="mt-4 text-center text-green-600">{state.uploadMessage}</div>
//       )}
//     </motion.div>
//   );
// };



import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { motion } from 'framer-motion'; // For animations
import electionData from './locations.json'; // Import the updated JSON data
import { useGlobalState } from '../../globalstate2';

export const Upload: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    dispatch({ type: `SET_${event.target.name.toUpperCase()}` as any, payload: event.target.value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      dispatch({ type: 'SET_RESULTS_FILE', payload: event.target.files[0] });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch({ type: 'SET_UPLOAD_STATUS', payload: 'uploading' });
    setTimeout(() => {
      dispatch({ type: 'SET_UPLOAD_STATUS', payload: 'success' });
      dispatch({ type: 'SET_UPLOAD_MESSAGE', payload: 'Results uploaded successfully!' });
      setIsModalOpen(true);
    }, 2000); // Simulate upload time
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const uploadStatusVariants = {
    idle: { opacity: 1 },
    uploading: { opacity: 0.5, scale: 1.1 },
    success: { opacity: 1, scale: 1.2, transition: { duration: 1 } },
  };

  const selectedState = electionData.states.find(s => s.name === state.selectedState);
  const selectedLGA = selectedState?.lgas.find(l => l.name === state.selectedLGA);
  const selectedWard = selectedLGA?.wards.find(w => w.name === state.selectedWard);

  return (
    <>
      <motion.div
        initial="idle"
        animate={state.uploadStatus}
        variants={uploadStatusVariants}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Upload Election Results</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
              State
            </label>
            <select
              id="state"
              name="state"
              value={state.selectedState}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select State</option>
              {electionData.states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          {state.selectedState && (
            <div>
              <label htmlFor="lga" className="block text-gray-700 text-sm font-bold mb-2">
                Local Government Area
              </label>
              <select
                id="lga"
                name="lga"
                value={state.selectedLGA}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select LGA</option>
                {selectedState?.lgas.map((lga) => (
                  <option key={lga.name} value={lga.name}>
                    {lga.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {state.selectedLGA && (
            <div>
              <label htmlFor="ward" className="block text-gray-700 text-sm font-bold mb-2">
                Ward
              </label>
              <select
                id="ward"
                name="ward"
                value={state.selectedWard}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Ward</option>
                {selectedLGA?.wards.map((ward) => (
                  <option key={ward.name} value={ward.name}>
                    {ward.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {state.selectedWard && (
            <div>
              <label htmlFor="pu" className="block text-gray-700 text-sm font-bold mb-2">
                Polling Unit
              </label>
              <select
                id="pu"
                name="pu"
                value={state.selectedPU}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Polling Unit</option>
                {selectedWard?.pollingUnits.map((pu) => (
                  <option key={pu} value={pu}>
                    {pu}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label htmlFor="position" className="block text-gray-700 text-sm font-bold mb-2">
              Position
            </label>
            <select
              id="position"
              name="position"
              value={state.selectedPosition}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select Position</option>
              {electionData.positions.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="party" className="block text-gray-700 text-sm font-bold mb-2">
              Political Party
            </label>
            <select
              id="party"
              name="party"
              value={state.selectedParty}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select Party</option>
              {electionData.parties.map((party) => (
                <option key={party} value={party}>
                  {party}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="resultsFile" className="block text-gray-700 text-sm font-bold mb-2">
              Upload Results File
            </label>
            <input
              id="resultsFile"
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Upload
          </button>
        </form>
        {state.uploadMessage && (
          <div className="mt-4 text-center text-green-600">{state.uploadMessage}</div>
        )}
      </motion.div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Success
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Results uploaded successfully!
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
