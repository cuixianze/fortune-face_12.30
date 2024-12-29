import React from 'react';

export function CoinFaceIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Face circle */}
        <circle cx="12" cy="12" r="11" className="fill-current" />
        
        {/* Inner face */}
        <circle cx="12" cy="12" r="9" className="fill-amber-400" />
        
        {/* Left coin eye */}
        <circle cx="8" cy="10" r="3" className="fill-current" />
        <circle cx="8" cy="10" r="2.3" className="fill-amber-400" />
        <path
          d="M7.2 9h1.6M8 8.2v3.6M7.2 10.2h1.6"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        
        {/* Right coin eye */}
        <circle cx="16" cy="10" r="3" className="fill-current" />
        <circle cx="16" cy="10" r="2.3" className="fill-amber-400" />
        <path
          d="M15.2 9h1.6M16 8.2v3.6M15.2 10.2h1.6"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        
        {/* Smile */}
        <path
          d="M8 14.5c.8 1.5 2.4 2 4 2s3.2-.5 4-2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        
        {/* Coin ridges */}
        {Array.from({ length: 32 }).map((_, i) => (
          <path
            key={i}
            d={`M ${12 + 11 * Math.cos(i * Math.PI / 16)} ${12 + 11 * Math.sin(i * Math.PI / 16)} L ${12 + 10 * Math.cos(i * Math.PI / 16)} ${12 + 10 * Math.sin(i * Math.PI / 16)}`}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
        ))}
      </svg>
    </div>
  );
}