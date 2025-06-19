'use client';

import { useEffect, useState } from 'react';

const LoadingCounter = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [prevDigits, setPrevDigits] = useState(['0', '0', '1']);
  const [isBreaking, setIsBreaking] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = duration / 99; // 99 steps (1 to 100)

    let current = 1;
    setCount(1);
    setPrevDigits('001'.split(''));

    const timer = setInterval(() => {
      setPrevDigits(current.toString().padStart(3, '0').split(''));
      current++;
      setCount(current);
      if (current > 100) {
        clearInterval(timer);
        // Start breaking animation
        setIsBreaking(true);
        // Wait for animation to complete before hiding
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 1500); // Animation duration
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Split number into digits
  const currentDigits = count.toString().padStart(3, '0').split('');
  const changes = currentDigits.map((digit, index) => digit !== prevDigits[index]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-colors">
      <div className="w-full max-w-md space-y-8">
        {/* Progress bar container */}
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          {/* Left part */}
          <div 
            className={`absolute left-0 top-0 h-full bg-rose-800 transition-all duration-150 ease-out
              ${isBreaking ? 'transform -rotate-12 translate-y-4 translate-x-4 scale-125 opacity-0' : ''}`}
            style={{ 
              width: isBreaking ? '50%' : `${count}%`,
              transitionDuration: isBreaking ? '800ms' : '150ms',
              transformOrigin: 'right'
            }}
          />
          {/* Right part */}
          <div 
            className={`absolute right-0 top-0 h-full bg-rose-800 transition-all duration-150 ease-out
              ${isBreaking ? 'transform rotate-12 translate-y-4 -translate-x-4 scale-125 opacity-0' : ''}`}
            style={{ 
              width: isBreaking ? '50%' : '0%',
              transitionDuration: isBreaking ? '800ms' : '150ms',
              transformOrigin: 'left',
              left: isBreaking ? '50%' : `${count}%`
            }}
          />
        </div>

        {/* Counter */}
        <div className={`flex justify-center transition-transform duration-1000 ${isBreaking ? 'scale-150 opacity-0' : ''}`}>
          <div className="flex h-32 text-[10rem] font-light tracking-tight overflow-hidden">
            {currentDigits.map((digit, index) => {
              const hasChanged = changes[index];
              return (
                <div key={index} className="relative w-24 overflow-hidden">
                  {/* Previous digit slides up and out */}
                  <div
                    className={`absolute w-full transition-all duration-500 ${
                      hasChanged ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                    }`}
                  >
                    <div className="flex h-32 items-center justify-center text-gray-900">
                      {prevDigits[index]}
                    </div>
                  </div>
                  {/* Current digit slides up from below */}
                  <div
                    className={`absolute w-full transition-all duration-500 ${
                      hasChanged ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                  >
                    <div className="flex h-32 items-center justify-center text-gray-900">
                      {digit}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCounter; 