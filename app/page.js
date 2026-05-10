import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeader from '../components/SectionHeader';
import AnimatedCounter from '../components/AnimatedCounter';
import { services, testimonials, stats } from '../data/index';

export const metadata = {
  title: 'Home',
  description: 'Connect with academic experts at ZenEdify — assignment help, essays, dissertations, coding, and more.',
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient py-[50px] px-[50px] min-h-[520px] flex items-center justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-[60px] items-center">
          <div className="fade-in">
            <h1 className="font-[Poppins,sans-serif] text-[3.2rem] font-extrabold text-[#0f172a] leading-[1.15] mb-6">
              Connect With <span className="text-[#2563eb]">Academic</span> Experts
            </h1>
            <p className="text-[#64748b] text-[17px] leading-[1.8] mb-9">
              Get academic assistance from ZenEdify — Assignment help experts to earn the grades you desire. Top professionals in essay writing, dissertations, homework, exam prep, and more.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/portfolio" className="btn-primary text-[16px] py-[14px] px-[32px]">Portfolio →</Link>
            </div>
            <div className="flex gap-7 mt-10 flex-wrap">
              {[['12,500+', 'Completed Projects'], ['5,800+', 'Happy Clients'], ['320+', 'Expert Tutors']].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <div className="text-[#2563eb] font-extrabold text-[22px] font-[Poppins,sans-serif]">{val}</div>
                  <div className="text-[#64748b] text-[12px] font-medium">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center ml-[100px] mb-[30px] mr-[40px]">
            <Image
              src="/assets/PersonTeaching.png"
              alt="Academic Expert"
              width={420}
              height={420}
              className="float-animation max-w-full h-auto object-contain"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.15))', scale: '1.2' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-[80px] px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader subtitle="What We Offer" title="Our Popular Services" desc="From essays to coding assignments, we cover every academic need with expert precision." />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {services.map(s => <ServiceCard key={s.id} {...s} />)}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-[72px] px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-10 bg-gradient-to-br from-[#f0f9ff] to-[#ede9fe] rounded-3xl py-12 px-10">
            {stats.map(s => <AnimatedCounter key={s.label} target={s.value} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-[80px] px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[60px] items-center">
          <div className="flex justify-center">
            <div className="relative text-center">
              <div className="w-[300px] h-[300px] bg-gradient-to-br from-[#dbeafe] to-[#ede9fe] rounded-full flex items-center justify-center text-[100px] mx-auto">🏆</div>
            </div>
          </div>
          <div>
            <span className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[1.5px]">Why Choose Us</span>
            <h2 className="section-title mt-3 mb-5">ZenEdify – Place Of Experts</h2>
            <p className="text-[#64748b] leading-[1.85] mb-5 text-[15px]">
              Our world-class academic advisers enable professionals and students to succeed by offering top-quality academic solutions. Our experienced team members are skilled tutors who will use their expertise to produce a fantastic paper for you.
            </p>
            <p className="text-[#64748b] leading-[1.85] mb-7 text-[15px]">
              ZenEdify provides the best in coursework, dissertation, lab tasks, exam preparations, programming assignments and essays. There are no restrictions on what we may offer you.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['100% Original Work', 'On-Time Delivery', '24/7 Expert Support', 'Free Revisions'].map(f => (
                <div key={f} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[#dcfce7] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#16a34a] text-sm font-bold">✓</span>
                  </div>
                  <span className="font-semibold text-sm text-[#374151]">{f}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary">About Us →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[80px] px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader subtitle="Client Reviews" title="What Clients Say" desc="Thousands of students trust ZenEdify for their academic success." />
          <div className="grid grid-cols-3 gap-7">
            {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
