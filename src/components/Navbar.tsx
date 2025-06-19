'use client';
import Link from 'next/link';
import { useTheme } from '@/app/providers';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-md backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-400">
              EcoMetrics
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-gray-600 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-200">
                Home
              </Link>
              <Link href="/catalog" className="text-gray-600 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-200">
                Our Products
              </Link>
              <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {theme === 'dark' ? (
              // Moon icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.664-7.626 6.398-9.093a.75.75 0 01.908.37.75.75 0 01-.082.976A7.501 7.501 0 0012 19.5a7.48 7.48 0 006.497-3.524.75.75 0 01.976-.082.75.75 0 01.37.908z" />
              </svg>
            ) : (
              // Sun icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m8.485-8.485l-1.06 1.06M4.515 4.515l1.06 1.06M21 12h-1.5M4.5 12H3m15.485 4.485l-1.06-1.06M4.515 19.485l1.06-1.06M16.242 7.757a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
} 