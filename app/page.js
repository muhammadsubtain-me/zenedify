import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeader from '../components/SectionHeader';
import AnimatedCounter from '../components/AnimatedCounter';
import { Button } from '../components/ui/button';
import { services, testimonials, stats } from '../data/index';

export const metadata = {
  title: 'Home',
  description: 'Connect with academic experts at ZenEdify — assignment help, essays, dissertations, coding, and more.',
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-[60px] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center min-w-0">
          {/* Text */}
          <div className="animate-fade-in order-2 lg:order-1 min-w-0">
            <h1 className="text-[2rem] sm:text-[2.6rem] lg:text-[2.8rem] font-extrabold text-slate-900 leading-[1.15] mb-6">
              Connect With <span className="text-blue-600">Academic</span> Experts
            </h1>
            <p className="text-slate-500 text-base sm:text-[17px] leading-[1.8] mb-8">
              Get academic assistance from ZenEdify — Assignment help experts to earn the grades you desire. Top professionals in essay writing, dissertations, homework, exam prep, and more.
            </p>
            <Button asChild size="lg">
              <Link href="/portfolio">Portfolio →</Link>
            </Button>
            <div className="flex gap-7 mt-10 flex-wrap">
              {[['12,500+', 'Completed Projects'], ['5,800+', 'Happy Clients'], ['320+', 'Expert Tutors']].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <div className="text-blue-600 font-extrabold text-[22px]">{val}</div>
                  <div className="text-slate-500 text-xs font-medium">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-float flex justify-center items-center order-2 lg:order-2 px-2 py-8 sm:p-10 sm:pr-[55px] min-w-0 max-w-full overflow-x-clip pr-5">
            <Image
              src="/assets/PersonTeaching.png"
              alt="Academic Expert"
              width={380}
              height={380}
              className="p-4 object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)] w-[min(100%,260px)] sm:w-[300px] lg:w-[380px] lg:scale-[1.35] scale-[1.5] h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader subtitle="What We Offer" title="Our Popular Services" desc="From essays to coding assignments, we cover every academic need with expert precision." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map(s => <ServiceCard key={s.id} {...s} />)}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-violet-100 rounded-3xl px-6 py-12 sm:px-10 sm:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(s => <AnimatedCounter key={s.label} target={s.value} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center items-center">
          <div className="animate-float flex justify-center items-center order-2 lg:order-2 px-2 py-8 sm:p-10 sm:pr-[55px] min-w-0 max-w-full overflow-x-clip">
            <Image
              src="/assets/AboutUs.png"
              alt="About Us"
              width={380}
              height={380}
              className="p-4 object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)] w-[min(100%,260px)] sm:w-[300px] lg:w-[380px] lg:scale-[1.35] scale-[1.5] h-auto"
              priority
            />
          </div>
          </div>
          <div>
            <span className="text-blue-600 font-bold text-[13px] uppercase tracking-[1.5px]">Why Choose Us</span>
            <h2 className="font-extrabold text-slate-900 text-[1.9rem] sm:text-[2.2rem] leading-tight mt-3 mb-5">
              ZenEdify – Place Of Experts
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5 text-[15px]">
              Our world-class academic advisers enable professionals and students to succeed by offering top-quality academic solutions. Our experienced team members are skilled tutors who will use their expertise to produce a fantastic paper for you.
            </p>
            <p className="text-slate-500 leading-relaxed mb-7 text-[15px]">
              ZenEdify provides the best in coursework, dissertation, lab tasks, exam preparations, programming assignments and essays. There are no restrictions on what we may offer you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['100% Original Work', 'On-Time Delivery', '24/7 Expert Support', 'Free Revisions'].map(f => (
                <div key={f} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="font-semibold text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link href="/about">About Us →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader subtitle="Client Reviews" title="What Clients Say" desc="Thousands of students trust ZenEdify for their academic success." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
