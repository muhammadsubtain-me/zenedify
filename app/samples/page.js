export const metadata = {
  title: 'Samples',
  description: 'Browse ZenEdify sample academic work — essays, dissertations, lab reports, and coding projects across all levels.',
};

const samples = [
  { title: 'Literary Analysis Essay', subject: 'English Literature', level: 'Undergraduate', pages: 8, emoji: '📖' },
  { title: 'Machine Learning Report', subject: 'Computer Science', level: 'Graduate', pages: 15, emoji: '🤖' },
  { title: 'Business Strategy Dissertation', subject: 'Business Management', level: 'Masters', pages: 45, emoji: '📊' },
  { title: 'Organic Chemistry Lab Report', subject: 'Chemistry', level: 'Undergraduate', pages: 12, emoji: '🔬' },
  { title: 'Statistical Analysis - SPSS', subject: 'Statistics', level: 'Postgraduate', pages: 20, emoji: '📈' },
  { title: 'Java Programming Assignment', subject: 'Computer Science', level: 'Undergraduate', pages: 6, emoji: '💻' },
  { title: 'Psychology Research Paper', subject: 'Psychology', level: 'Undergraduate', pages: 10, emoji: '🧠' },
  { title: 'Financial Accounting Report', subject: 'Finance', level: 'Graduate', pages: 18, emoji: '💰' },
];

export default function Samples() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] py-[72px] px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-[#60a5fa] font-bold text-[13px] uppercase tracking-[1.5px]">Sample Work</span>
          <h1 className="font-[Poppins,sans-serif] text-[3rem] font-extrabold text-white mt-4 mb-5">Homework Help Samples</h1>
          <p className="text-[#cbd5e1] text-[17px] leading-[1.8]">Browse our sample work to see the quality and standard our experts deliver.</p>
        </div>
      </section>

      <section className="py-[80px] px-6 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-7">
            {samples.map((s, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl overflow-hidden border border-[#e2e8f0]">
                <div className="bg-gradient-to-br from-[#dbeafe] to-[#ede9fe] h-[120px] flex items-center justify-center text-[56px]">{s.emoji}</div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="bg-[#dbeafe] text-[#2563eb] text-[11px] font-bold py-[3px] px-2.5 rounded-full">{s.subject}</span>
                    <span className="bg-[#dcfce7] text-[#16a34a] text-[11px] font-bold py-[3px] px-2.5 rounded-full">{s.level}</span>
                  </div>
                  <h3 className="font-bold text-[16px] text-[#0f172a] mb-3 leading-[1.4]">{s.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-[#94a3b8]">📄 {s.pages} pages</span>
                    <button className="bg-[#2563eb] text-white border-none py-[7px] px-4 rounded-lg font-semibold text-[13px] cursor-pointer">View Sample</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
