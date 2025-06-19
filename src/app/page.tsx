'use client';

import { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import EmissionsChart from '@/components/EmissionsChart';
import LoadingCounter from '@/components/LoadingCounter';
import CyclingLogos from '@/components/CyclingLogos';
import Hero from '@/components/Hero';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingCounter onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-4">
            <Dashboard />
            <EmissionsChart />
            <CyclingLogos />
          </div>
        </div>
      </div>
    </>
  );
}
