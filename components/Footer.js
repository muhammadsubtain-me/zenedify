'use client';

import { useState } from 'react';
import Link from 'next/link';

const disciplineLinks = [
  { to: '/mechanical-engineering', label: '⚙️  Mechanical Engineering' },
  { to: '/electrical-engineering', label: '⚡  Electrical Engineering' },
  { to: '/chemical-engineering',   label: '🧪  Chemical Engineering'   },
  { to: '/computer-science',       label: '💻  Computer Science'       },
];

const subjects = [
  ['Computer Science', 'Applied Sciences', 'Social Sciences', 'Mathematics', 'Programming'],
  ['Business', 'Management', 'Engineering', 'Physics', 'Chemistry'],
  ['English', 'Biology', 'History', 'Finance', 'Statistics'],
  ['Law', 'Accounting', 'Electronics', 'Psychology', 'Numerical Methods'],
];

const quickLinks = [
  ['FAQs', '/faqs'], ['About', '/about'], ['Contact', '/contact'],
  ['Portfolio', '/portfolio'], ['Samples', '/samples'],
];

export default function Footer() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8', paddingTop: 60, paddingBottom: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: 22 }}>ZenEdify</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              Your trusted academic partner. Expert help for essays, dissertations, coding, and more.
            </p>
            <div style={{ marginBottom: 20 }}>
              <div style={{ marginBottom: 10, fontSize: 14 }}>
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>🇬🇧 UK:</span> ZenEdify Ltd., 124 City Road, London, England, EC1V 2NX
              </div>
              <div style={{ fontSize: 14 }}>
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>🇵🇰 Pakistan:</span> 602 A, Meher Apartments, H-13 Islamabad
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {['f', 'in', 'tw', 'yt'].map((s, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, background: '#1e293b', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontWeight: 700, fontSize: 12, textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.target.style.background = '#2563eb'}
                  onMouseLeave={e => e.target.style.background = '#1e293b'}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 20, paddingBottom: 10, borderBottom: '2px solid #2563eb', display: 'inline-block' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

              {/* Services — hover reveals inline sublist */}
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span style={{ color: '#94a3b8', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, cursor: 'default', userSelect: 'none' }}>
                  <span style={{ color: '#2563eb' }}>›</span> Services
                </span>

                <div style={{
                  overflow: 'hidden',
                  maxHeight: servicesOpen ? 200 : 0,
                  opacity: servicesOpen ? 1 : 0,
                  transition: 'max-height 0.22s ease, opacity 0.18s ease',
                  paddingLeft: 14,
                  marginTop: servicesOpen ? 6 : 0,
                }}>
                  {disciplineLinks.map(l => (
                    <Link
                      key={l.to}
                      href={l.to}
                      style={{ display: 'block', padding: '4px 0', fontSize: 13, color: '#64748b', textDecoration: 'none', fontWeight: 500, transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#60a5fa'}
                      onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {quickLinks.map(([label, to]) => (
                <Link key={to} href={to} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6 }}
                  onMouseEnter={e => e.target.style.color = '#60a5fa'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                  <span style={{ color: '#2563eb' }}>›</span> {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 20, paddingBottom: 10, borderBottom: '2px solid #2563eb', display: 'inline-block' }}>Subjects We Cover</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px' }}>
              {subjects.flat().map((sub, i) => (
                <span key={i} style={{ fontSize: 13, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ color: '#2563eb', fontSize: 10 }}>●</span> {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1e293b', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13 }}>© 2024 ZenEdify. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['VISA', 'MC', 'PayPal', 'Stripe'].map(p => (
              <span key={p} style={{ background: '#1e293b', color: '#94a3b8', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 5 }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
