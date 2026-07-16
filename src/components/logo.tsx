import React from 'react';

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
      {/* Orange Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-orange-600 to-amber-500 blur-[6px] opacity-75 animate-pulse" />
      
      {/* Main Icon Box */}
      <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-orange-600 to-orange-500 border border-orange-400/40 flex items-center justify-center shadow-[0_4px_20px_rgba(234,88,12,0.4)]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-4/7 h-4/7 text-white"
        >
          {/* A modern play button with a stylized letter N layout */}
          <path d="M6 4l12 8-12 8V4z" fill="currentColor" opacity="0.15" />
          <path d="M6 4l5.5 3.66L6 11.33V4z" />
          <path d="M11.5 7.66L17 11.33l-5.5 3.67V7.66z" />
          <path d="M6 11.33l5.5 3.67L6 18.67v-7.34z" />
          <path d="M11.5 15l5.5 3.67-5.5-7.34V15z" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}
