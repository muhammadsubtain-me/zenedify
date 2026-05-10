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
    <header style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)', background: 'white', position: 'sticky', top: 0, zIndex: 200 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

        {/* Brand */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 22, color: '#0f172a', lineHeight: 1 }}>ZenEdify</div>
            <div style={{ fontSize: 10, color: '#2563eb', fontWeight: 500, marginLeft: 6, marginTop: 1 }}>Place of Experts</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="desktop-nav">

          <Link
            href="/"
            className="nav-link"
            style={{ color: isActive('/') ? '#2563eb' : '#374151', fontWeight: isActive('/') ? 600 : 500, fontSize: 13.5, textDecoration: 'none' }}
          >
            Home
          </Link>

          {/* Services with hover dropdown */}
          <div
            className="services-dropdown-wrapper"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            style={{ position: 'relative', paddingBottom: 16 }}
          >
            <span
              className="nav-link"
              style={{ color: '#374151', fontWeight: 500, fontSize: 13.5, cursor: 'default', userSelect: 'none' }}
            >
              Services
            </span>

            <div style={{
              position: 'absolute', top: '100%', left: '50%',
              transform: servicesOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-6px)',
              background: 'white', borderRadius: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: '1px solid #e2e8f0', padding: '8px 0', minWidth: 240, zIndex: 300,
              opacity: servicesOpen ? 1 : 0,
              pointerEvents: servicesOpen ? 'auto' : 'none',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
            }}>
              <div style={{ padding: '6px 16px 4px', fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Disciplines
              </div>

              {engineeringLinks.map(l => (
                <Link
                  key={l.to}
                  href={l.to}
                  onClick={() => setServicesOpen(false)}
                  style={{ display: 'block', padding: '10px 16px', fontSize: 13.5, color: '#374151', textDecoration: 'none', fontWeight: 500, transition: 'all 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.color = '#2563eb'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}
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
              style={{ color: isActive(l.to) ? '#2563eb' : '#374151', fontWeight: isActive(l.to) ? 600 : 500, fontSize: 13.5, textDecoration: 'none' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: 26, cursor: 'pointer' }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #e2e8f0', padding: '16px 24px' }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '10px 0', color: '#374151', textDecoration: 'none', fontWeight: 500, borderBottom: '1px solid #f1f5f9', fontSize: 15 }}>Home</Link>

          <div style={{ padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Services</div>
            {engineeringLinks.map(l => (
              <Link key={l.to} href={l.to} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '7px 12px', color: '#64748b', textDecoration: 'none', fontWeight: 500, fontSize: 14 }}>
                {l.label}
              </Link>
            ))}
          </div>

          {links.map(l => (
            <Link key={l.to} href={l.to} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '10px 0', color: '#374151', textDecoration: 'none', fontWeight: 500, borderBottom: '1px solid #f1f5f9', fontSize: 15 }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .services-dropdown-wrapper { margin-bottom: -16px; padding-bottom: 16px; }
      `}</style>
    </header>
  );
}
