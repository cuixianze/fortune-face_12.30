// 세금 구간 정의
export interface TaxBracket {
  threshold: number;
  rate: number;
}

export const TAX_BRACKETS: TaxBracket[] = [
  { threshold: 2000000, rate: 0 }, // 200만원 이하: 비과세
  { threshold: 300000000, rate: 0.22 }, // 3억원 미만: 22%
  { threshold: Infinity, rate: 0.33 }, // 3억원 이상: 33%
];

export function calculateProgressiveTax(amount: number): number {
  let totalTax = 0;
  let remainingAmount = amount;

  for (let i = 0; i < TAX_BRACKETS.length; i++) {
    const currentBracket = TAX_BRACKETS[i];
    const previousThreshold = i > 0 ? TAX_BRACKETS[i - 1].threshold : 0;
    const bracketAmount = Math.min(
      remainingAmount,
      currentBracket.threshold - previousThreshold
    );

    if (bracketAmount > 0) {
      totalTax += bracketAmount * currentBracket.rate;
      remainingAmount -= bracketAmount;
    }

    if (remainingAmount <= 0) break;
  }

  return totalTax;
}

export function calculateEffectiveTaxRate(amount: number, taxAmount: number): number {
  if (amount === 0) return 0;
  return (taxAmount / amount) * 100;
}