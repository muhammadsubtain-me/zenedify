import { Card, CardContent, CardHeader, CardDescription } from './ui/card';
import { Separator } from './ui/separator';

export default function TestimonialCard({ name, role, text, initials }) {
  return (
    <Card className="testimonial-card !rounded-2xl">
      <CardHeader className="pb-0">
        <div style={{ display: 'flex', gap: 4, color: '#f59e0b', fontSize: 18 }}>{'★★★★★'}</div>
      </CardHeader>
      <CardContent className="p-7 pt-3">
        <CardDescription className="text-sm leading-relaxed italic mb-4">
          &quot;{text}&quot;
        </CardDescription>
        <Separator className="mb-4" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#2563eb,#60a5fa)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
            {initials}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#0f172a' }}>{name}</div>
            <div style={{ fontSize: 13, color: '#94a3b8' }}>{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
