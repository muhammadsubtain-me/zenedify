import SectionHeader from '../../components/SectionHeader';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore ZenEdify completed academic and software projects across web, mobile, AI, and enterprise domains.',
};

const projects = [
  { title: 'E-Commerce Platform', category: 'Web Development', tech: 'React, Node.js, MongoDB', emoji: '🛒', desc: 'A full-stack e-commerce solution with payment integration and admin dashboard.' },
  { title: 'University Portal', category: 'Education Tech', tech: 'Vue.js, Django, PostgreSQL', emoji: '🎓', desc: 'Student management portal with course scheduling and grade tracking features.' },
  { title: 'Healthcare Dashboard', category: 'Data Visualization', tech: 'React, D3.js, Python', emoji: '🏥', desc: 'Real-time analytics dashboard for patient data and hospital operations.' },
  { title: 'Mobile Banking App', category: 'Mobile Development', tech: 'React Native, Firebase', emoji: '💳', desc: 'Secure mobile banking app with biometric authentication and instant transfers.' },
  { title: 'AI Content Generator', category: 'Artificial Intelligence', tech: 'Python, OpenAI, FastAPI', emoji: '🤖', desc: 'AI-powered tool for generating SEO-optimized content at scale.' },
  { title: 'Supply Chain System', category: 'Enterprise Software', tech: 'Angular, Spring Boot, MySQL', emoji: '📦', desc: 'End-to-end supply chain management platform for logistics companies.' },
  { title: 'Social Media Analytics', category: 'Data Analytics', tech: 'React, Python, BigQuery', emoji: '📊', desc: 'Comprehensive analytics tool tracking engagement across all social platforms.' },
  { title: 'EdTech Learning Platform', category: 'Education Tech', tech: 'Next.js, Prisma, Stripe', emoji: '📚', desc: 'Interactive learning platform with video courses, quizzes, and certifications.' },
];

export default function Portfolio() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Our Work</span>
          <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white mt-4 mb-5">Portfolio</h1>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">Explore our completed projects and see how we deliver excellence across every domain.</p>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-7">
            {projects.map((p, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl overflow-hidden border border-[#e2e8f0]">
                <div className="bg-gradient-to-br from-[#dbeafe] to-[#ede9fe] h-[120px] flex items-center justify-center text-[56px]">{p.emoji}</div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="bg-[#dbeafe] text-[#2563eb] text-[11px] font-bold py-[3px] px-2.5 rounded-full">{p.category}</span>
                  </div>
                  <h3 className="font-bold text-[16px] text-[#0f172a] mb-2 leading-[1.4]">{p.title}</h3>
                  <p className="text-[13px] text-[#64748b] mb-3 leading-[1.6]">{p.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] text-[#94a3b8]">🛠 {p.tech}</span>
                    <button className="bg-[#2563eb] text-white border-none py-[7px] px-4 rounded-lg font-semibold text-[13px] cursor-pointer">View Project</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
