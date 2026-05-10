'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Separator } from './ui/separator';

const engineeringLinks = [
  { to: '/mechanical-engineering', label: '⚙️  Mechanical Engineering' },
  { to: '/electrical-engineering', label: '⚡  Electrical Engineering' },
  { to: '/chemical-engineering',   label: '🧪  Chemical Engineering'   },
  { to: '/computer-science',       label: '💻  Computer Science'       },
];

export default function Navbar() {
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
          <Link href="/" className="nav-link" style={{ color: isActive('/') ? '#2563eb' : '#374151', fontWeight: isActive('/') ? 600 : 500, fontSize: 13.5, textDecoration: 'none' }}>
            Home
          </Link>

          {/* Services dropdown — pure CSS hover, works immediately on first load */}
          <div
            className="services-dropdown-wrapper"
            style={{ position: 'relative', display: 'flex', alignItems: 'center', alignSelf: 'stretch' }}
          >
            <span className="nav-link services-label" style={{ color: '#374151', fontWeight: 500, fontSize: 13.5, cursor: 'default', userSelect: 'none' }}>
              Services
            </span>
            <div className="services-dropdown-menu" style={{
              position: 'absolute', top: '100%', left: '50%',
              background: 'white', borderRadius: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: '1px solid #e2e8f0', padding: '8px 0', minWidth: 240, zIndex: 300,
            }}>
              <div style={{ padding: '6px 16px 4px', fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Disciplines
              </div>
              {engineeringLinks.map(l => (
                <Link key={l.to} href={l.to}
                  className="services-dropdown-item"
                  style={{ display: 'block', padding: '10px 16px', fontSize: 13.5, color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {links.map(l => (
            <Link key={l.to} href={l.to} className="nav-link"
              style={{ color: isActive(l.to) ? '#2563eb' : '#374151', fontWeight: isActive(l.to) ? 600 : 500, fontSize: 13.5, textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile — Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mobile-menu-btn" style={{ display: 'none' }}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <span style={{ fontWeight: 800, fontSize: 20, color: '#0f172a' }}>ZenEdify</span>
                <span style={{ fontSize: 10, color: '#2563eb', fontWeight: 500, display: 'block' }}>Place of Experts</span>
              </SheetTitle>
            </SheetHeader>
            <div style={{ padding: '16px 24px' }}>
              <SheetClose asChild>
                <Link href="/" style={{ display: 'block', padding: '10px 0', color: '#374151', textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>Home</Link>
              </SheetClose>
              <div style={{ padding: '10px 0' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Services</div>
                {engineeringLinks.map(l => (
                  <SheetClose asChild key={l.to}>
                    <Link href={l.to} style={{ display: 'block', padding: '7px 12px', color: '#64748b', textDecoration: 'none', fontWeight: 500, fontSize: 14 }}>
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              {links.map(l => (
                <SheetClose asChild key={l.to}>
                  <Link href={l.to} style={{ display: 'block', padding: '10px 0', color: '#374151', textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>
                    {l.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }

        /* ── Services dropdown: pure CSS, works instantly on first load ── */
        .services-dropdown-wrapper { cursor: default; }

        .services-dropdown-menu {
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(-6px);
          transition: opacity 0.18s ease, transform 0.18s ease;
        }

        .services-dropdown-wrapper:hover .services-dropdown-menu {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .services-dropdown-item:hover {
          background: #f0f7ff;
          color: #2563eb !important;
        }

        .services-label:hover {
          color: #2563eb !important;
        }
      `}</style>
    </header>
  );
}
