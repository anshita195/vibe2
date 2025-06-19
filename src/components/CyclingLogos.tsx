import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define your text sets here - now 6 items per set
const TEXT_SETS = [
  [
    'Cursor', 'Brex', 'Remote',
    'Arc', 'Runway', 'Descript'
  ],
  [
    'Perplexity', 'Supercell', 'Monzo',
    'Raycast', 'Retool', 'Mercury'
  ],
  [
    'OpenAI', 'Scale', 'Vercel',
    'Boom', 'Cash App', 'Ramp'
  ],
];

export default function CyclingLogos() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cycleText = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSetIndex((prev) => (prev + 1) % TEXT_SETS.length);
      setIsAnimating(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(cycleText, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (!isAnimating) {
      cycleText();
    }
  };

  return (
    <div className="w-full py-12 cursor-pointer" onClick={handleClick}>
      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        Our Customers
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSetIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-rows-2 grid-cols-3 gap-y-8 gap-x-16 max-w-4xl mx-auto"
        >
          {TEXT_SETS[currentSetIndex].map((text, idx) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-xl font-medium text-gray-600 dark:text-gray-300 text-center"
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 