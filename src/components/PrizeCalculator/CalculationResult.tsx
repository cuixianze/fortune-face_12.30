import React from 'react';
import type { PrizeCalculation } from '../../utils/prizeCalculator';

interface Props {
  calculation: PrizeCalculation;
}

export function CalculationResult({ calculation }: Props) {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100">
        <h3 className="text-lg font-semibold text-amber-700 mb-4">실수령액</h3>
        <p className="text-3xl font-bold text-amber-700">
          {calculation.finalAmount.toLocaleString()}원
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
          <p className="text-sm text-amber-600 mb-1">실효세율</p>
          <p className="text-xl font-semibold text-amber-700">{calculation.taxRate}%</p>
        </div>
        <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
          <p className="text-sm text-amber-600 mb-1">총 세금</p>
          <p className="text-xl font-semibold text-amber-700">
            {calculation.taxAmount.toLocaleString()}원
          </p>
        </div>
      </div>

      <div className="text-sm text-amber-600 bg-amber-50/50 rounded-xl p-4 border border-amber-100">
        <p className="font-medium mb-2">※ 누진세율 적용 기준</p>
        <ul className="list-disc list-inside space-y-1">
          <li>200만원 이하: 비과세</li>
          <li>200만원 초과 3억원 미만: 22% (소득세 20% + 주민세 2%)</li>
          <li>3억원 이상: 33% (소득세 30% + 주민세 3%)</li>
        </ul>
      </div>
    </div>
  );
}