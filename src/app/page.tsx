'use client';

import { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import EmissionsChart from '@/components/EmissionsChart';
import LoadingCounter from '@/components/LoadingCounter';
import CyclingLogos from '@/components/CyclingLogos';
import Hero from '@/components/Hero';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      {/* Simple BG toggle button */}
      <button
        onClick={() => setIsDark((d) => !d)}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          padding: '10px 20px',
          background: '#fff',
          color: '#111',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        Toggle BG
      </button>
      {isLoading && <LoadingCounter onComplete={() => setIsLoading(false)} />}
      <div
        style={{
          minHeight: '100vh',
          background: isDark ? '#111' : '#fff',
          transition: 'background 0.3s'
        }}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
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
