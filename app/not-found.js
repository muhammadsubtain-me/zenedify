import Link from 'next/link';
import { Button } from '../components/ui/button';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="text-center max-w-[500px]">
        <div className="font-extrabold text-blue-600 text-[6rem] sm:text-[8rem] leading-none">404</div>
        <h2 className="font-extrabold text-slate-900 text-[1.5rem] sm:text-[1.8rem] mt-4 mb-4">Page Not Found</h2>
        <p className="text-slate-500 mb-8 leading-[1.7]">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage.
        </p>
        <Button asChild size="lg">
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
