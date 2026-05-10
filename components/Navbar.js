'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const engineeringLinks = [
  { to: '/mechanical-engineering', label: '⚙️  Mechanical Engineering' },
  { to: '/electrical-engineering', label: '⚡  Electrical Engineering' },
  { to: '/chemical-engineering',   label: '🧪  Chemical Engineering'   },
  { to: '/computer-science',       label: '💻  Computer Science'       },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { to: '/samples',   label: 'Samples'   },
    { to: '/about',     label: 'About'     },
    { to: '/contact',   label: 'Contact'   },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/faqs',      label: 'FAQs'      },
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className="shadow-[0_2px_16px_rgba(0,0,0,0.07)] bg-white sticky top-0 z-[200]">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[70px]">

        {/* Brand */}
        <Link href="/" className="no-underline flex items-center gap-2.5">
          <div>
            <div className="font-extrabold text-[22px] text-[#0f172a] leading-none">ZenEdify</div>
            <div className="text-[10px] text-[#2563eb] font-medium ml-1.5 mt-0.5">Place of Experts</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="nav-link"
            style={{ color: isActive('/') ? '#2563eb' : '#374151', fontWeight: isActive('/') ? 600 : 500, fontSize: 13.5 }}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative pb-4 -mb-4"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="nav-link text-[#374151] font-medium text-[13.5px] cursor-default select-none">
              Services
            </span>

            <div className={`absolute top-full left-1/2 bg-white rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#e2e8f0] py-2 min-w-[240px] z-[300] transition-all duration-[180ms] ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1.5 pointer-events-none'} -translate-x-1/2`}>
              <div className="px-4 py-1.5 text-[11px] font-bold text-[#94a3b8] uppercase tracking-[1px]">
                Disciplines
              </div>
              {engineeringLinks.map(l => (
                <Link
                  key={l.to}
                  href={l.to}
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2.5 text-[13.5px] text-[#374151] no-underline font-medium transition-all duration-150 hover:bg-[#f0f7ff] hover:text-[#2563eb]"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {links.map(l => (
            <Link
              key={l.to}
              href={l.to}
              className="nav-link"
              style={{ color: isActive(l.to) ? '#2563eb' : '#374151', fontWeight: isActive(l.to) ? 600 : 500, fontSize: 13.5 }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none text-[26px] cursor-pointer"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white border-t border-[#e2e8f0] px-6 py-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2.5 text-[#374151] no-underline font-medium border-b border-[#f1f5f9] text-[15px]">Home</Link>

          <div className="py-2.5 border-b border-[#f1f5f9]">
            <div className="text-[15px] font-semibold text-[#374151] mb-2">Services</div>
            {engineeringLinks.map(l => (
              <Link key={l.to} href={l.to} onClick={() => setMenuOpen(false)} className="block py-[7px] px-3 text-[#64748b] no-underline font-medium text-[14px]">
                {l.label}
              </Link>
            ))}
          </div>

          {links.map(l => (
            <Link key={l.to} href={l.to} onClick={() => setMenuOpen(false)} className="block py-2.5 text-[#374151] no-underline font-medium border-b border-[#f1f5f9] text-[15px]">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
