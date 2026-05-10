'use client';

import { useState, useEffect } from 'react';

export default function AnimatedCounter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = Math.ceil(target / 80);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev + step >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + step;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="counter-num">{count.toLocaleString()}+</div>
      <div className="text-[#64748b] font-semibold text-[15px]">{label}</div>
    </div>
  );
}
