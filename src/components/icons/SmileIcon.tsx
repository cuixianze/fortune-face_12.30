import React from 'react';

export function SmileIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Yellow circle background */}
      <circle cx="12" cy="12" r="10" fill="#FCD34D" />
      
      {/* Black eyes */}
      <circle cx="8" cy="9" r="1.5" className="fill-current" />
      <circle cx="16" cy="9" r="1.5" className="fill-current" />
      
      {/* Black smile */}
      <path
        d="M7.5 13.5C8.5 15.5 10 16.5 12 16.5s3.5-1 4.5-3"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}