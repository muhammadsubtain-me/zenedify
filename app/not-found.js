import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="text-center max-w-[500px]">
        <div className="font-[Poppins,sans-serif] text-[8rem] font-extrabold text-[#2563eb] leading-none">404</div>
        <h2 className="font-[Poppins,sans-serif] text-[1.8rem] text-[#0f172a] mb-4">Page Not Found</h2>
        <p className="text-[#64748b] mb-8 leading-[1.7]">The page you&aposre looking for doesn&apost exist. Head back to the homepage.</p>
        <Link href="/" className="btn-primary">← Back to Home</Link>
      </div>
    </div>
  );
}
