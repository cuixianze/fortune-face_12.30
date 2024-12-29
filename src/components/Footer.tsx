import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-400/90 to-yellow-400/90 backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">부자가 될 관상</h3>
            <p className="text-white/80 text-sm">
              AI 기술을 활용한 관상 분석으로 행운의 로또 번호를 추천해드립니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">약관 및 정책</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white text-sm transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">
                  개인정보 처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} 부자가 될 관상. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}