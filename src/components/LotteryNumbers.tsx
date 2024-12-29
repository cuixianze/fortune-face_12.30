import React from 'react';
import { Sparkles } from 'lucide-react';

interface LotteryNumbersProps {
  numbers: number[][];
  onGenerateMultiple: () => void;
  showGenerateButton: boolean;
}

export function LotteryNumbers({ numbers, onGenerateMultiple, showGenerateButton }: LotteryNumbersProps) {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
      <div className="space-y-4 w-full">
        {numbers.map((numberSet, setIndex) => (
          <div 
            key={setIndex} 
            className="flex justify-center items-center gap-2 w-full"
          >
            {numberSet.map((number, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-lg transform hover:scale-105 transition-all duration-500 relative border border-amber-200/50 group-hover:from-amber-500 group-hover:to-yellow-500">
                  {number}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {showGenerateButton && (
        <button
          onClick={onGenerateMultiple}
          className="relative group w-full sm:w-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
          <div className="relative bg-gradient-to-r from-amber-400 to-yellow-400 group-hover:from-amber-500 group-hover:to-yellow-500 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg font-medium border border-amber-200/50 text-sm">
            <Sparkles size={18} className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            5개의 행운 번호 생성하기
          </div>
        </button>
      )}
    </div>
  );
}