import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
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
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-16 sm:py-[72px] px-4 sm:px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-blue-400 font-bold text-[13px] uppercase tracking-[1.5px]">Academic Discipline</span>
          <div className="flex items-center justify-center gap-4 my-4 flex-wrap">
            <span className="text-[40px] sm:text-[48px]">⚡</span>
            <h1 className="font-extrabold text-white text-[1.8rem] sm:text-[3rem] leading-tight text-center">
              Electrical Engineering
            </h1>
          </div>
          <p className="text-slate-300 text-base sm:text-[17px] leading-[1.8]">
            Expert academic support across all Electrical Engineering subjects — from circuit analysis to smart grid technology.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-[13px] uppercase tracking-[1.5px]">What We Cover</span>
            <h2 className="font-extrabold text-slate-900 text-[1.9rem] sm:text-[2.2rem] mt-2 leading-tight">
              14 Subjects, One Expert Team
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
            Connect with our Electrical Engineering experts and get the help you need today.
          </p>
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold">
            <Link href="/contact">Get In Touch →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
