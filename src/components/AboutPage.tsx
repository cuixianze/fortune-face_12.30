import React from 'react';
import { SmileIcon } from './icons/SmileIcon';

export function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-amber-400 to-yellow-400 p-3 rounded-[2rem] shadow-lg">
              <SmileIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-amber-700 mb-2">서비스 소개</h1>
          <p className="text-amber-600">부자가될관상 서비스를 소개합니다</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8">
          <div className="prose prose-amber max-w-none">
            <h2 className="text-2xl font-bold text-amber-700 mb-4">서비스 설명</h2>
            <p className="text-amber-700 mb-6">
              부자가될관상은 AI 기술을 활용하여 사용자의 얼굴 사진을 분석하고, 
              그에 맞는 행운의 로또 번호를 추천해주는 서비스입니다.
            </p>

            <h3 className="text-xl font-bold text-amber-700 mb-3">주요 기능</h3>
            <ul className="list-disc list-inside space-y-2 text-amber-700 mb-6">
              <li>얼굴 사진 촬영 및 업로드</li>
              <li>AI 기반 관상 분석</li>
              <li>맞춤형 로또 번호 추천</li>
              <li>지난 회차 당첨번호 조회</li>
            </ul>

            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-amber-700 text-sm">
                ※ 본 서비스는 재미를 위한 것이며, 실제 당첨을 보장하지 않습니다.
                로또는 적절한 자기 통제 하에 즐겁게 이용해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}