import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

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
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-16 sm:py-[72px] px-4 sm:px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-blue-400 font-bold text-[13px] uppercase tracking-[1.5px]">Sample Work</span>
          <h1 className="font-extrabold text-white text-[2rem] sm:text-[3rem] mt-4 mb-5 leading-tight">
            Homework Help Samples
          </h1>
          <p className="text-slate-300 text-base sm:text-[17px] leading-[1.8]">
            Browse our sample work to see the quality and standard our experts deliver.
          </p>
        </div>
      </section>

      {/* Samples Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {samples.map((s, i) => (
              <Card key={i} className="group relative flex flex-col overflow-hidden transition-all duration-[350ms] hover:-translate-y-1.5 hover:!border-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.18)]">
                <div className="bg-gradient-to-br from-blue-100 to-violet-100 h-[120px] flex items-center justify-center text-[56px]">
                  {s.emoji}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex gap-2 flex-wrap">
                    <Badge>{s.subject}</Badge>
                    <Badge variant="secondary">{s.level}</Badge>
                  </div>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <Separator />
                <CardFooter className="pt-4 flex justify-between items-center mt-auto">
                  <CardDescription>📄 {s.pages} pages</CardDescription>
                  <Button size="sm">View Sample</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
