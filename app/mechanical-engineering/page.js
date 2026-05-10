import Link from 'next/link';

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
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Engineering Courses</span>
          <div className="flex items-center justify-center gap-4 mt-4 mb-3">
            <span className="text-[48px]">⚙️</span>
            <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white leading-[1.2]">Mechanical Engineering</h1>
          </div>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">Expert academic support across all Mechanical Engineering subjects — from assignments to final year projects.</p>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[1.5px]">What We Cover</span>
            <h2 className="font-[Poppins,sans-serif] text-[2.2rem] font-extrabold text-[#0f172a] mt-2 leading-[1.2]">15 Subjects, One Expert Team</h2>
            <p className="text-[#64748b] text-[16px] mt-3 max-w-[560px] mx-auto">Assignments, lab reports, semester projects, exam prep, and dissertations — we cover every deliverable.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {topics.map((t, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-7 border border-[#e2e8f0] cursor-default">
                <div className="service-icon bg-[#fff7ed] text-[#ea580c]">{t.icon}</div>
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
              <div key={item.label} className="bg-[#f0f7ff] rounded-xl py-5 px-4 text-center border border-[#dbeafe]">
                <div className="text-[28px] mb-2.5">{item.icon}</div>
                <div className="font-semibold text-[14px] text-[#1e40af]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] px-6 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-[Poppins,sans-serif] text-[2.2rem] font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/85 text-[16px] mb-8 leading-[1.7]">Connect with our Mechanical Engineering experts and get the help you need today.</p>
          <Link href="/contact" className="bg-[#f59e0b] text-[#0f172a] py-[14px] px-9 rounded-lg font-bold text-[17px] no-underline inline-block">Get In Touch →</Link>
        </div>
      </section>
    </div>
  );
}
