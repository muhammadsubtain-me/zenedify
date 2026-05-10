import Link from 'next/link';

export const metadata = {
  title: 'Computer Science',
  description: 'Expert academic support for Computer Science — programming, data structures, AI, machine learning, and more.',
};

const topics = [
  { icon: '💻', title: 'Programming Fundamentals (C/C++/Python/Java)', desc: 'Variables, control flow, functions, arrays, pointers, OOP basics — from beginner to advanced level.' },
  { icon: '🧩', title: 'Object-Oriented Programming', desc: 'Classes, objects, inheritance, polymorphism, encapsulation, and design patterns.' },
  { icon: '🗄️', title: 'Data Structures & Algorithms', desc: 'Arrays, linked lists, trees, graphs, sorting, searching, dynamic programming, and complexity analysis.' },
  { icon: '🗃️', title: 'Database Systems (SQL/NoSQL)', desc: 'ER diagrams, relational schema, normalization, SQL queries, indexing, transactions, and MongoDB.' },
  { icon: '🖥️', title: 'Operating Systems', desc: 'Process management, memory management, file systems, scheduling, synchronization, and deadlocks.' },
  { icon: '🌐', title: 'Computer Networks', desc: 'OSI/TCP-IP models, routing, switching, protocols, socket programming, and network security.' },
  { icon: '🛠️', title: 'Software Engineering', desc: 'SDLC, requirements engineering, UML diagrams, design patterns, testing, and agile methodologies.' },
  { icon: '🔗', title: 'Web Development (Frontend & Backend)', desc: 'HTML/CSS, JavaScript, React, Node.js, REST APIs, Django, and full-stack project development.' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Android (Java/Kotlin), iOS (Swift), and cross-platform apps using Flutter or React Native.' },
  { icon: '🤖', title: 'Artificial Intelligence', desc: 'Search algorithms, knowledge representation, logic, planning, and intelligent agent design.' },
  { icon: '📊', title: 'Machine Learning', desc: 'Supervised and unsupervised learning, neural networks, model evaluation, and data science projects.' },
  { icon: '🔐', title: 'Cybersecurity', desc: 'Cryptography, network security, ethical hacking concepts, penetration testing, and secure coding.' },
  { icon: '☁️', title: 'Cloud Computing', desc: 'AWS, Azure, GCP fundamentals, serverless architecture, containerization with Docker and Kubernetes.' },
  { icon: '🎮', title: 'Computer Graphics', desc: 'Rasterization, ray tracing, OpenGL, 2D/3D transformations, shading, and rendering pipelines.' },
  { icon: '🔄', title: 'Distributed Systems', desc: 'Consistency models, CAP theorem, fault tolerance, distributed databases, and microservices.' },
];

const taskTypes = [
  { icon: '📋', label: 'Assignments & Homework' },
  { icon: '💻', label: 'Coding Projects' },
  { icon: '🗂️', label: 'Semester Projects' },
  { icon: '📖', label: 'Exam Preparation' },
  { icon: '📚', label: 'Dissertation & FYP' },
  { icon: '🔍', label: 'Code Review & Debugging' },
];

export default function ComputerScience() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Engineering Courses</span>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, margin: '16px 0 12px' }}>
            <span style={{ fontSize: 48 }}>💻</span>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>Computer Science</h1>
          </div>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>Expert academic support across all Computer Science subjects — from programming fundamentals to distributed systems.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>What We Cover</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginTop: 8, lineHeight: 1.2 }}>15 Subjects, One Expert Team</h2>
            <p style={{ color: '#64748b', fontSize: 16, marginTop: 12, maxWidth: 560, margin: '12px auto 0' }}>Assignments, coding projects, semester work, exam prep, and dissertations — we cover every deliverable.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {topics.map((t, i) => (
              <div key={i} className="card-hover" style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid #e2e8f0', cursor: 'default' }}>
                <div className="service-icon" style={{ background: '#ede9fe', color: '#7c3aed' }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0f172a', marginBottom: 8 }}>{t.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Support</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginTop: 8 }}>Every Type of Task, Covered</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            {taskTypes.map(item => (
              <div key={item.label} style={{ background: '#ede9fe', borderRadius: 12, padding: '20px 16px', textAlign: 'center', border: '1px solid #ddd6fe' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#4c1d95' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Connect with our Computer Science experts and get the help you need today.</p>
          <Link href="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '14px 36px', borderRadius: 8, fontWeight: 700, fontSize: 17, textDecoration: 'none', display: 'inline-block' }}>Get In Touch →</Link>
        </div>
      </section>
    </div>
  );
}
