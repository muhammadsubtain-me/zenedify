import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: 'Electrical Engineering',
  description: 'Expert academic support for all Electrical Engineering subjects — circuit analysis, power systems, control, and more.',
};

const topics = [
  { icon: '🔌', title: 'Circuit Analysis (DC & AC)', desc: 'Mesh and node analysis, superposition, Thevenin/Norton theorems, phasors, and AC power.' },
  { icon: '⚙️', title: 'Electrical Machines', desc: 'DC motors and generators, transformers, induction and synchronous machines, motor drives.' },
  { icon: '🏭', title: 'Power Systems', desc: 'Load flow analysis, fault analysis, per-unit system, power system stability and economics.' },
  { icon: '⚡', title: 'Power Electronics', desc: 'Rectifiers, inverters, choppers, converters, switching devices, and drive circuits.' },
  { icon: '🎛️', title: 'Control Systems', desc: 'Transfer functions, root locus, frequency response, state-space, and digital control.' },
  { icon: '📡', title: 'Signals and Systems', desc: 'Fourier, Laplace, Z-transform, LTI systems, sampling theorem, and filter design.' },
  { icon: '🌐', title: 'Electromagnetics', desc: "Maxwell's equations, electrostatics, magnetostatics, wave propagation, and transmission lines." },
  { icon: '⚠️', title: 'High Voltage Engineering', desc: 'Dielectric breakdown, insulation coordination, HV testing, overvoltage protection.' },
  { icon: '📏', title: 'Electrical Measurements & Instrumentation', desc: 'Sensors, transducers, signal conditioning, data acquisition, and calibration techniques.' },
  { icon: '🛡️', title: 'Protection & Switchgear', desc: 'Relays, circuit breakers, fuses, coordination studies, and substation protection schemes.' },
  { icon: '☀️', title: 'Renewable Energy Systems', desc: 'Solar PV, wind turbines, energy storage, grid integration, and power quality.' },
  { icon: '🔗', title: 'Smart Grid Technology', desc: 'Advanced metering, demand response, SCADA, IoT in power systems, and smart networks.' },
  { icon: '🚗', title: 'Electric Drives', desc: 'Speed control of DC and AC motors, VFDs, servo drives, and traction applications.' },
  { icon: '🤖', title: 'Industrial Automation', desc: 'PLCs, SCADA, DCS, ladder logic, HMI design, and industrial control networks.' },
];

const taskTypes = [
  { icon: '📋', label: 'Assignments & Homework' },
  { icon: '🔬', label: 'Lab Reports' },
  { icon: '🗂️', label: 'Semester Projects' },
  { icon: '📖', label: 'Exam Preparation' },
  { icon: '📚', label: 'Dissertation & FYP' },
  { icon: '🔍', label: 'Proofreading & Editing' },
];

export default function ElectricalEngineering() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Engineering Courses</span>
          <div className="discipline-hero-flex">
            <span style={{ fontSize: 48 }}>⚡</span>
            <h1 className="discipline-title">Electrical Engineering</h1>
          </div>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>Expert academic support across all Electrical Engineering subjects — from circuit analysis to smart grid technology.</p>
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
              <div key={item.label} style={{ background: '#fefce8', borderRadius: 12, padding: '20px 16px', textAlign: 'center', border: '1px solid #fde68a' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#92400e' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Connect with our Electrical Engineering experts and get the help you need today.</p>
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-[#0f172a] font-bold"><Link href="/contact">Get In Touch →</Link></Button>
        </div>
      </section>
    </div>
  );
}
