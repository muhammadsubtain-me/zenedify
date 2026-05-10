import SectionHeader from '../../components/SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card';
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
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Work</span>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'white', margin: '16px 0 20px' }}>Portfolio</h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>Explore our completed projects and see how we deliver excellence across every domain.</p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 28 }}>
            {projects.map((p, i) => (
              <Card key={i} className="card-hover overflow-hidden flex flex-col">
                <div style={{ background: 'linear-gradient(135deg,#dbeafe,#ede9fe)', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56 }}>{p.emoji}</div>
                <CardHeader className="pb-2">
                  <Badge className="w-fit">{p.category}</Badge>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <Separator />
                <CardFooter className="pt-4 flex justify-between items-center flex-wrap gap-2">
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
