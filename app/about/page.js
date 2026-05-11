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
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-16 sm:py-[72px] px-4 sm:px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-blue-400 font-bold text-[13px] uppercase tracking-[1.5px]">Our Story</span>
          <h1 className="font-extrabold text-white text-[2rem] sm:text-[3rem] mt-4 mb-5 leading-tight">About ZenEdify</h1>
          <p className="text-slate-300 text-base sm:text-[17px] leading-[1.8]">
            The place of academic experts — empowering students worldwide to achieve their full potential.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold text-[13px] uppercase tracking-[1.5px]">Who We Are</span>
            <h2 className="font-extrabold text-slate-900 text-[1.9rem] sm:text-[2.2rem] leading-tight mt-3 mb-5">
              ZenEdify — Place Of Experts
            </h2>
            <p className="text-slate-500 leading-[1.85] mb-4 text-[15px]">
              Our world-class academic advisers enable professionals and students to succeed by offering top-quality academic solutions. Our experienced team members are skilled tutors who will use their expertise to produce a fantastic paper for you.
            </p>
            <p className="text-slate-500 leading-[1.85] mb-4 text-[15px]">
              ZenEdify provides the best in coursework, dissertation, lab tasks, exam preparations, programming assignments and essays. As the leading academic assignment service, we make sure that all of your papers are well-written, distinctive, and professional.
            </p>
            <p className="text-slate-500 leading-[1.85] text-[15px]">
              We have the resources and know-how to speed up your ascent up the success ladder.
            </p>
          </div>
          <Card className="bg-gradient-to-br from-blue-100 to-violet-100 border-none">
            <CardHeader className="text-center p-8 sm:p-12 items-center">
              <div className="text-[70px] sm:text-[80px] mb-2">🏛️</div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                To provide accessible, high-quality academic assistance that empowers every student to excel in their studies and achieve their academic goals.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Core Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader subtitle="Our Principles" title="Our Core Values" desc="The foundation that guides everything we do at ZenEdify." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {values.map(v => (
              <Card key={v.title} className="card-hover">
                <CardHeader>
                  <div className="text-[36px] mb-2">{v.icon}</div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                  <CardDescription>{v.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Team */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader subtitle="Our Experts" title="ZenEdify Experts" desc="Meet some of our world-class academic tutors ready to help you succeed." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map(t => (
              <Card key={t.name} className="card-hover text-center">
                <CardHeader className="items-center">
                  <div className="text-[56px] mb-2">{t.emoji}</div>
                  <CardTitle className="text-sm">{t.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">{t.role}</Badge>
                  <CardDescription className="text-xs">{t.expertise}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-[#1e3a5f] to-blue-600 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-extrabold text-white text-[1.7rem] sm:text-[2.2rem] mb-4">
            Join Thousands of Happy Students
          </h2>
          <p className="text-white/80 text-base mb-8 leading-[1.7]">
            Get the academic help you deserve from qualified experts.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
