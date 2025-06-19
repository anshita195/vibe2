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
    <motion.div
      ref={ref}
      className="relative overflow-hidden h-screen min-h-[500px] flex items-center justify-center fade-in"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Parallax background + animated gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 via-green-50/60 to-green-200/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-move transition-colors duration-500" />
      </motion.div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block">Sustainable Solutions for</span>
                <span className="block text-green-600">A Better Tomorrow</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Track and reduce your carbon footprint with our innovative eco-friendly solutions. Join us in creating a sustainable future for generations to come.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 dark:text-green-200 bg-green-100 dark:bg-gray-800 hover:bg-green-200 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Add this to your globals.css for animated gradient
// .animate-gradient-move {
//   background-size: 200% 200%;
//   animation: gradientMove 8s ease-in-out infinite;
// }
// @keyframes gradientMove {
//   0%, 100% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
// } 