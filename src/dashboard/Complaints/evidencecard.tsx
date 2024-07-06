import { useState } from 'react';
import VideoRecorder from './recorders/video';
import AudioRecorder from './recorders/audio';
import SnapshotCapture from './recorders/image';
import { CgArrowLeft, CgClose } from 'react-icons/cg';
import { Button } from '../../components/ui/button';

export interface EvidenceSelectionProps {
    onNext: () => void;
    handleShow: (value: boolean) => void;
}

export const EvidenceCard = ({ onNext, handleShow }: EvidenceSelectionProps) => {
    const [step, setStep] = useState(1);
    //   const [show, setShow] = useState(false);

    const onVideoRecorded = (blob: any) => {
        // Handle the recorded video blob
        blob = blob;
    }

    const handleShowCard = () => {
        handleShow(false)
    }

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    return (
        <div className="evidence-selection bg-white border-gray-500 rounded-3xl">
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
                            <SnapshotCapture onSnapshotTaken={onVideoRecorded} />
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <VideoRecorder onVideoRecorded={onVideoRecorded} />
                        </div>
                    )}
                    {step === 3 && (
                        <div>
                            <AudioRecorder />
                        </div>
                    )}
                </div>
                <div className="navigation">
                    {/* {step > 1 && (
                        <Button className='bg-black'onClick={() => setStep(step - 1)}>Previous</Button>
                    )} */}
                    {step < 3 && (
                        <Button className='bg-black' onClick={handleNext}>Next</Button>
                    )}
                    {step === 3 && (
                        <Button className='bg-black' onClick={onNext}>Submit Evidence</Button>
                    )}
                </div>
            </div>
        </div>
    );
};


