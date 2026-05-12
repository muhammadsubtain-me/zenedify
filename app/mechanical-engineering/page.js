import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-16 sm:py-[72px] px-4 sm:px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-blue-400 font-bold text-[13px] uppercase tracking-[1.5px]">Engineering Courses</span>
          <div className="flex items-center justify-center gap-4 my-4 flex-wrap">
            <span className="text-[40px] sm:text-[48px]">⚙️</span>
            <h1 className="font-extrabold text-white text-[1.8rem] sm:text-[3rem] leading-tight text-center">
              Mechanical Engineering
            </h1>
          </div>
          <p className="text-slate-300 text-base sm:text-[17px] leading-[1.8]">
            Expert academic support across all Mechanical Engineering subjects — from assignments to final year projects.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-[13px] uppercase tracking-[1.5px]">What We Cover</span>
            <h2 className="font-extrabold text-slate-900 text-[1.9rem] sm:text-[2.2rem] mt-2 leading-tight">
              15 Subjects, One Expert Team
            </h2>
            <p className="text-slate-500 text-base mt-3 max-w-[560px] mx-auto">
              Assignments, lab reports, semester projects, exam prep, and dissertations — we cover every deliverable.
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

      {/* Task Types */}
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

      {/* CTA */}
      <section className="py-16 sm:py-[72px] px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-extrabold text-white text-[1.7rem] sm:text-[2.2rem] mb-4">Ready to Get Started?</h2>
          <p className="text-white/85 text-base mb-8 leading-[1.7]">
            Connect with our Mechanical Engineering experts and get the help you need today.
          </p>
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold">
            <Link href="/contact">Get In Touch →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
