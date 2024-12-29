import React, { useState, useEffect } from 'react';
import { LotteryResultsTable } from './LotteryResultsTable';
import { LatestDraw } from './LatestDraw';
import { fetchLotteryResults } from '../../utils/lotteryApi';
import type { LotteryResult } from '../../types/lottery';

export function LotteryResultsPage() {
  const [results, setResults] = useState<LotteryResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchLotteryResults();
      setResults(data);
    } catch (err) {
      setError('당첨번호를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-700 mb-2">로또 당첨번호 조회</h1>
        <p className="text-amber-600">지난 회차의 당첨번호를 확인해보세요.</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-400 border-t-transparent"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
          {error}
        </div>
      ) : (
        <>
          {results.length > 0 && <LatestDraw result={results[0]} />}
          <LotteryResultsTable results={results} />
        </>
      )}
    </div>
  );
}