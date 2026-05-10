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
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Work</span>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'white', margin: '16px 0 20px' }}>Portfolio</h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>Explore our completed projects and see how we deliver excellence across every domain.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 28 }}>
            {projects.map((p, i) => (
              <div key={i} className="card-hover" style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <div style={{ background: 'linear-gradient(135deg,#dbeafe,#ede9fe)', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56 }}>{p.emoji}</div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={{ background: '#dbeafe', color: '#2563eb', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{p.category}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0f172a', marginBottom: 8, lineHeight: 1.4 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: '#64748b', marginBottom: 12, lineHeight: 1.6 }}>{p.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: '#94a3b8' }}>🛠 {p.tech}</span>
                    <button style={{ background: '#2563eb', color: 'white', border: 'none', padding: '7px 16px', borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>View Project</button>
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
