export const metadata = {
  title: 'Samples',
  description: 'Browse ZenEdify sample academic work — essays, dissertations, lab reports, and coding projects across all levels.',
};

const samples = [
  { title: 'Literary Analysis Essay', subject: 'English Literature', level: 'Undergraduate', pages: 8, emoji: '📖' },
  { title: 'Machine Learning Report', subject: 'Computer Science', level: 'Graduate', pages: 15, emoji: '🤖' },
  { title: 'Business Strategy Dissertation', subject: 'Business Management', level: 'Masters', pages: 45, emoji: '📊' },
  { title: 'Organic Chemistry Lab Report', subject: 'Chemistry', level: 'Undergraduate', pages: 12, emoji: '🔬' },
  { title: 'Statistical Analysis - SPSS', subject: 'Statistics', level: 'Postgraduate', pages: 20, emoji: '📈' },
  { title: 'Java Programming Assignment', subject: 'Computer Science', level: 'Undergraduate', pages: 6, emoji: '💻' },
  { title: 'Psychology Research Paper', subject: 'Psychology', level: 'Undergraduate', pages: 10, emoji: '🧠' },
  { title: 'Financial Accounting Report', subject: 'Finance', level: 'Graduate', pages: 18, emoji: '💰' },
];

export default function Samples() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Sample Work</span>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'white', margin: '16px 0 20px' }}>Homework Help Samples</h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>Browse our sample work to see the quality and standard our experts deliver.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 28 }}>
            {samples.map((s, i) => (
              <div key={i} className="card-hover" style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <div style={{ background: 'linear-gradient(135deg,#dbeafe,#ede9fe)', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56 }}>{s.emoji}</div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={{ background: '#dbeafe', color: '#2563eb', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{s.subject}</span>
                    <span style={{ background: '#dcfce7', color: '#16a34a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{s.level}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0f172a', marginBottom: 12, lineHeight: 1.4 }}>{s.title}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: '#94a3b8' }}>📄 {s.pages} pages</span>
                    <button style={{ background: '#2563eb', color: 'white', border: 'none', padding: '7px 16px', borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>View Sample</button>
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
