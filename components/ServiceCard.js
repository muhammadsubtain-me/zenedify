import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export default function ServiceCard({ icon, title, desc, color, iconColor }) {
  return (
    <Card className="card-hover cursor-pointer">
      <CardHeader>
        <div
          className="service-icon w-14 h-14 rounded-[14px] flex items-center justify-center text-[26px] mb-3.5 transition-transform duration-300"
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
