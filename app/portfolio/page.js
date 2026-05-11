import SectionHeader from '../../components/SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore ZenEdify completed academic and software projects across web, mobile, AI, and enterprise domains.',
};

const projects = [
  { title: 'E-Commerce Platform', category: 'Web Development', tech: ['React', 'Node.js', 'MongoDB'], emoji: '🛒', desc: 'A full-stack e-commerce solution with payment integration and admin dashboard.' },
  { title: 'University Portal', category: 'Education Tech', tech: ['Vue.js', 'Django', 'PostgreSQL'], emoji: '🎓', desc: 'Student management portal with course scheduling and grade tracking features.' },
  { title: 'Healthcare Dashboard', category: 'Data Visualization', tech: ['React', 'D3.js', 'Python'], emoji: '🏥', desc: 'Real-time analytics dashboard for patient data and hospital operations.' },
  { title: 'Mobile Banking App', category: 'Mobile Development', tech: ['React Native', 'Firebase'], emoji: '💳', desc: 'Secure mobile banking app with biometric authentication and instant transfers.' },
  { title: 'AI Content Generator', category: 'Artificial Intelligence', tech: ['Python', 'OpenAI', 'FastAPI'], emoji: '🤖', desc: 'AI-powered tool for generating SEO-optimized content at scale.' },
  { title: 'Supply Chain System', category: 'Enterprise Software', tech: ['Angular', 'Spring Boot', 'MySQL'], emoji: '📦', desc: 'End-to-end supply chain management platform for logistics companies.' },
  { title: 'Social Media Analytics', category: 'Data Analytics', tech: ['React', 'Python', 'BigQuery'], emoji: '📊', desc: 'Comprehensive analytics tool tracking engagement across all social platforms.' },
  { title: 'EdTech Learning Platform', category: 'Education Tech', tech: ['Next.js', 'Prisma', 'Stripe'], emoji: '📚', desc: 'Interactive learning platform with video courses, quizzes, and certifications.' },
];

export default function Portfolio() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#1e3a5f] py-16 sm:py-[72px] px-4 sm:px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <span className="text-blue-400 font-bold text-[13px] uppercase tracking-[1.5px]">Our Work</span>
          <h1 className="font-extrabold text-white text-[2rem] sm:text-[3rem] mt-4 mb-5 leading-tight">Portfolio</h1>
          <p className="text-slate-300 text-base sm:text-[17px] leading-[1.8]">
            Explore our completed projects and see how we deliver excellence across every domain.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {projects.map((p, i) => (
              <Card key={i} className="card-hover overflow-hidden flex flex-col">
                <div className="bg-gradient-to-br from-blue-100 to-violet-100 h-[120px] flex items-center justify-center text-[56px]">
                  {p.emoji}
                </div>
                <CardHeader className="pb-2">
                  <Badge className="w-fit">{p.category}</Badge>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <Separator />
                <CardFooter className="pt-4 flex justify-between items-center flex-wrap gap-2 mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {p.tech.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                  </div>
                  <Button size="sm">View Project</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
