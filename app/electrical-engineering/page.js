import Link from 'next/link';

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
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Engineering Courses</span>
          <div className="flex items-center justify-center gap-4 mt-4 mb-3">
            <span className="text-[48px]">⚡</span>
            <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white leading-[1.2]">Electrical Engineering</h1>
          </div>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">Expert academic support across all Electrical Engineering subjects — from circuit analysis to smart grid technology.</p>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[1.5px]">What We Cover</span>
            <h2 className="font-[Poppins,sans-serif] text-[2.2rem] font-extrabold text-[#0f172a] mt-2 leading-[1.2]">14 Subjects, One Expert Team</h2>
            <p className="text-[#64748b] text-[16px] mt-3 max-w-[560px] mx-auto">Assignments, lab reports, semester projects, exam prep, and dissertations — we cover every deliverable.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {topics.map((t, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-7 border border-[#e2e8f0] cursor-default">
                <div className="service-icon bg-[#fefce8] text-[#ca8a04]">{t.icon}</div>
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
              <div key={item.label} className="bg-[#fefce8] rounded-xl py-5 px-4 text-center border border-[#fde68a]">
                <div className="text-[28px] mb-2.5">{item.icon}</div>
                <div className="font-semibold text-[14px] text-[#92400e]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] px-6 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-[Poppins,sans-serif] text-[2.2rem] font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/85 text-[16px] mb-8 leading-[1.7]">Connect with our Electrical Engineering experts and get the help you need today.</p>
          <Link href="/contact" className="bg-[#f59e0b] text-[#0f172a] py-[14px] px-9 rounded-lg font-bold text-[17px] no-underline inline-block">Get In Touch →</Link>
        </div>
      </section>
    </div>
  );
}
