import React from 'react';
import { Loader2 } from 'lucide-react';
import { SmileIcon } from './icons/SmileIcon';

export function AnalyzingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-xl flex items-center justify-center z-50">
      <div className="text-center px-4">
        <div className="bg-gradient-to-br from-amber-400/5 to-yellow-400/5 p-6 sm:p-8 rounded-[2rem] backdrop-blur-sm shadow-[0_0_60px_rgba(251,191,36,0.1)]">
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-2xl opacity-30 animate-pulse" />
            <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto animate-spin text-amber-400 relative" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <SmileIcon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-400">
            관상 분석중...
          </h2>
          <p className="text-base sm:text-lg text-amber-500 font-medium">
            행운의 번호를 생성하고 있습니다
          </p>
        </div>
      </div>
    </div>
  );
}