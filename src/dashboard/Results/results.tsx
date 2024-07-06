import { useState } from 'react';
import Typewriter from 'typewriter-effect'; // Import Typewriter effect library if not already imported
import { aiBaseUrl } from '../../config';
import AnalyseResultForm from './ana';
import axios from 'axios';
import TextAnalysis from './text';

const Results: React.FC = () => {
    const [responseState, setResponseState] = useState<any>(null);
    const [showResult, setShowResult] = useState(false);

    const handleSubmit = async (formData: any) => {
        try {
            const url = `${aiBaseUrl}/ai/results`;
            const response = await axios.post(url, formData, { withCredentials: true });
            setResponseState(response.data); // Assuming response.data contains the result from backend
            setShowResult(true); // Show the result after successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error state or display error message
        }
    };

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="mb-8">
                    <AnalyseResultForm onSubmit={handleSubmit} />
                </div>
                {showResult && (
                    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>
                        <div className="text-lg leading-relaxed">
                            <Typewriter
                                options={{
                                    strings: [responseState.data],
                                    autoStart: true,
                                    loop: false,
                                    delay: 10,
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
            <div>
                <TextAnalysis />
            </div>
        </div>
    );
};

export default Results;









// import React, { useState } from 'react';
// import axios from 'axios';
// import { aiBaseUrl } from '../../config';
// import AnalyseResultForm from './ana';
// import TextAnalysis from './text';

// const Results: React.FC = () => {
//   const [responseState, setResponseState] = useState<any>(null);

//   const handleSubmit = async (formData: any) => {
//     try {
//       const url = `${aiBaseUrl}/ai/results`;
//       const response = await axios.post(url, formData, { withCredentials: true });
//       setResponseState(response.data); // Assuming response.data contains the result from backend
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Handle error state or display error message
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="mb-8">
//         <AnalyseResultForm onSubmit={handleSubmit} />
//       </div>
//       <div>
//         {/* <ResultsPage /> */}
//       </div>
//       <div>
//         {responseState && (
//           <div>
//             <h2 className="text-xl font-bold">Analysis Result</h2>
//             <pre>{JSON.stringify(responseState, null, 2)}</pre>
//           </div>
//         )}
//       </div>
//       <TextAnalysis />
//     </div>
//   );
// };

// export default Results;
