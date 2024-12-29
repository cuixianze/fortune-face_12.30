import React from 'react';

export function FaceGuide() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-48 h-48 sm:w-72 sm:h-72 border-4 border-amber-400/30 rounded-full flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-amber-400/30 animate-pulse"></div>
        <div className="text-white text-center bg-black/30 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm">
          <p className="text-xs sm:text-sm font-medium">얼굴을 여기에 맞춰주세요</p>
          <p className="text-xs mt-1 text-amber-200">얼굴이 잘 보이도록 해주세요</p>
        </div>
      </div>
    </div>
  );
}