import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 500 }}>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '8rem', fontWeight: 800, color: '#2563eb', lineHeight: 1 }}>404</div>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', color: '#0f172a', marginBottom: 16 }}>Page Not Found</h2>
        <p style={{ color: '#64748b', marginBottom: 32, lineHeight: 1.7 }}>The page you&aposre looking for doesn&apost exist. Head back to the homepage.</p>
        <Link href="/" className="btn-primary">← Back to Home</Link>
      </div>
    </div>
  );
}
