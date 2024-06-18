// import React, { useState } from 'react';
// import PollingUnitSearch from './search';

// interface ComplaintFormProps {
//   onSubmit: (data: any) => void;
//   pollingUnits: any[]
// }

// export const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSubmit, pollingUnits }) => {
//   const [pollingUnit, setPollingUnit] = useState(null);
//   const [text, setText] = useState('');
//   const [impactLevel, setImpactLevel] = useState('Low');
//   const [urgency, setUrgency] = useState('Normal');
//   const [video, setVideo] = useState<File | null>(null);
//   const [audio, setAudio] = useState<File | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (file: File | null) => void) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

// const onSelect = (a: any) => {
//     setPollingUnit(a)
// }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({ pollingUnit, text, impactLevel, urgency, video, audio });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Polling Unit</label>
//         <PollingUnitSearch pollingUnits={pollingUnits} onSelect={onSelect} />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Text</label>
//         <textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Impact Level</label>
//         <select
//           value={impactLevel}
//           onChange={(e) => setImpactLevel(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//         >
//           <option>Low</option>
//           <option>Medium</option>
//           <option>High</option>
//         </select>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Urgency</label>
//         <select
//           value={urgency}
//           onChange={(e) => setUrgency(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//         >
//           <option>Normal</option>
//           <option>Urgent</option>
//           <option>Immediate</option>
//         </select>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Video Evidence</label>
//         <input
//           type="file"
//           accept="video/*"
//           onChange={(e) => handleFileChange(e, setVideo)}
//           className="mt-1 block w-full text-sm text-gray-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Audio Evidence</label>
//         <input
//           type="file"
//           accept="audio/*"
//           onChange={(e) => handleFileChange(e, setAudio)}
//           className="mt-1 block w-full text-sm text-gray-500"
//         />
//       </div>
//       <button
//         type="submit"
//         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
//       >
//         Submit Complaint
//       </button>
//     </form>
//   );
// };


import React, { useState, useRef } from 'react';
import PollingUnitSearch from './search';

interface ComplaintFormProps {
  onSubmit: (data: any) => void;
  pollingUnits: any[];
}

export const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSubmit, pollingUnits }) => {
  const [pollingUnit, setPollingUnit] = useState(null);
  const [text, setText] = useState('');
  const [impactLevel, setImpactLevel] = useState('Low');
  const [urgency, setUrgency] = useState('Normal');
  const [video, setVideo] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (file: File | null) => void) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onSelect = (a: any) => {
    setPollingUnit(a);
  };

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          setAudio(new File([audioBlob], 'recorded-audio.wav', { type: 'audio/wav' }));
          audioChunksRef.current = [];
        };
        mediaRecorder.start();
        setIsRecording(true);
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ pollingUnit, text, impactLevel, urgency, video, audio });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Polling Unit</label>
        <PollingUnitSearch pollingUnits={pollingUnits} onSelect={onSelect} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Impact Level</label>
        <select
          value={impactLevel}
          onChange={(e) => setImpactLevel(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Urgency</label>
        <select
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option>Normal</option>
          <option>Urgent</option>
          <option>Immediate</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Video Evidence</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => handleFileChange(e, setVideo)}
          className="mt-1 block w-full text-sm text-gray-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Audio Evidence</label>
        <div>
          {isRecording ? (
            <button
              type="button"
              onClick={handleStopRecording}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Stop Recording
            </button>
          ) : (
            <button
              type="button"
              onClick={handleStartRecording}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Start Recording
            </button>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        Submit Complaint
      </button>
    </form>
  );
};
