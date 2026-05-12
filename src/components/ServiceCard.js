import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export default function ServiceCard({ icon, title, desc, color, iconColor }) {
  return (
    <Card className="group relative cursor-pointer overflow-hidden transition-all duration-[350ms] hover:-translate-y-1.5 hover:!border-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.18)]">
      <CardHeader>
        <div
          className="w-14 h-14 rounded-[14px] flex items-center justify-center text-[26px] mb-3.5 transition-transform duration-300 group-hover:scale-[1.12] group-hover:-rotate-[4deg]"
          style={{ background: color, color: iconColor }}
        >
          {icon}
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}
