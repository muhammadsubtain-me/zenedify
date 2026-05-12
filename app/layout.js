import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTopButton from '../components/ScrollToTopButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'ZenEdify — Place of Experts',
    template: '%s | ZenEdify',
  },
  description:
    'ZenEdify provides expert academic assistance — essays, dissertations, coding, engineering assignments and more. Connect with world-class academic tutors today.',
  keywords: [
    'academic help',
    'assignment writing',
    'dissertation help',
    'engineering assignment',
    'essay writing service',
    'ZenEdify',
  ],
  metadataBase: new URL('https://zenedify.com'),
  openGraph: {
    title: 'ZenEdify — Place of Experts',
    description: 'Expert academic assistance for students worldwide.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full ${poppins.variable}`}>
      <body className="flex flex-col min-h-full w-full font-sans overflow-x-hidden bg-background text-foreground antialiased scroll-smooth">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
