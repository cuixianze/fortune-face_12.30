import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SmileIcon } from './icons/SmileIcon';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => 
    `hover:text-white transition-colors ${isActive(path) ? 'text-white font-semibold' : 'text-white/90'}`;

  return (
    <nav className="bg-gradient-to-r from-amber-400/90 to-yellow-400/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <SmileIcon className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">부자가될관상</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 font-medium">
            <Link to="/" className={linkClass('/')}>홈</Link>
            <Link to="/lottery-results" className={linkClass('/lottery-results')}>당첨번호 조회</Link>
            <Link to="/prize-calculator" className={linkClass('/prize-calculator')}>실수령액 계산기</Link>
            <Link to="/about" className={linkClass('/about')}>서비스 소개</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col gap-2 font-medium">
              <Link 
                to="/" 
                className="hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg text-white/90"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </Link>
              <Link 
                to="/lottery-results" 
                className="hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg text-white/90"
                onClick={() => setIsMenuOpen(false)}
              >
                당첨번호 조회
              </Link>
              <Link 
                to="/prize-calculator" 
                className="hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg text-white/90"
                onClick={() => setIsMenuOpen(false)}
              >
                실수령액 계산기
              </Link>
              <Link 
                to="/about" 
                className="hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg text-white/90"
                onClick={() => setIsMenuOpen(false)}
              >
                서비스 소개
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}