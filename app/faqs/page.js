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
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Got Questions?</span>
          <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white mt-4 mb-5">Frequently Asked Questions</h1>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">Everything you need to know about ZenEdify&aposs services and process.</p>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-[#f8fafc]">
        <div className="max-w-[860px] mx-auto">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      <section className="py-[60px] px-6 bg-white text-center">
        <div className="max-w-[560px] mx-auto">
          <div className="text-[56px] mb-4">💬</div>
          <h2 className="font-[Poppins,sans-serif] text-[1.8rem] font-extrabold text-[#0f172a] mb-3">Still Have Questions?</h2>
          <p className="text-[#64748b] mb-7 leading-[1.7]">Our support team is available 24/7 to help you with any queries.</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
