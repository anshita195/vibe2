"use client";
import { useState } from 'react';

// Import images from public folder (you'll need to save them as below)
// For now, use placeholder paths. Replace with your actual image filenames.
const images = [
  '/catalog1-default.png', // left default
  '/catalog2-default.png', // right default
  '/catalog1-alt.png',     // left alternate
  '/catalog2-alt.png',     // right alternate
];

export default function CatalogPage() {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold mb-8 text-green-700 dark:text-green-400">Product Catalogue</h1>
      <div className="flex flex-row gap-8">
        {/* Left Image (hover target) */}
        <img
          src={hoverLeft ? images[2] : images[0]}
          alt="Product 1"
          className="w-72 h-72 object-contain rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoverLeft(true)}
          onMouseLeave={() => setHoverLeft(false)}
        />
        {/* Right Image (hover target) */}
        <img
          src={hoverRight ? images[3] : images[1]}
          alt="Product 2"
          className="w-72 h-72 object-contain rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoverRight(true)}
          onMouseLeave={() => setHoverRight(false)}
        />
      </div>
      <p className="mt-8 text-gray-500 dark:text-gray-300">Hover over each image to preview more!</p>
    </div>
  );
} 