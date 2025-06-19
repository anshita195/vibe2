'use client';

import { useEffect, useState } from 'react';

const LoadingCounter = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [prevDigits, setPrevDigits] = useState(['0', '0', '1']);

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = duration / 99; // 99 steps (1 to 100)

    let current = 1;
    setCount(1);
    setPrevDigits('001'.split(''));

    const timer = setInterval(() => {
      setPrevDigits(current.toString().padStart(3, '0').split(''));
      if (current < 100) {
        current++;
        setCount(current);
      } else {
        clearInterval(timer);
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
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Progress bar centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-10 flex items-center">
        <div className="w-full h-10 bg-[#333] flex items-center">
          <div
            className="h-10 bg-white transition-all duration-150"
            style={{ width: `${Math.min(count, 100) * 3.2}px` }}
          />
        </div>
      </div>
      {/* Odometer counter in bottom left */}
      <div className="absolute left-4 bottom-2 flex text-white text-[7vw] font-light tracking-tight h-[10vw] select-none">
        {currentDigits.map((digit, index) => {
          const hasChanged = changes[index];
          return (
            <div key={index} className="relative w-[7vw] overflow-hidden">
              {/* Previous digit slides up and out */}
              <div
                className={`absolute w-full transition-all duration-500 ${
                  hasChanged ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <div className="flex h-[10vw] items-end justify-center">{prevDigits[index]}</div>
              </div>
              {/* Current digit slides up from below */}
              <div
                className={`absolute w-full transition-all duration-500 ${
                  hasChanged ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                <div className="flex h-[10vw] items-end justify-center">{digit}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoadingCounter; 