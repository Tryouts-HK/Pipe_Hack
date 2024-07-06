import { useRef } from 'react';
import { Button } from '../../../components/ui/button';

const SnapshotCapture = ({ onSnapshotTaken }: { onSnapshotTaken: (blob: Blob) => void }) => {
    const videoElementRef = useRef<HTMLVideoElement>(null);

    const handleTakeSnapshot = () => {
        if (videoElementRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoElementRef.current.videoWidth;
            canvas.height = videoElementRef.current.videoHeight;
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D; // Type assertion
            ctx.drawImage(videoElementRef.current, 0, 0);
            canvas.toBlob(blob => {
                if (blob) {
                    onSnapshotTaken(blob);
                }
            }, 'image/png');
        }
    };

    return (
        <div className='min-w-[500px] min-h-[300px]'>
            <h2 className='text-center font-semibold text-2xl'>Snapshot Capture</h2>
            <Button className='bg-red-600' onClick={handleTakeSnapshot}>
                Take Snapshot
            </Button>
            <div className='m-5 flex justify-center'>
                <video className='border rounded-2xl border-black' ref={videoElementRef} autoPlay style={{ display: 'block', maxWidth: '100%' }} />
            </div>
        </div>
    );
};

export default SnapshotCapture;
