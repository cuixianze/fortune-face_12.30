import type { LotteryResult } from '../types/lottery';
import { MOCK_LOTTERY_DATA } from '../data/mockLotteryData';

// 목업 데이터를 사용하여 로또 결과를 반환합니다
export async function fetchLotteryResults(): Promise<LotteryResult[]> {
  // API 호출을 시뮬레이션하기 위한 지연
  await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_LOTTERY_DATA;
}