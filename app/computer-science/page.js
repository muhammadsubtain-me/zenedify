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
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Engineering Courses</span>
          <div className="flex items-center justify-center gap-4 mt-4 mb-3">
            <span className="text-[48px]">💻</span>
            <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white leading-[1.2]">Computer Science</h1>
          </div>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">Expert academic support across all Computer Science subjects — from programming fundamentals to distributed systems.</p>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[1.5px]">What We Cover</span>
            <h2 className="font-[Poppins,sans-serif] text-[2.2rem] font-extrabold text-[#0f172a] mt-2 leading-[1.2]">15 Subjects, One Expert Team</h2>
            <p className="text-[#64748b] text-[16px] mt-3 max-w-[560px] mx-auto">Assignments, coding projects, semester work, exam prep, and dissertations — we cover every deliverable.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {topics.map((t, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-7 border border-[#e2e8f0] cursor-default">
                <div className="service-icon bg-[#ede9fe] text-[#7c3aed]">{t.icon}</div>
                <h3 className="font-bold text-[16px] text-[#0f172a] mb-2">{t.title}</h3>
                <p className="text-[14px] text-[#64748b] leading-[1.7]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-9">
            <span className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[1.5px]">Our Support</span>
            <h2 className="font-[Poppins,sans-serif] text-[1.8rem] font-extrabold text-[#0f172a] mt-2">Every Type of Task, Covered</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {taskTypes.map(item => (
              <div key={item.label} className="bg-[#ede9fe] rounded-xl py-5 px-4 text-center border border-[#ddd6fe]">
                <div className="text-[28px] mb-2.5">{item.icon}</div>
                <div className="font-semibold text-[14px] text-[#4c1d95]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] px-6 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-[Poppins,sans-serif] text-[2.2rem] font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/85 text-[16px] mb-8 leading-[1.7]">Connect with our Computer Science experts and get the help you need today.</p>
          <Link href="/contact" className="bg-[#f59e0b] text-[#0f172a] py-[14px] px-9 rounded-lg font-bold text-[17px] no-underline inline-block">Get In Touch →</Link>
        </div>
      </section>
    </div>
  );
}
