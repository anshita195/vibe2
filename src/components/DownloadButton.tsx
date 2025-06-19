'use client';

import { FC } from 'react';

interface DownloadButtonProps {
  onClick: () => void;
  label?: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({ 
  onClick, 
  label = "Download the data" 
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-600 text-sm hover:text-gray-800 transition-colors"
    >
      {label}
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
};

export default DownloadButton; 