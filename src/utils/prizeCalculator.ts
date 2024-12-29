import { calculateProgressiveTax, calculateEffectiveTaxRate } from './taxCalculator';

export interface PrizeCalculation {
  originalPrize: number;
  taxRate: number;
  taxAmount: number;
  finalAmount: number;
}

export function calculatePrize(amount: number): PrizeCalculation {
  const taxAmount = calculateProgressiveTax(amount);
  const effectiveTaxRate = calculateEffectiveTaxRate(amount, taxAmount);

  return {
    originalPrize: amount,
    taxRate: Number(effectiveTaxRate.toFixed(2)),
    taxAmount: Math.round(taxAmount),
    finalAmount: amount - Math.round(taxAmount)
  };
}