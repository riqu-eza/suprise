"use client";
import { useState, useEffect } from 'react';

export default function YogurtSurprise() {
  const [pourHeight, setPourHeight] = useState(0);
  const [showSpoon, setShowSpoon] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  // Animate yogurt pouring
  useEffect(() => {
    const timer = setTimeout(() => {
      setPourHeight(80); // Fill glass to 80%
      setTimeout(() => setShowSpoon(true), 1500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Generate probiotic bubbles
  useEffect(() => {
    if (pourHeight > 0) {
      const bubbleInterval = setInterval(() => {
        setBubbles(prev => [
          ...prev.slice(-15), // Keep max 15 bubbles
          {
            id: Date.now(),
            left: Math.random() * 80 + 10,
            size: Math.random() * 10 + 5,
            delay: Math.random() * 2
          }
        ]);
      }, 300);

      return () => clearInterval(bubbleInterval);
    }
  }, [pourHeight]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Your Probiotic Yogurt Surprise!</h1>
      
      {/* Glass Container */}
      <div className="relative w-48 h-64 mb-12">
        {/* Glass outline */}
        <div className="absolute inset-0 border-4 border-purple-200 rounded-lg rounded-b-none">
          {/* Glass reflection */}
          <div className="absolute right-2 top-4 w-8 h-16 bg-white bg-opacity-30 rounded-full blur-sm"></div>
        </div>
        
        {/* Yogurt content */}
        <div 
          className="absolute bottom-0 left-1 right-1 bg-white bg-opacity-70 rounded-t-lg transition-all duration-2000 ease-out"
          style={{ height: `${pourHeight}%` }}
        >
          {/* Creamy yogurt texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-100 rounded-t-lg opacity-90">
            {/* Yogurt swirls */}
            <div className="absolute top-4 left-6 w-16 h-16 bg-white bg-opacity-50 rounded-full"></div>
            <div className="absolute top-10 right-8 w-12 h-12 bg-white bg-opacity-40 rounded-full"></div>
            
            {/* Probiotic bubbles */}
            {bubbles.map(bubble => (
              <div
                key={bubble.id}
                className="absolute bg-white rounded-full animate-float opacity-80"
                style={{
                  left: `${bubble.left}%`,
                  bottom: '10%',
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  animationDelay: `${bubble.delay}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Spoon */}
        {showSpoon && (
          <div className="absolute -right-6 top-16 z-10 animate-spoonDrop">
            <div className="w-16 h-4 bg-gray-200 rounded-full relative">
              <div className="absolute -top-3 -left-2 w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
      
      <p className="text-purple-600 text-lg max-w-md text-center">
        Enjoy your creamy probiotic yogurt! Great for gut health and delicious too!
      </p>
    </div>
  );
}