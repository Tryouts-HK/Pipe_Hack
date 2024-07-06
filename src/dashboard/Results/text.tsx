import React, { useState } from 'react';
import axios from 'axios';
import { aiBaseUrl } from '../../config';

const formatAnalysisText = (analysisText: any): string[] => {
    if (typeof analysisText !== 'string') {
        console.error('Invalid analysis text:', analysisText);
        return [];
    }

    // Remove Markdown formatting
    const formattedText = analysisText
        .replace(/\*\*/g, '')  // Remove **
        .replace(/-/g, '');    // Remove -

    // Split the text into structured parts
    const parts = formattedText.split(/\d+\./).filter(Boolean).map(part => part.trim());

    return parts;
};


const LocationAnalysisCard = ({ analysisText }: any) => {
    // Format the analysis text
    const formattedAnalysis = formatAnalysisText(analysisText);

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Location Analysis</div>
                {formattedAnalysis.map((part, index) => (
                    <div key={index} className="mb-4">
                        {part}
                    </div>
                ))}
            </div>
        </div>
    );
};






const TextAnalysis: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState([] as any);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const url = `${aiBaseUrl}/ai/location`;
            const response = await axios.post(url, { text: inputText }, { withCredentials: true });
            console.log(response)
            const format = response.data.data
            setResponseText(format); // Assuming response.data.result contains the analyzed text
        } catch (error) {
            console.error('Error analyzing text:', error);
            // Handle error state or display error message
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Text Analysis</h2>
                <div className="mb-4">
                    <label htmlFor="inputText" className="block text-sm font-medium text-gray-700">
                        Enter Text
                    </label>
                    <textarea
                        id="inputText"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows={4}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Analyze Text
                    </button>
                </div>
            </form>
            {/* {response && (
        <LocationAnalysisCard data={response.data} />
      )} */}
            {responseText && (
                <div>
                    <LocationAnalysisCard analysisText={responseText} />
                </div>
            )}
        </div>
    );
};

export default TextAnalysis;
