'use client';

import { useState } from 'react';

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: open ? '#eff6ff' : 'white', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: '#0f172a', paddingRight: 16 }}>{q}</span>
        <span style={{ fontSize: 22, color: '#2563eb', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px', color: '#64748b', lineHeight: 1.85, fontSize: 15 }}>{a}</div>
      )}
    </div>
  );
}
