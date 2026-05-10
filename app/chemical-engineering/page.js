import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'Chemical Engineering',
  description: 'Expert academic support for Chemical Engineering — reaction kinetics, process simulation, thermodynamics and more.',
};

const topics = [
  { icon: '⚗️', title: 'Chemical Process Principles', desc: 'Fundamentals of chemical engineering — units, dimensions, process variables, and introductory calculations.' },
  { icon: '⚖️', title: 'Material & Energy Balances', desc: 'Steady-state and transient balances, recycle and bypass streams, combustion, and energy balance problems.' },
  { icon: '🔬', title: 'Chemical Reaction Engineering', desc: 'CSTR, PFR, batch reactors, residence time distribution, reaction kinetics, and selectivity.' },
  { icon: '🌡️', title: 'Thermodynamics for Chemical Engineers', desc: 'Phase equilibria, VLE, equations of state, fugacity, activity coefficients, and chemical potential.' },
  { icon: '🌊', title: 'Fluid Flow & Transport Phenomena', desc: 'Newtonian and non-Newtonian flow, pipe networks, pumps, compressors, and transport equations.' },
  { icon: '🔥', title: 'Heat & Mass Transfer', desc: 'Conduction, convection, radiation, absorption, diffusion, and simultaneous heat and mass transfer.' },
  { icon: '🏭', title: 'Separation Processes', desc: 'Distillation, absorption, liquid-liquid extraction, leaching, drying, and adsorption.' },
  { icon: '🎛️', title: 'Process Control', desc: 'PID control, feedback and feedforward control, stability analysis, and process dynamics.' },
  { icon: '💻', title: 'Process Design & Simulation', desc: 'Flowsheet development, equipment sizing, and simulation using Aspen HYSYS or Aspen Plus.' },
  { icon: '🧬', title: 'Biochemical Engineering', desc: 'Bioreactor design, enzyme kinetics, fermentation, downstream processing, and bioprocess optimization.' },
  { icon: '🛢️', title: 'Petrochemical Engineering', desc: 'Crude oil refining, cracking, reforming, petrochemical production, and plant operations.' },
  { icon: '🔗', title: 'Polymer Engineering', desc: 'Polymer synthesis, polymerization kinetics, rheology, processing methods, and material properties.' },
  { icon: '🌿', title: 'Environmental Engineering', desc: 'Wastewater treatment, air pollution control, solid waste management, and environmental regulations.' },
  { icon: '⚠️', title: 'Industrial Safety & Risk Management', desc: 'HAZOP, LOPA, fault tree analysis, process safety management, and regulatory compliance.' },
];

const taskTypes = [
  { icon: '📋', label: 'Assignments & Homework' },
  { icon: '🔬', label: 'Lab Reports' },
  { icon: '🗂️', label: 'Semester Projects' },
  { icon: '📖', label: 'Exam Preparation' },
  { icon: '📚', label: 'Dissertation & FYP' },
  { icon: '🔍', label: 'Proofreading & Editing' },
];

export default function ChemicalEngineering() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Engineering Courses</span>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, margin: '16px 0 12px' }}>
            <span style={{ fontSize: 48 }}>🧪</span>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>Chemical Engineering</h1>
          </div>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>Expert academic support across all Chemical Engineering subjects — from reaction kinetics to process simulation.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>What We Cover</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginTop: 8, lineHeight: 1.2 }}>14 Subjects, One Expert Team</h2>
            <p style={{ color: '#64748b', fontSize: 16, marginTop: 12, maxWidth: 560, margin: '12px auto 0' }}>Assignments, lab reports, semester projects, exam prep, and dissertations — we cover every deliverable.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {topics.map((t, i) => (
              <Card key={i} className="card-hover cursor-default">
                <CardHeader>
                  <div className="service-icon" style={{ background: '#fff7ed', color: '#ea580c' }}>{t.icon}</div>
                  <CardTitle>{t.title}</CardTitle>
                  <CardDescription>{t.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section style={{ padding: '56px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Support</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginTop: 8 }}>Every Type of Task, Covered</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {taskTypes.map(item => (
              <div key={item.label} style={{ background: '#f0fdf4', borderRadius: 12, padding: '20px 16px', textAlign: 'center', border: '1px solid #bbf7d0' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#14532d' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Connect with our Chemical Engineering experts and get the help you need today.</p>
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-[#0f172a] font-bold"><Link href="/contact">Get In Touch →</Link></Button>
        </div>
      </section>
    </div>
  );
}
