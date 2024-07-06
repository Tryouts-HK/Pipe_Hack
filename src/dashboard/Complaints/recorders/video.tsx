import { useState, useRef } from 'react';
import { Button } from '../../../components/ui/button';

const VideoRecorder = ({ onVideoRecorded }: { onVideoRecorded: (blob: Blob) => void }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoStreamRef = useRef<MediaStream | null>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        videoStreamRef.current = stream;
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            onVideoRecorded(event.data);
          }
        };
        mediaRecorder.onstop = () => {
          if (videoStreamRef.current) {
            videoStreamRef.current.getTracks().forEach(track => track.stop());
          }
        };
        mediaRecorder.start();
        setIsRecording(true);
      })
      .catch(error => {
        console.error('Error accessing camera or microphone:', error);
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
      <h2 className='text-center font-semibold text-2xl'>Video Recorder</h2>
      <Button className='bg-red-600' onClick={isRecording ? handleStopRecording : handleStartRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </Button>
      <div className='m-5 flex justify-center'>
                <video className='border rounded-2xl border-black' ref={videoElementRef} autoPlay style={{ display: 'block', maxWidth: '100%' }} />
            </div>
    </div>
  );
};

export default VideoRecorder;
