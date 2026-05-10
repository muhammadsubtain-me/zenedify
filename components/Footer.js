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
    <footer className="bg-[#0f172a] text-[#94a3b8] pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[1.4fr_1fr_1.8fr] gap-12 pb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-white font-extrabold text-[22px]">ZenEdify</span>
            </div>
            <p className="text-[14px] leading-[1.7] mb-5">
              Your trusted academic partner. Expert help for essays, dissertations, coding, and more.
            </p>
            <div className="mb-5">
              <div className="mb-2.5 text-[14px]">
                <span className="text-[#60a5fa] font-semibold">🇬🇧 UK:</span> ZenEdify Ltd., 124 City Road, London, England, EC1V 2NX
              </div>
              <div className="text-[14px]">
                <span className="text-[#60a5fa] font-semibold">🇵🇰 Pakistan:</span> 602 A, Meher Apartments, H-13 Islamabad
              </div>
            </div>
            <div className="flex gap-3">
              {['f', 'in', 'tw', 'yt'].map((s, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 bg-[#1e293b] rounded-lg flex items-center justify-center text-[#94a3b8] font-bold text-[12px] no-underline transition-colors duration-200 hover:bg-[#2563eb]">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-[16px] mb-5 pb-2.5 border-b-2 border-[#2563eb] inline-block">Quick Links</h4>
            <div className="flex flex-col gap-2.5">

              {/* Services hover */}
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span className="text-[#94a3b8] text-[14px] flex items-center gap-1.5 cursor-default select-none">
                  <span className="text-[#2563eb]">›</span> Services
                </span>
                <div className={`overflow-hidden transition-all duration-200 pl-3.5 ${servicesOpen ? 'max-h-[200px] opacity-100 mt-1.5' : 'max-h-0 opacity-0'}`}>
                  {disciplineLinks.map(l => (
                    <Link
                      key={l.to}
                      href={l.to}
                      className="block py-1 text-[13px] text-[#64748b] no-underline font-medium transition-colors duration-150 hover:text-[#60a5fa]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {quickLinks.map(([label, to]) => (
                <Link key={to} href={to}
                  className="text-[#94a3b8] no-underline text-[14px] transition-colors duration-200 flex items-center gap-1.5 hover:text-[#60a5fa]">
                  <span className="text-[#2563eb]">›</span> {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-white font-bold text-[16px] mb-5 pb-2.5 border-b-2 border-[#2563eb] inline-block">Subjects We Cover</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {subjects.flat().map((sub, i) => (
                <span key={i} className="text-[13px] text-[#94a3b8] flex items-center gap-1">
                  <span className="text-[#2563eb] text-[10px]">●</span> {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e293b] py-5 flex justify-between items-center flex-wrap gap-3">
          <p className="text-[13px]">© 2024 ZenEdify. All Rights Reserved.</p>
          <div className="flex gap-2">
            {['VISA', 'MC', 'PayPal', 'Stripe'].map(p => (
              <span key={p} className="bg-[#1e293b] text-[#94a3b8] text-[11px] font-bold py-[3px] px-2 rounded">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
