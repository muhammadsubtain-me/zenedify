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
    <header className="shadow-[0_2px_16px_rgba(0,0,0,0.07)] bg-white sticky top-0 z-[200]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px]">

        {/* Brand */}
        <Link href="/" className="no-underline flex items-center gap-2.5">
          <div>
            <div className="font-extrabold text-[22px] text-slate-900 leading-none">Zen<span className="text-blue-600">Edify</span></div>
            <div className="text-[10px] text-slate-600 font-medium ml-1.5 mt-0.5">Place of Experts</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link
            href="/"
            className={`nav-link-underline text-[13.5px] no-underline transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium hover:text-blue-600'}`}
          >
            Home
          </Link>

          {/* Services dropdown — pure CSS hover */}
          <div className="services-dropdown-wrapper relative flex items-center self-stretch cursor-default">
            <span className="nav-link-underline text-gray-700 font-medium text-[13.5px] select-none">
              Services
            </span>
            <div className="services-dropdown-menu absolute top-full left-1/2 bg-white rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-slate-200 py-2 min-w-[240px] z-[300]">
              <div className="px-4 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Disciplines
              </div>
              {engineeringLinks.map(l => (
                <Link
                  key={l.to}
                  href={l.to}
                  className="services-dropdown-item block px-4 py-2.5 text-[13.5px] text-gray-700 no-underline font-medium transition-colors"
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
              className={`nav-link-underline text-[13.5px] no-underline transition-colors ${isActive(l.to) ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium hover:text-blue-600'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile — Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
           <SheetHeader>
  <SheetTitle asChild className="!line-clamp-none !whitespace-normal !h-auto">
    <div className="flex flex-col items-start leading-tight">
      <span className="font-extrabold text-xl text-slate-900">
        ZenEdify
      </span>
      <span className="text-[10px] text-slate-600 font-medium mt-0.5">
        Place of Experts
      </span>
    </div>
  </SheetTitle>
</SheetHeader>
            <div className="px-6 py-4 space-y-1">
              <SheetClose asChild>
                <Link href="/" className="block py-2.5 text-gray-700 no-underline font-medium text-[15px] hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </SheetClose>
              <div className="py-2">
                <div className="text-[15px] font-semibold text-gray-700 mb-2">Services</div>
                {engineeringLinks.map(l => (
                  <SheetClose asChild key={l.to}>
                    <Link href={l.to} className="block py-1.5 px-3 text-slate-500 no-underline font-medium text-sm hover:text-blue-600 transition-colors">
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <Separator />
              {links.map(l => (
                <SheetClose asChild key={l.to}>
                  <Link href={l.to} className="block py-2.5 text-gray-700 no-underline font-medium text-[15px] hover:text-blue-600 transition-colors">
                    {l.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
