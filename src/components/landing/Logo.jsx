import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Avito-inspired logo with orange gradient */}
      <div className="relative">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="18" cy="18" r="18" fill="url(#logoGradient)" />
          
          {/* Stylized "A" shape */}
          <path
            d="M18 8L26 28H22.5L20.5 23H15.5L13.5 28H10L18 8Z"
            fill="white"
          />
          <path
            d="M16.5 20H19.5L18 16L16.5 20Z"
            fill="url(#logoGradient)"
          />
          
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6B00" />
              <stop offset="1" stopColor="#FF4500" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Avito
        </span>
        <span className="text-[10px] text-gray-500 uppercase tracking-wider">
          Pro Agency
        </span>
      </div>
    </div>
  );
}