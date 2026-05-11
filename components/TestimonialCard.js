import { Card, CardContent, CardHeader, CardDescription } from './ui/card';
import { Separator } from './ui/separator';

export default function TestimonialCard({ name, role, text, initials }) {
  return (
    <Card className="testimonial-card-hover relative bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-slate-200 overflow-hidden transition-all duration-300">
      <CardHeader className="pb-0 pt-7 px-7">
        <div className="flex gap-1 text-amber-400 text-lg">{'★★★★★'}</div>
      </CardHeader>
      <CardContent className="p-7 pt-3">
        <CardDescription className="text-sm leading-relaxed italic mb-4">
          &quot;{text}&quot;
        </CardDescription>
        <Separator className="mb-4" />
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-base shrink-0">
            {initials}
          </div>
          <div>
            <div className="font-bold text-[15px] text-slate-900">{name}</div>
            <div className="text-[13px] text-slate-400">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
