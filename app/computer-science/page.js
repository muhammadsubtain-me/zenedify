import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { Button } from '../../components/ui/button';

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
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-16 sm:py-[72px] px-4 sm:px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-blue-400 font-bold text-[13px] uppercase tracking-[1.5px]">Engineering Courses</span>
          <div className="flex items-center justify-center gap-4 my-4 flex-wrap">
            <span className="text-[40px] sm:text-[48px]">💻</span>
            <h1 className="font-extrabold text-white text-[1.8rem] sm:text-[3rem] leading-tight text-center">
              Computer Science
            </h1>
          </div>
          <p className="text-slate-300 text-base sm:text-[17px] leading-[1.8]">
            Expert academic support across all Computer Science subjects — from programming fundamentals to distributed systems.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-[13px] uppercase tracking-[1.5px]">What We Cover</span>
            <h2 className="font-extrabold text-slate-900 text-[1.9rem] sm:text-[2.2rem] mt-2 leading-tight">
              15 Subjects, One Expert Team
            </h2>
            <p className="text-slate-500 text-base mt-3 max-w-[560px] mx-auto">
              Assignments, coding projects, semester work, exam prep, and dissertations — we cover every deliverable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <Card key={i} className="group relative cursor-default overflow-hidden transition-all duration-[350ms] hover:-translate-y-1.5 hover:!border-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.18)]">
                <CardHeader>
                  <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-[26px] mb-3.5 transition-transform duration-300 group-hover:scale-[1.12] group-hover:-rotate-[4deg] bg-orange-50 text-orange-600">
                    {t.icon}
                  </div>
                  <CardTitle>{t.title}</CardTitle>
                  <CardDescription>{t.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-12 sm:py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-9">
            <span className="text-blue-600 font-bold text-[13px] uppercase tracking-[1.5px]">Our Support</span>
            <h2 className="font-extrabold text-slate-900 text-[1.6rem] sm:text-[1.8rem] mt-2">Every Type of Task, Covered</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {taskTypes.map(item => (
              <div key={item.label} className="bg-violet-100 rounded-xl px-5 py-5 text-center border border-violet-200 min-w-[140px]">
                <div className="text-[28px] mb-2.5">{item.icon}</div>
                <div className="font-semibold text-sm text-violet-900">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-[72px] px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-extrabold text-white text-[1.7rem] sm:text-[2.2rem] mb-4">Ready to Get Started?</h2>
          <p className="text-white/85 text-base mb-8 leading-[1.7]">
            Connect with our Computer Science experts and get the help you need today.
          </p>
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold">
            <Link href="/contact">Get In Touch →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
