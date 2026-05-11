import Link from 'next/link';
import { faqs } from '../../data/index';
import { Accordion } from '../../components/ui/accordion';
import FAQItem from './FAQItem';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about ZenEdify academic services — plagiarism, deadlines, confidentiality and more.',
};

export default function FAQs() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-16 sm:py-[72px] px-4 sm:px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-blue-400 font-bold text-[13px] uppercase tracking-[1.5px]">Got Questions?</span>
          <h1 className="font-extrabold text-white text-[2rem] sm:text-[3rem] mt-4 mb-5 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base sm:text-[17px] leading-[1.8]">
            Everything you need to know about ZenEdify&apos;s services and process.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-[860px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} value={`item-${i}`} />
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white text-center">
        <div className="max-w-[560px] mx-auto">
          <div className="text-[56px] mb-4">💬</div>
          <h2 className="font-extrabold text-slate-900 text-[1.6rem] sm:text-[1.8rem] mb-3">Still Have Questions?</h2>
          <p className="text-slate-500 mb-7 leading-[1.7]">Our support team is available 24/7 to help you with any queries.</p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
