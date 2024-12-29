import React, { useState, useMemo } from 'react';
import { PrizeInput } from './PrizeInput';
import { CalculationResult } from './CalculationResult';
import { calculatePrize } from '../../utils/prizeCalculator';
import { Calculator } from 'lucide-react';

export function PrizeCalculatorPage() {
  const [amount, setAmount] = useState('');

  const calculation = useMemo(() => {
    const numAmount = Number(amount) || 0;
    return calculatePrize(numAmount);
  }, [amount]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-br from-amber-400 to-yellow-400 p-3 rounded-[2rem] shadow-lg">
            <Calculator className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-amber-700 mb-2">
          로또 당첨금 실수령액 계산기
        </h1>
        <p className="text-amber-600">
          당첨금액을 입력하시면 세금을 제외한 실수령액을 계산해드립니다.
        </p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-100">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-amber-700 mb-4">당첨금액 입력</h2>
          <PrizeInput value={amount} onChange={setAmount} />
        </div>

        <CalculationResult calculation={calculation} />

        <div className="mt-8 text-sm text-amber-600">
          <p className="font-medium mb-2">※ 세금 계산 기준 (2023년 1월 1일부터)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>3억원 이상: 33% (소득세 30% + 주민세 3%)</li>
            <li>3억원 미만 200만원 초과: 22% (소득세 20% + 주민세 2%)</li>
            <li>200만원 이하: 비과세</li>
          </ul>
        </div>
      </div>
    </div>
  );
}