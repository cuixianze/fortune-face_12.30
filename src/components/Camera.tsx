import React, { useRef, useEffect } from 'react';
import { Camera as CameraIcon, Upload } from 'lucide-react';
import { useCamera } from '../hooks/useCamera';
import { capturePhoto, handleFileUpload } from '../utils/imageUtils';
import { FaceGuide } from './FaceGuide';

interface CameraProps {
  onPhotoTaken: (imageUrl: string) => void;
}

export function Camera({ onPhotoTaken }: CameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { stream, error, startCamera, stopCamera } = useCamera();

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleTakePhoto = () => {
    if (videoRef.current) {
      try {
        const imageUrl = capturePhoto(videoRef.current);
        onPhotoTaken(imageUrl);
        stopCamera();
      } catch (err) {
        console.error('Failed to capture photo:', err);
      }
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await handleFileUpload(file);
        onPhotoTaken(imageUrl);
      } catch (err) {
        console.error('Failed to upload file:', err);
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-4 sm:gap-6">
      {stream ? (
        <div className="relative flex flex-col items-center gap-4 sm:gap-6 w-full">
          <div className="relative w-full max-w-md aspect-[4/3] bg-black rounded-2xl overflow-hidden shadow-2xl border border-amber-200/30 group">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <FaceGuide />
          </div>
          <button
            onClick={handleTakePhoto}
            className="relative group w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-gradient-to-r from-amber-400 to-yellow-400 group-hover:from-amber-500 group-hover:to-yellow-500 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg font-medium border border-amber-200/50">
              <CameraIcon size={24} className="transition-transform group-hover:scale-110" />
              사진 찍기
            </div>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-8 bg-gradient-to-br from-white/90 to-amber-50/90 rounded-2xl w-full max-w-md border border-amber-200/50">
          <button
            onClick={startCamera}
            className="relative group w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-gradient-to-r from-amber-400 to-yellow-400 group-hover:from-amber-500 group-hover:to-yellow-500 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg font-medium border border-amber-200/50">
              <CameraIcon size={24} className="transition-transform group-hover:scale-110" />
              카메라 시작
            </div>
          </button>

          <div className="flex flex-col items-center gap-4 w-full">
            {error && (
              <div className="text-red-500 bg-red-900/10 p-4 rounded-xl text-center mb-4 shadow-lg backdrop-blur-sm border border-red-500/20 w-full">
                <p className="font-medium">카메라를 사용할 수 없습니다</p>
                <p className="text-sm mt-1 text-red-400">{error}</p>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
              <div className="relative bg-gradient-to-r from-yellow-400 to-amber-400 group-hover:from-yellow-500 group-hover:to-amber-500 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg font-medium border border-amber-200/50">
                <Upload size={24} className="transition-transform group-hover:scale-110" />
                사진 업로드
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}