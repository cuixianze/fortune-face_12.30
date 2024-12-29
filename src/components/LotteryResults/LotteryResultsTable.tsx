import React from 'react';
import type { LotteryResult } from '../../types/lottery';

interface Props {
  results: LotteryResult[];
}

export function LotteryResultsTable({ results }: Props) {
  return (
    <div className="space-y-4">
      {results.map((result) => (
        <div
          key={result.round}
          className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-amber-100"
        >
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-lg font-bold text-amber-700">{result.round}회</span>
              <span className="text-sm text-amber-600 ml-2">({result.drawDate})</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {result.numbers.map((num, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white text-sm font-semibold"
              >
                {num}
              </div>
            ))}
            <div className="w-8 flex items-center justify-center">
              <span className="text-amber-400">+</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-sm font-semibold">
              {result.bonus}
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-amber-600">1등 당첨금</div>
            <div className="text-base font-semibold text-amber-700">
              {result.firstPrize.toLocaleString()}원
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}