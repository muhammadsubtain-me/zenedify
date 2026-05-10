import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export default function ServiceCard({ icon, title, desc, color, iconColor }) {
  return (
    <Card className="card-hover cursor-pointer">
      <CardHeader>
        <div className="service-icon" style={{ background: color, color: iconColor }}>
          {icon}
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}
