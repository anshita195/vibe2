'use client';

import { FC } from 'react';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm transition-all
        ${isActive 
          ? 'bg-rose-800 text-white border-rose-800' 
          : 'bg-white text-gray-700 border-gray-300 hover:border-rose-800 hover:text-rose-800'
        }`}
    >
      {label}
    </button>
  );
};

export default FilterButton; 