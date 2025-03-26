"use client";
import React, { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-24 h-24 rounded-full border-4 border-green-700 border-t-green-500 animate-spin"></div>

        {/* Inner circle */}
        <div className="absolute top-2 left-2 w-20 h-20 rounded-full border-4 border-green-800 border-b-green-600 animate-spin"></div>

        {/* Core circle */}
        <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-900 animate-pulse"></div>

        {/* Text below */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-green-400 font-bold text-lg font-mono">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
