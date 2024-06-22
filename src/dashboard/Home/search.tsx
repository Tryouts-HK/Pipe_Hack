// import React, { useState, useEffect } from 'react';
// import { baseUrl } from '../../config';

// export const PollingSearch = () => {
//   const [stateCode, setStateCode] = useState('');
//   const [lgaCode, setLgaCode] = useState('');
//   const [wardCode, setWardCode] = useState('');
//   const [puCode, setPuCode] = useState('');
//   const [pollingUnits, setPollingUnits] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [searchAll, setSearchAll] = useState(false);

//   const fetchPollingUnits = async (queryParams: any) => {
//     try {
//       let url;
//       if (searchAll) {
//         url = new URL(`${baseUrl}/polling_units/`);
//         url.searchParams.append('page', queryParams.page);
//       } else {
//         const delimiterPath = [stateCode, lgaCode, wardCode, puCode].filter(Boolean).join('');
//         url = new URL(`${baseUrl}/polling_units/${delimiterPath}`);
//       }

//       const response = await fetch(url.toString());
//       const data = await response.json();
//       console.log('Polling units:', data);

//       if (searchAll) {
//         setPollingUnits(data.stations || []);
//         setTotalPages(data.pagination?.totalPages || 1);
//       } else {
//         setPollingUnits(data.status === 'success' ? [data] : []);
//         setTotalPages(1);
//       }
//     } catch (error) {
//       console.error('Error fetching polling units:', error);
//     }
//   };

//   useEffect(() => {
//     if (searchAll) {
//       handleSearchAll();
//     }
//   }, [page]);

//   const handleSearch = () => {
//     setSearchAll(false);
//     setPage(1); // Reset to first page for a new search
//     fetchPollingUnits({ page: '1' });
//   };

//   const handleSearchAll = () => {
//     setSearchAll(true);
//     fetchPollingUnits({ page: page.toString() });
//   };

//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(prevPage => prevPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (page > 1) {
//       setPage(prevPage => prevPage - 1);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h1 className="text-xl font-bold mb-4">Search Polling Units</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="State Code"
//           value={stateCode}
//           onChange={(e) => setStateCode(e.target.value)}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="LGA Code"
//           value={lgaCode}
//           onChange={(e) => setLgaCode(e.target.value)}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="Ward Code"
//           value={wardCode}
//           onChange={(e) => setWardCode(e.target.value)}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         <input
//           type="text"
//           placeholder="PU Code"
//           value={puCode}
//           onChange={(e) => setPuCode(e.target.value)}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         <button
//           onClick={handleSearch}
//           className="w-full bg-blue-600 text-white py-2 rounded mb-2"
//         >
//           Search with Inputs
//         </button>
//         <button
//           onClick={handleSearchAll}
//           className="w-full bg-green-600 text-white py-2 rounded"
//         >
//           Search All Polling Units
//         </button>
//       </div>
//       <div>
//         {pollingUnits.length > 0 ? (
//           pollingUnits.map((unit: any, index) => (
//             <div key={index} className="border-b py-2">
//               <p><strong>Name:</strong> {unit.name || unit.pu_name}</p>
//               <p><strong>Ward:</strong> {unit.ward_name}</p>
//               <p><strong>LGA:</strong> {unit.local_government_name}</p>
//               <p><strong>State:</strong> {unit.state_name}</p>
//               {unit.delimitation && <p><strong>Delimitation:</strong> {unit.delimitation}</p>}
//               {unit.location && (
//                 <p><strong>Location:</strong> {unit.location.latitude}, {unit.location.longitude}</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No polling units found.</p>
//         )}
//       </div>
//       {searchAll && (
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handlePreviousPage}
//             disabled={page === 1}
//             className="bg-gray-300 py-2 px-4 rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <span>Page {page} of {totalPages}</span>
//           <button
//             onClick={handleNextPage}
//             disabled={page === totalPages}
//             className="bg-gray-300 py-2 px-4 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };


import { useState, useEffect } from 'react';
import { baseUrl } from '../../config';
import Card from './searchcard';



export const PollingSearch = () => {
  const [stateCode, setStateCode] = useState('');
  const [lgaCode, setLgaCode] = useState('');
  const [wardCode, setWardCode] = useState('');
  const [puCode, setPuCode] = useState('');
  const [pollingUnits, setPollingUnits] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchAll, setSearchAll] = useState(false);

  const fetchPollingUnits = async (queryParams: any) => {
    try {
      let url;
      if (searchAll) {
        url = new URL(`${baseUrl}/polling_units/`);
        url.searchParams.append('page', queryParams.page);
      } else {
        const delimiterPath = [stateCode, lgaCode, wardCode, puCode].filter(Boolean).join('');
        url = new URL(`${baseUrl}/polling_units/${delimiterPath}`);
      }

      const token = localStorage.getItem('token')
      console.log(token)
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      console.log('Polling units:', data);

      if (searchAll) {
        setPollingUnits(data.stations || []);
        setTotalPages(data.pagination?.totalPages || 1);
      } else {
        setPollingUnits(data.status === 'success' ? [data] : []);
        setTotalPages(1);
      }
    } catch (error) {
      console.error('Error fetching polling units:', error);
      setPollingUnits([{ error: 'Failed to fetch polling units' }]);
    }
  };

  useEffect(() => {
    if (searchAll) {
      handleSearchAll();
    }
  }, [page]);

  const handleSearch = () => {
    setSearchAll(false);
    setPage(1); // Reset to first page for a new search
    fetchPollingUnits({ page: '1' });
  };

  const handleSearchAll = () => {
    setSearchAll(true);
    fetchPollingUnits({ page: page.toString() });
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className='flex justify-items-start'>
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Search Polling Units</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="State Code"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="LGA Code"
          value={lgaCode}
          onChange={(e) => setLgaCode(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Ward Code"
          value={wardCode}
          onChange={(e) => setWardCode(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="PU Code"
          value={puCode}
          onChange={(e) => setPuCode(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded mb-2"
        >
          Search with Inputs
        </button>
        <button
          onClick={handleSearchAll}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Search All Polling Units
        </button>
      </div>
      <div className='flex overflow-x-auto'>
        {pollingUnits.length > 0 ? (
          pollingUnits.map((unit: any, index) => (
            <Card key={index} data={unit} />
          ))
        ) : (
          <p>No polling units found.</p>
        )}
      </div>
      {searchAll && (
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="bg-gray-300 py-2 px-4 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>Page {page} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className="bg-gray-300 py-2 px-4 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
    </div>
  );
};
