'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const SHOW_AFTER_PX = 320;

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    const raf = requestAnimationFrame(update);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', update);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-[5.5rem] right-5 z-[250] flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_4px_14px_rgba(15,23,42,0.12)] transition-[transform,box-shadow,opacity] hover:scale-105 hover:bg-slate-50 hover:shadow-[0_6px_20px_rgba(15,23,42,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-50 motion-safe:duration-200"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} aria-hidden />
    </button>
  );
}
