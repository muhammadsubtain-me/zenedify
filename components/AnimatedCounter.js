"use client";
import { useState, useEffect } from 'react';

const AnimatedCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 100; // adjust speed
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + increment;
      });
    }, 20); // adjust interval

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600">{Math.floor(count).toLocaleString()}</div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
