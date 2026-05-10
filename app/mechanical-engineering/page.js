import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'Mechanical Engineering',
  description: 'Expert academic support for all Mechanical Engineering subjects — assignments, lab reports, FEA, dissertations and more.',
};

const topics = [
  { icon: '⚙️', title: 'Engineering Mechanics', desc: 'Statics and dynamics of rigid bodies, free body diagrams, equilibrium, and motion analysis.' },
  { icon: '🔥', title: 'Thermodynamics', desc: 'Laws of thermodynamics, heat engines, entropy, thermodynamic cycles and energy systems.' },
  { icon: '🌊', title: 'Fluid Mechanics', desc: "Fluid statics, Bernoulli's equation, pipe flow, boundary layers, and turbulence analysis." },
  { icon: '🌡️', title: 'Heat Transfer', desc: 'Conduction, convection, radiation, heat exchangers, and thermal resistance networks.' },
  { icon: '📐', title: 'Engineering Drawing & CAD', desc: 'Technical drawing standards, 2D drafting, 3D modelling in SolidWorks, AutoCAD, and CATIA.' },
  { icon: '🔩', title: 'Machine Design', desc: 'Design of shafts, gears, bearings, springs, clutches, and mechanical power transmission systems.' },
  { icon: '🏭', title: 'Manufacturing Processes', desc: 'Casting, forming, machining, welding, CNC processes, and production planning.' },
  { icon: '🔄', title: 'Dynamics of Machines', desc: 'Kinematics and kinetics of mechanisms, cams, gears, governors, and balancing of rotating masses.' },
  { icon: '🏗️', title: 'Mechanics of Materials', desc: 'Stress, strain, torsion, bending, deflection, and failure theories for structural components.' },
  { icon: '🎛️', title: 'Control Systems', desc: 'Transfer functions, feedback control, PID controllers, stability analysis, and Bode plots.' },
  { icon: '🤖', title: 'Mechatronics', desc: 'Integration of mechanical, electrical, and computing systems — sensors, actuators, and PLCs.' },
  { icon: '❄️', title: 'HVAC Systems', desc: 'Heating, ventilation, and air conditioning design, load calculations, and refrigeration cycles.' },
  { icon: '🚗', title: 'Automotive Engineering', desc: 'Vehicle dynamics, engine systems, transmission, suspension design, and fuel efficiency.' },
  { icon: '☀️', title: 'Renewable Energy Systems', desc: 'Solar, wind, hydro, and biomass energy systems, efficiency analysis and grid integration.' },
  { icon: '📊', title: 'Finite Element Analysis (FEA)', desc: 'Structural and thermal FEA using ANSYS or Abaqus — mesh generation, load cases, and result interpretation.' },
];

const taskTypes = [
  { icon: '📋', label: 'Assignments & Homework' },
  { icon: '🔬', label: 'Lab Reports' },
  { icon: '🗂️', label: 'Semester Projects' },
  { icon: '📖', label: 'Exam Preparation' },
  { icon: '📚', label: 'Dissertation & FYP' },
  { icon: '🔍', label: 'Proofreading & Editing' },
];

export default function MechanicalEngineering() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Engineering Courses</span>
          <div className="discipline-hero-flex">
            <span style={{ fontSize: 48 }}>⚙️</span>
            <h1 className="discipline-title">Mechanical Engineering</h1>
          </div>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>Expert academic support across all Mechanical Engineering subjects — from assignments to final year projects.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>What We Cover</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginTop: 8, lineHeight: 1.2 }}>15 Subjects, One Expert Team</h2>
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
              <Badge key={item.label} variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm font-medium h-auto"><span style={{ fontSize: 18 }}>{item.icon}</span>{item.label}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Connect with our Mechanical Engineering experts and get the help you need today.</p>
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-[#0f172a] font-bold"><Link href="/contact">Get In Touch →</Link></Button>
        </div>
      </section>
    </div>
  );
}
