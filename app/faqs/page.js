import Link from 'next/link';
import { faqs } from '../../data/index';
import FAQItem from './FAQItem';

export const metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about ZenEdify academic services — plagiarism, deadlines, confidentiality and more.',
};

export default function FAQs() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Got Questions?</span>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'white', margin: '16px 0 20px' }}>Frequently Asked Questions</h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>Everything you need to know about ZenEdify&aposs services and process.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      <section style={{ padding: '60px 24px', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>💬</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Still Have Questions?</h2>
          <p style={{ color: '#64748b', marginBottom: 28, lineHeight: 1.7 }}>Our support team is available 24/7 to help you with any queries.</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
