import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'About',
  description: 'Learn about ZenEdify — our mission, values, and the world-class academic experts behind our services.',
};

const team = [
  { name: 'Dr. Sarah Ahmed', role: 'Head of Academic Writing', emoji: '👩‍🏫', expertise: 'English, Literature, Research' },
  { name: 'Prof. James Wilson', role: 'Lead STEM Expert', emoji: '👨‍💻', expertise: 'Maths, Physics, Computer Science' },
  { name: 'Dr. Aisha Khan', role: 'Dissertation Specialist', emoji: '👩‍🔬', expertise: 'Social Sciences, Psychology' },
  { name: 'Mr. Carlos Rivera', role: 'Programming Tutor', emoji: '👨‍🏫', expertise: 'Python, Java, Web Dev' },
];

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We are committed to the highest academic standards in every deliverable.' },
  { icon: '🔒', title: 'Confidentiality', desc: 'Your personal information and order details are kept strictly private.' },
  { icon: '✅', title: 'Originality', desc: '100% plagiarism-free, custom-written work tailored to your requirements.' },
  { icon: '⏱️', title: 'On-Time Delivery', desc: 'We respect your deadlines and always deliver on time, every time.' },
  { icon: '🔄', title: 'Free Revisions', desc: 'Unlimited revisions until you are fully satisfied with the work.' },
  { icon: '💬', title: '24/7 Support', desc: 'Our support team is available around the clock for any assistance.' },
];

export default function About() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Story</span>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'white', margin: '16px 0 20px' }}>About ZenEdify</h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>The place of academic experts — empowering students worldwide to achieve their full potential.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div className="two-col-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div>
            <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Who We Are</span>
            <h2 className="section-title" style={{ margin: '12px 0 20px' }}>ZenEdify — Place Of Experts</h2>
            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>Our world-class academic advisers enable professionals and students to succeed by offering top-quality academic solutions. Our experienced team members are skilled tutors who will use their expertise to produce a fantastic paper for you.</p>
            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>ZenEdify provides the best in coursework, dissertation, lab tasks, exam preparations, programming assignments and essays. As the leading academic assignment service, we make sure that all of your papers are well-written, distinctive, and professional.</p>
            <p style={{ color: '#64748b', lineHeight: 1.85, fontSize: 15 }}>We have the resources and know-how to speed up your ascent up the success ladder.</p>
          </div>
          <Card style={{ background: 'linear-gradient(135deg,#dbeafe,#ede9fe)', border: 'none' }}>
            <CardHeader className="text-center p-12">
              <div style={{ fontSize: 80, marginBottom: 8 }}>🏛️</div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                To provide accessible, high-quality academic assistance that empowers every student to excel in their studies and achieve their academic goals.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator />

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader subtitle="Our Principles" title="Our Core Values" desc="The foundation that guides everything we do at ZenEdify." />
          <div className="three-col-grid">
            {values.map(v => (
              <Card key={v.title} className="card-hover">
                <CardHeader>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{v.icon}</div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                  <CardDescription>{v.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader subtitle="Our Experts" title="ZenEdify Experts" desc="Meet some of our world-class academic tutors ready to help you succeed." />
          <div className="four-col-grid">
            {team.map(t => (
              <Card key={t.name} className="card-hover text-center">
                <CardHeader className="items-center">
                  <div style={{ fontSize: 56, marginBottom: 8 }}>{t.emoji}</div>
                  <CardTitle className="text-sm">{t.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">{t.role}</Badge>
                  <CardDescription className="text-xs">{t.expertise}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg,#0f172a,#1e3a5f,#2563eb)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: 16 }}>Join Thousands of Happy Students</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Get the academic help you deserve from qualified experts.</p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
