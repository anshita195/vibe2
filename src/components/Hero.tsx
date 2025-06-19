import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  // Track scroll progress for the hero section (0 to 1)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Text moves up and fades out quickly
  const textY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-120%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Background moves up more slowly (parallax)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);

  return (
    <div
      ref={ref}
      className="relative bg-white dark:bg-gray-800 overflow-hidden h-screen min-h-[500px] flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 z-0"
      />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Sustainable Solutions for</span>
                <span className="block text-green-600 dark:text-green-400">A Better Tomorrow</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Track and reduce your carbon footprint with our innovative eco-friendly solutions. Join us in creating a sustainable future for generations to come.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 dark:text-green-300 dark:bg-green-900 dark:hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </motion.div>
      </div>
    </div>
  );
} 