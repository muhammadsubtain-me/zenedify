import Link from 'next/link';
import SectionHeader from '../../components/SectionHeader';

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
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Our Story</span>
          <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white mt-4 mb-5">About ZenEdify</h1>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">The place of academic experts — empowering students worldwide to achieve their full potential.</p>
        </div>
      </section>

      <section className="py-[80px] px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[64px] items-center">
          <div>
            <span className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[1.5px]">Who We Are</span>
            <h2 className="section-title mt-3 mb-5">ZenEdify — Place Of Experts</h2>
            <p className="text-[#64748b] leading-[1.85] mb-4 text-[15px]">Our world-class academic advisers enable professionals and students to succeed by offering top-quality academic solutions. Our experienced team members are skilled tutors who will use their expertise to produce a fantastic paper for you.</p>
            <p className="text-[#64748b] leading-[1.85] mb-4 text-[15px]">ZenEdify provides the best in coursework, dissertation, lab tasks, exam preparations, programming assignments and essays. As the leading academic assignment service, we make sure that all of your papers are well-written, distinctive, and professional.</p>
            <p className="text-[#64748b] leading-[1.85] text-[15px]">We have the resources and know-how to speed up your ascent up the success ladder.</p>
          </div>
          <div className="bg-gradient-to-br from-[#dbeafe] to-[#ede9fe] rounded-3xl p-12 text-center">
            <div className="text-[80px] mb-5">🏛️</div>
            <h3 className="font-[Poppins,sans-serif] text-[1.6rem] text-[#0f172a] mb-3">Our Mission</h3>
            <p className="text-[#64748b] leading-[1.8] text-[15px]">To provide accessible, high-quality academic assistance that empowers every student to excel in their studies and achieve their academic goals.</p>
          </div>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader subtitle="Our Principles" title="Our Core Values" desc="The foundation that guides everything we do at ZenEdify." />
          <div className="grid grid-cols-3 gap-7">
            {values.map(v => (
              <div key={v.title} className="card-hover bg-white rounded-2xl p-7 border border-[#e2e8f0]">
                <div className="text-[36px] mb-4">{v.icon}</div>
                <h3 className="font-bold text-[18px] text-[#0f172a] mb-2.5">{v.title}</h3>
                <p className="text-[#64748b] text-[14px] leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader subtitle="Our Experts" title="ZenEdify Experts" desc="Meet some of our world-class academic tutors ready to help you succeed." />
          <div className="grid grid-cols-4 gap-7">
            {team.map(t => (
              <div key={t.name} className="card-hover bg-white rounded-2xl p-7 border border-[#e2e8f0] text-center">
                <div className="text-[56px] mb-4">{t.emoji}</div>
                <h3 className="font-bold text-[15px] text-[#0f172a] mb-1">{t.name}</h3>
                <p className="text-[#2563eb] text-[13px] font-semibold mb-2">{t.role}</p>
                <p className="text-[#94a3b8] text-[12px]">{t.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2563eb] text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-[Poppins,sans-serif] text-[2.2rem] font-extrabold text-white mb-4">Join Thousands of Happy Students</h2>
          <p className="text-white/80 text-[16px] mb-8 leading-[1.7]">Get the academic help you deserve from qualified experts.</p>
          <Link href="/contact" className="btn-primary text-[16px] py-[14px] px-[32px]">Get In Touch →</Link>
        </div>
      </section>
    </div>
  );
}
