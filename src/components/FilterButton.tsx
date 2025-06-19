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
          ? 'bg-rose-800 dark:bg-rose-700 text-white border-rose-800 dark:border-rose-700' 
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-rose-800 dark:hover:border-rose-700 hover:text-rose-800 dark:hover:text-rose-400'
        }`}
    >
      {label}
    </button>
  );
};

export default FilterButton; 