import Link from 'next/link';

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
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Engineering Courses</span>
          <div className="flex items-center justify-center gap-4 mt-4 mb-3">
            <span className="text-[48px]">🧪</span>
            <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white leading-[1.2]">Chemical Engineering</h1>
          </div>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">Expert academic support across all Chemical Engineering subjects — from reaction kinetics to process simulation.</p>
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
                <div className="service-icon bg-[#f0fdf4] text-[#16a34a]">{t.icon}</div>
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
              <div key={item.label} className="bg-[#f0fdf4] rounded-xl py-5 px-4 text-center border border-[#bbf7d0]">
                <div className="text-[28px] mb-2.5">{item.icon}</div>
                <div className="font-semibold text-[14px] text-[#14532d]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[72px] px-6 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-[Poppins,sans-serif] text-[2.2rem] font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/85 text-[16px] mb-8 leading-[1.7]">Connect with our Chemical Engineering experts and get the help you need today.</p>
          <Link href="/contact" className="bg-[#f59e0b] text-[#0f172a] py-[14px] px-9 rounded-lg font-bold text-[17px] no-underline inline-block">Get In Touch →</Link>
        </div>
      </section>
    </div>
  );
}
