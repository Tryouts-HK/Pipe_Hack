import { useState, useRef } from 'react';
import { Button } from '../../../components/ui/button';

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audio, setAudio] = useState<File | null>(null); // Updated to specify File or null
    const mediaRecorderRef = useRef<MediaRecorder | null>(null); // Updated to specify MediaRecorder or null
    const audioChunksRef = useRef<Blob[]>([]);

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
                    const recordedAudio = new File([audioBlob], 'recorded-audio.wav', { type: 'audio/wav' });
                    setAudio(recordedAudio);
                    audioChunksRef.current = [];
                };
                mediaRecorder.start();
                setIsRecording(true);
            })
            .catch(error => {
                console.error('Error accessing microphone:', error);
                // Handle exceptions gracefully (e.g., show error message)
            });
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    return (
        <div className='min-w-[500px] min-h-[300px]'>
            <h2 className='text-center font-semibold text-2xl'>Audio Recorder</h2>
            <Button className='bg-red-600' onClick={isRecording ? handleStopRecording : handleStartRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
            <div className='m-5 flex justify-center'>
                {audio && (
                    <audio className='border rounded-2xl justify-center border-black' controls>
                        <source src={URL.createObjectURL(audio)} type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                )}
            </div>
        </div>
    );
};

export default AudioRecorder;
