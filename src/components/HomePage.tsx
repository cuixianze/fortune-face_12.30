import React, { useState, useEffect } from 'react';
import { Camera } from './Camera';
import { LotteryNumbers } from './LotteryNumbers';
import { AnalyzingScreen } from './AnalyzingScreen';
import { generateLotteryNumbers } from '../utils/lottery';
import { SmileIcon } from './icons/SmileIcon';

export function HomePage() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [numbers, setNumbers] = useState<number[][]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(20); // 15초에서 20초로 변경
  const [isRetakeDisabled, setIsRetakeDisabled] = useState(false);
  const [showGenerateButton, setShowGenerateButton] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRetakeDisabled && cooldownSeconds > 0) {
      timer = setInterval(() => {
        setCooldownSeconds(prev => prev - 1);
      }, 1000);
    }
    if (cooldownSeconds === 0) {
      setIsRetakeDisabled(false);
    }
    return () => clearInterval(timer);
  }, [cooldownSeconds, isRetakeDisabled]);

  const handlePhotoTaken = async (imageUrl: string) => {
    setPhoto(imageUrl);
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 4000)); // 2초에서 4초로 변경
    setNumbers([[...generateLotteryNumbers()]]);
    setIsAnalyzing(false);
    setIsRetakeDisabled(true);
  };

  const handleGenerateMultiple = () => {
    const additionalNumbers = Array.from({ length: 4 }, () => generateLotteryNumbers());
    setNumbers([numbers[0], ...additionalNumbers]); // 기존 번호 유지하고 4개 추가
    setShowGenerateButton(false);
  };

  const handleRetake = () => {
    setPhoto(null);
    setNumbers([]);
    setCooldownSeconds(20); // 15초에서 20초로 변경
    setShowGenerateButton(true);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] backdrop-blur-[100px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/0 via-amber-100/10 to-yellow-200/20 py-6 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4 sm:mb-8">
            <div className="bg-gradient-to-br from-amber-400 to-yellow-400 p-3 sm:p-4 rounded-[2rem] shadow-[0_0_40px_rgba(251,191,36,0.3)] relative group transition-all duration-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] hover:-translate-y-1">
              <SmileIcon className="w-16 h-16 sm:w-20 sm:h-20 text-white transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-400 mb-3 sm:mb-4 tracking-tight drop-shadow-sm">
            부자가 될 관상
          </h1>
          <p className="text-amber-700/80 text-base sm:text-lg max-w-md mx-auto px-4 drop-shadow-sm font-medium">
            행운을 위한 셀카를 찍고 당신의 행운의 번호를 확인하세요!
          </p>
        </div>

        <div className="backdrop-blur-xl bg-gradient-to-br from-white/95 to-amber-50/95 rounded-[2rem] shadow-[0_0_60px_rgba(251,191,36,0.15)] p-4 sm:p-8 md:p-10 mb-6 sm:mb-8 border border-amber-100">
          {photo ? (
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-all duration-500" />
                <img
                  src={photo}
                  alt="당신의 행운의 사진"
                  className="rounded-2xl shadow-2xl max-w-sm w-full transition-all duration-500 group-hover:scale-[1.02] relative"
                />
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_rgba(251,191,36,0.2)] pointer-events-none" />
              </div>
              {numbers.length > 0 && (
                <LotteryNumbers
                  numbers={numbers}
                  onGenerateMultiple={handleGenerateMultiple}
                  showGenerateButton={showGenerateButton}
                />
              )}
              <button
                onClick={handleRetake}
                disabled={isRetakeDisabled}
                className="text-amber-500 hover:text-amber-600 font-medium transition-colors hover:underline underline-offset-4 text-sm disabled:opacity-50 disabled:hover:no-underline disabled:cursor-not-allowed"
              >
                {isRetakeDisabled 
                  ? `${cooldownSeconds}초 후에 다시 찍기`
                  : '다시 찍기'}
              </button>
            </div>
          ) : (
            <Camera onPhotoTaken={handlePhotoTaken} />
          )}
        </div>
      </div>
      
      {isAnalyzing && <AnalyzingScreen />}
    </div>
  );
}