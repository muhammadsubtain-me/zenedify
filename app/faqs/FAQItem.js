'use client';

import { useState } from 'react';

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#e2e8f0] rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left py-5 px-6 flex justify-between items-center border-none cursor-pointer transition-colors duration-200 ${open ? 'bg-[#eff6ff]' : 'bg-white'}`}
      >
        <span className="font-bold text-[16px] text-[#0f172a] pr-4">{q}</span>
        <span className={`text-[22px] text-[#2563eb] flex-shrink-0 transition-transform duration-200 inline-block ${open ? 'rotate-45' : 'rotate-0'}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-[#64748b] leading-[1.85] text-[15px]">{a}</div>
      )}
    </div>
  );
}
