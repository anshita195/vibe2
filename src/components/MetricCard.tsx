'use client';

import { MetricData } from '@/types/metrics';
import { FC } from 'react';
import DownloadButton from './DownloadButton';

interface MetricCardProps {
  title: string;
  data: MetricData;
}

const MetricCard: FC<MetricCardProps> = ({ title, data }) => {
  const maxValue = Math.max(...data.yearlyData.map(d => d.value));

  const handleDownload = () => {
    // Implement download functionality here
    console.log('Downloading data for:', title);
  };

  return (
    <div className="flex flex-col space-y-4 transition-colors">
      <div>
        <h2 className="text-lg font-normal text-gray-700 dark:text-gray-100 transition-colors">{title}</h2>
        <div className="flex items-baseline space-x-2 mt-2">
          <span className="text-4xl font-light text-gray-900 dark:text-white transition-colors">
            {data.currentValue.toLocaleString()}
          </span>
          <span className="text-xl text-gray-500 dark:text-gray-300 transition-colors">{data.unit}</span>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-sm text-gray-500 dark:text-gray-300 transition-colors">from {data.baseYear}</span>
          <span className={`text-sm transition-colors ${
            data.changePercentage >= 0 
              ? 'text-red-600 dark:text-red-400' 
              : 'text-green-600 dark:text-green-400'
          }`}>
            {data.changePercentage >= 0 ? '↑' : '↓'} {Math.abs(data.changePercentage)}%
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {data.yearlyData.map((yearData) => (
          <div key={yearData.year} className="flex items-center space-x-4">
            <span className="w-12 text-sm text-gray-600 dark:text-gray-200 transition-colors">{yearData.year}</span>
            <div className="flex-1">
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full transition-colors">
                <div
                  className="h-full bg-rose-300 dark:bg-rose-500 rounded-full transition-colors"
                  style={{
                    width: `${(yearData.value / maxValue) * 100}%`,
                  }}
                />
              </div>
            </div>
            <span className="w-24 text-sm text-gray-600 dark:text-gray-200 text-right transition-colors">
              {yearData.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <DownloadButton onClick={handleDownload} />
      </div>
    </div>
  );
};

export default MetricCard; 