import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function PrizeInput({ value, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    onChange(newValue);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="당첨금액을 입력하세요"
        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-lg"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-600 font-medium">
        원
      </span>
    </div>
  );
}