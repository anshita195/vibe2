'use client';

import { useState } from 'react';
import { BuildingType, EmissionDataPoint, Status } from '@/types/emissions';
import FilterButton from './FilterButton';
import DownloadButton from './DownloadButton';

const emissionsData: EmissionDataPoint[] = [
  { id: '1', value: 549, buildingType: 'Refurbishment', status: 'Complete' },
  { id: '2', value: 278, buildingType: 'Refurbishment', status: 'Estimate' },
  { id: '3', value: 875, buildingType: 'New build', status: 'Complete' },
  { id: '4', value: 617, buildingType: 'New build', status: 'Complete' },
  { id: '5', value: 506, buildingType: 'New build', status: 'Complete' },
  { id: '6', value: 36, buildingType: 'Refurbishment', status: 'Complete' },
  { id: '7', value: 185, buildingType: 'New build', status: 'Complete' },
  { id: '8', value: 191, buildingType: 'Refurbishment', status: 'Estimate' },
  { id: '9', value: 122, buildingType: 'New build', status: 'Complete' },
  { id: '10', value: 881, buildingType: 'New build', status: 'Complete' },
  { id: '11', value: 539, buildingType: 'Refurbishment', status: 'Complete' },
  { id: '12', value: 269, buildingType: 'Refurbishment', status: 'Estimate' },
  { id: '13', value: 29, buildingType: 'New build', status: 'Complete' },
  { id: '14', value: 82, buildingType: 'New build', status: 'Estimate' },
  { id: '15', value: 44, buildingType: 'Refurbishment', status: 'Complete' },
  { id: '16', value: 106, buildingType: 'New build', status: 'Complete' },
  { id: '17', value: 607, buildingType: 'New build', status: 'Complete' },
  { id: '18', value: 528, buildingType: 'Refurbishment', status: 'Complete' },
];

const targetLines = [
  { year: 2030, value: 500, label: '500 kgCO₂e/m² - Embodied Carbon Target 2030' },
  { year: 2025, value: 600, label: '600 kgCO₂e/m² - Embodied Carbon Target 2025' },
];

const EmissionsChart = () => {
  const [selectedType, setSelectedType] = useState<BuildingType | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<Status>('Complete');

  const filteredData = emissionsData.filter(item => {
    if (selectedType !== 'All' && item.buildingType !== selectedType) return false;
    if (item.status !== selectedStatus) return false;
    return true;
  });

  const maxValue = Math.max(...emissionsData.map(d => d.value), 1200);

  const handleDownload = () => {
    console.log('Downloading emissions data');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm transition-colors">
      <div className="p-8 space-y-6">
        <h1 className="text-4xl font-light text-gray-800 transition-colors">
          EMBODIED<br />CARBON<br />EMISSIONS
        </h1>

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-gray-600 transition-colors">Type</span>
            <div className="flex space-x-2">
              <FilterButton
                label="Refurbishment"
                isActive={selectedType === 'Refurbishment'}
                onClick={() => setSelectedType('Refurbishment')}
              />
              <FilterButton
                label="New build"
                isActive={selectedType === 'New build'}
                onClick={() => setSelectedType('New build')}
              />
              <FilterButton
                label="All"
                isActive={selectedType === 'All'}
                onClick={() => setSelectedType('All')}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-sm text-gray-600 transition-colors">Status</span>
            <div className="flex space-x-2">
              <FilterButton
                label="Complete"
                isActive={selectedStatus === 'Complete'}
                onClick={() => setSelectedStatus('Complete')}
              />
              <FilterButton
                label="Estimate"
                isActive={selectedStatus === 'Estimate'}
                onClick={() => setSelectedStatus('Estimate')}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-600 transition-colors">Key</div>
          <div className="text-sm text-gray-700 transition-colors">
            Intensity measured by kgCO₂e/m²
          </div>
        </div>

        <div className="relative h-96">
          {/* Target Lines */}
          {targetLines.map((target) => (
            <div
              key={target.year}
              className="absolute w-full border-t border-gray-300 transition-colors"
              style={{
                top: `${(1 - target.value / maxValue) * 100}%`,
              }}
            >
              <div className="relative">
                <span className="absolute -top-5 text-xs text-gray-500 transition-colors">
                  {target.label}
                </span>
              </div>
            </div>
          ))}

          {/* Bars */}
          <div className="absolute bottom-0 w-full flex items-end space-x-2">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex-1 flex flex-col items-center"
              >
                <div className="w-full">
                  <div
                    className={`w-full transition-colors ${
                      item.buildingType === 'Refurbishment'
                        ? 'bg-rose-300'
                        : 'bg-rose-800'
                    }`}
                    style={{
                      height: `${(item.value / maxValue) * 384}px`,
                    }}
                  />
                </div>
                <span className="text-xs text-gray-600 mt-1 rotate-45 origin-left transition-colors">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <DownloadButton onClick={handleDownload} />
        </div>
      </div>
    </div>
  );
};

export default EmissionsChart; 