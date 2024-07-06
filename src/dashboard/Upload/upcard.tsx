import { useState } from 'react';
import { CgArrowLeft, CgClose } from 'react-icons/cg';
import { Button } from '../../components/ui/button';
import { ImageUploader } from './uploader';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../../config';

export interface UploadCardProps {
    onNext: () => void;
    handleShow: (value: boolean) => void;
}

export const UploadCard = ({ onNext, handleShow }: UploadCardProps) => {
    const [step, setStep] = useState(1);
    const [base64Urls, setBase64Urls] = useState<string[]>([]);

    const convertToFiveCharacters = (arr: any[], padChar: string = ' '): string[] => {
        return arr.map(item => {
            const str = String(item); // Convert item to string
            if (str.length < 5) {
                return str.padEnd(5, padChar); // Pad the string with padChar
            } else {
                return str.slice(0, 5); // Truncate the string to 5 characters
            }
        });
    };
    

    const shortenedImageUrls = convertToFiveCharacters(base64Urls);

    

    const handleShowCard = () => {
        handleShow(false);
    };

    const handleNext = async () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            try {
                const url = `${baseUrl}/result`;
                const token = localStorage.getItem('token');
                console.log(token);
                
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Correct Content-Type for JSON payload
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ imageUrls: shortenedImageUrls }), // JSON stringify the body
                });
                
                if (response.ok) {
                    const jsonResponse = await response.json();
                    console.log(jsonResponse);
                    toast.success('Results submitted successfully');
                    onNext(); // Call the onNext function after successful submission
                } else {
                    const errorText = await response.text();
                    console.error("Error response", errorText);
                    toast.error('Error submitting results');
                }
            } catch (error) {
                console.error("Error uploading images", error);
                toast.error('Error submitting results');
            }
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="evidence-selection bg-white border-gray-500 rounded-3xl">
            <ToastContainer />
            <div className='m-8'>
                <div className='flex justify-between'>
                    <div className='border p-2 border-black rounded-full cursor-pointer'>
                        <CgArrowLeft className='h-8 w-16' onClick={handleBack} />
                    </div>
                    <div className='border cursor-pointer p-2 border-red-600 rounded-full'>
                        <CgClose className='h-8 w-16 text-red-700' onClick={handleShowCard} />
                    </div>
                </div>
                <div className="card">
                    {step === 1 && (
                        <div>
                            {/* SnapshotCapture component can be included here */}
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            {/* VideoRecorder component can be included here */}
                        </div>
                    )}
                    {step === 3 && (
                        <div>
                            {/* AudioRecorder component can be included here */}
                        </div>
                    )}
                </div>
                <div className="navigation">
                    {step > 1 && (
                        <ImageUploader base64Urls={base64Urls} setBase64Urls={setBase64Urls} />
                    )}
                    <Button className='bg-black' onClick={handleNext}>
                        {step < 3 ? 'Next' : 'Submit Evidence'}
                    </Button>
                </div>
            </div>
        </div>
    );
};







// import { useState } from 'react';
// import { CgArrowLeft, CgClose } from 'react-icons/cg';
// import { Button } from '../../components/ui/button';
// import { ImageUploader } from './uploader';
// import axios from 'axios';
// import { baseUrl } from '../../config';

// export interface UploadCardProps {
//     onNext: () => void;
//     handleShow: (value: boolean) => void;
// }

// export const UploadCard = ({ onNext, handleShow }: UploadCardProps) => {
//     const [step, setStep] = useState(1);
//     const [base64Urls, setBase64Urls] = useState<string[]>([]);

//     //   const [show, setShow] = useState(false);

//     // const onVideoRecorded = (blob: any) => {
//     //     // Handle the recorded video blob
//     // }

//     const handleShowCard = () => {
//         handleShow(false)
//     }

//     const handleNext = () => {
//         setStep(step + 1);
//         const url = `${baseUrl}/upload`;
//         const response = axios.post(url, { base64Urls }, { withCredentials: true });
        
//     };

//     const handleBack = () => {
//         if (step > 1) {
//             setStep(step - 1);
//         }
//     }

//     return (
//         <div className="evidence-selection bg-white border-gray-500 rounded-3xl">
//             <div className='m-8'>
//                 <div className='flex justify-between'>
//                 <div className='border p-2 border-black rounded-full cursor-pointer'>
//                     <CgArrowLeft className='h-8 w-16' onClick={handleBack} />
//                 </div>
//                 <div className='border cursor-pointer p-2 border-red-600 rounded-full'>
//                     <CgClose className='h-8 w-16 text-red-700' onClick={handleShowCard} />
//                 </div>
//                 </div>
//                 <div className="card">
//                     {step === 1 && (
//                         <div>
//                             {/* <SnapshotCapture onSnapshotTaken={function (blob: Blob): void {
//                                 throw new Error('Function not implemented.');
//                             }} /> */}
//                         </div>
//                     )}
//                     {step === 2 && (
//                         <div>
//                             {/* <VideoRecorder onVideoRecorded={onVideoRecorded} /> */}
//                         </div>
//                     )}
//                     {step === 3 && (
//                         <div>
//                             {/* <AudioRecorder /> */}
//                         </div>
//                     )}
//                 </div>
//                 <div className="navigation">
//                     {step > 1 && (
//                         <ImageUploader base64Urls={base64Urls} setBase64Urls={setBase64Urls} />
//                     )}
//                     {step < 3 && (
//                         <Button className='bg-black' onClick={handleNext}>Next</Button>
//                     )}
//                     {step === 3 && (
//                         <Button className='bg-black' onClick={onNext}>Submit Evidence</Button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };


