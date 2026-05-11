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
    <footer className="bg-slate-900 text-slate-400 pt-14 pb-0">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-white font-extrabold text-[22px]">ZenEdify</span>
            </div>
            <p className="text-sm leading-[1.7] mb-5">
              Your trusted academic partner. Expert help for essays, dissertations, coding, and more.
            </p>
            <div className="mb-5 space-y-2.5">
              <div className="text-sm">
                <span className="text-blue-400 font-semibold">🇬🇧 UK:</span> ZenEdify Ltd., 124 City Road, London, England, EC1V 2NX
              </div>
              <div className="text-sm">
                <span className="text-blue-400 font-semibold">🇵🇰 Pakistan:</span> 602 A, Meher Apartments, H-13 Islamabad
              </div>
            </div>
            <div className="flex gap-3">
              {['f', 'in', 'tw', 'yt'].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xs no-underline transition-colors hover:bg-blue-600 hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2.5 border-b-2 border-blue-600 inline-block">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {/* Services accordion */}
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span className="text-slate-400 text-sm flex items-center gap-1.5 cursor-default select-none">
                  <span className="text-blue-600">›</span> Services
                </span>
                <div
                  className="overflow-hidden pl-3.5 transition-all duration-200"
                  style={{
                    maxHeight: servicesOpen ? 200 : 0,
                    opacity: servicesOpen ? 1 : 0,
                    marginTop: servicesOpen ? 6 : 0,
                  }}
                >
                  {disciplineLinks.map(l => (
                    <Link
                      key={l.to}
                      href={l.to}
                      className="block py-1 text-[13px] text-slate-500 no-underline font-medium transition-colors hover:text-blue-400"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {quickLinks.map(([label, to]) => (
                <Link
                  key={to}
                  href={to}
                  className="text-slate-400 no-underline text-sm transition-colors flex items-center gap-1.5 hover:text-blue-400"
                >
                  <span className="text-blue-600">›</span> {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2.5 border-b-2 border-blue-600 inline-block">
              Subjects We Cover
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {subjects.flat().map((sub, i) => (
                <span key={i} className="text-[13px] text-slate-400 flex items-center gap-1.5">
                  <span className="text-blue-600 text-[10px]">●</span> {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 flex-wrap">
          <p className="text-[13px]">© 2024 ZenEdify. All Rights Reserved.</p>
          <div className="flex gap-2 flex-wrap justify-center">
            {['VISA', 'MC', 'PayPal', 'Stripe'].map(p => (
              <span key={p} className="bg-slate-800 text-slate-400 text-[11px] font-bold px-2 py-1 rounded">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
