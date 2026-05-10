import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
