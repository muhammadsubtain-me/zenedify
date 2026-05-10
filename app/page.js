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
      <section className="hero-gradient" style={{ padding: '50px 50px', minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: 1200, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div className="fade-in">
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: 24 }}>
              Connect With <span style={{ color: '#2563eb' }}>Academic</span> Experts
            </h1>
            <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
              Get academic assistance from ZenEdify — Assignment help experts to earn the grades you desire. Top professionals in essay writing, dissertations, homework, exam prep, and more.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/portfolio" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>Portfolio →</Link>
            </div>
            <div style={{ display: 'flex', gap: 28, marginTop: 40, flexWrap: 'wrap' }}>
              {[['12,500+', 'Completed Projects'], ['5,800+', 'Happy Clients'], ['320+', 'Expert Tutors']].map(([val, lbl]) => (
                <div key={lbl} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#2563eb', fontWeight: 800, fontSize: 22, fontFamily: 'Poppins, sans-serif' }}>{val}</div>
                  <div style={{ color: '#64748b', fontSize: 12, fontWeight: 500 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 100, marginBottom: 30, marginRight: 40 }}>
            <Image
              src="/assets/PersonTeaching.png"
              alt="Academic Expert"
              width={420}
              height={420}
              className="float-animation"
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.15))', scale: '1.2' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader subtitle="What We Offer" title="Our Popular Services" desc="From essays to coding assignments, we cover every academic need with expert precision." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {services.map(s => <ServiceCard key={s.id} {...s} />)}
          </div>

        </div>
      </section>

      {/* STATS — AnimatedCounter is a Client Component island */}
      <section style={{ padding: '72px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, background: 'linear-gradient(135deg,#f0f9ff,#ede9fe)', borderRadius: 24, padding: '48px 40px' }}>
            {stats.map(s => <AnimatedCounter key={s.label} target={s.value} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{ width: 300, height: 300, background: 'linear-gradient(135deg,#dbeafe,#ede9fe)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 100, margin: '0 auto' }}>🏆</div>
            </div>
          </div>
          <div>
            <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Why Choose Us</span>
            <h2 className="section-title" style={{ margin: '12px 0 20px' }}>ZenEdify – Place Of Experts</h2>
            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
              Our world-class academic advisers enable professionals and students to succeed by offering top-quality academic solutions. Our experienced team members are skilled tutors who will use their expertise to produce a fantastic paper for you.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
              ZenEdify provides the best in coursework, dissertation, lab tasks, exam preparations, programming assignments and essays. There are no restrictions on what we may offer you.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
              {['100% Original Work', 'On-Time Delivery', '24/7 Expert Support', 'Free Revisions'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#16a34a', fontSize: 14, fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: 14, color: '#374151' }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary">About Us →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader subtitle="Client Reviews" title="What Clients Say" desc="Thousands of students trust ZenEdify for their academic success." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
