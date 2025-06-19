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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full py-16 flex justify-center"
    >
      <div
        onClick={handleClick}
        className="w-full max-w-4xl bg-white/80 rounded-3xl shadow-xl px-8 py-12 cursor-pointer border border-gray-100 backdrop-blur-md transition-all duration-300"
      >
        <h2 className="text-center text-3xl font-extrabold mb-10 text-green-700 tracking-tight drop-shadow-lg">
          Our Customers
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSetIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-rows-2 grid-cols-3 gap-y-8 gap-x-16"
          >
            {TEXT_SETS[currentSetIndex].map((text, idx) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-2xl font-semibold text-gray-700 text-center hover:text-green-600 transition-colors duration-200 cursor-pointer"
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 